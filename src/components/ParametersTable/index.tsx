import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';
import params from '@site/static/parameters.json';

type Param = {
  id: string;
  name: string;
  granularity: string;
  unit?: string | null;
  dtype: string;
};

const normalizeUnit = (u?: string | null) => (u === null || u === undefined ? '—' : u);

const joinUnique = (vals: Set<string>) => {
  const arr = Array.from(vals).filter(Boolean);
  if (arr.length === 0) return '—';
  return arr.join(', ');
};

const ParametersTable: React.FC = () => {
  const raw = params as Param[];

  // Group items by name and collect unique ids, granularities, units and dtypes
  const map = new Map<string, {
    name: string;
    ids: Set<string>;
    granularities: Set<string>;
    units: Set<string>;
    dtypes: Set<string>;
  }>();

  raw.forEach((p) => {
    const key = p.name || '—';
    if (!map.has(key)) {
      map.set(key, {
        name: key,
        ids: new Set(),
        granularities: new Set(),
        units: new Set(),
        dtypes: new Set(),
      });
    }

    const entry = map.get(key)!;
    if (p.id) entry.ids.add(p.id);
    entry.granularities.add(p.granularity);
    entry.units.add(normalizeUnit(p.unit));
    if (p.dtype) entry.dtypes.add(p.dtype);
  });

  // Preserve original JSON order: Map preserves insertion order based on first occurrence
  const items = Array.from(map.values());

  // collect all granularities for the filter (preserve insertion order)
  const allGranularities = useMemo(() => {
    const g = new Set<string>();
    raw.forEach((p) => g.add(p.granularity));
    return Array.from(g);
  }, [raw]);

  const [search, setSearch] = useState('');
  const [granularityFilter, setGranularityFilter] = useState('all');

  const filteredItems = useMemo(() => {
    const s = search.trim().toLowerCase();

    return items.filter((e) => {
      // granularity filter
      if (granularityFilter !== 'all') {
        if (!e.granularities.has(granularityFilter)) return false;
      }

      if (!s) return true;

      // match against name
      if (e.name.toLowerCase().includes(s)) return true;

      // match against any id
      for (const id of e.ids) {
        if (id.toLowerCase().includes(s)) return true;
      }

      return false;
    });
  }, [items, search, granularityFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.searchLabel}>
          <input
            className={styles.search}
            type="search"
            aria-label="Search parameters by id or name"
            placeholder="Search parameters by id or name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search ? (
            <button className={styles.clearBtn} onClick={() => setSearch('')} aria-label="Clear search">×</button>
          ) : null}
        </div>

        <div>
          <select
            className={styles.select}
            aria-label="Filter by granularity"
            value={granularityFilter}
            onChange={(e) => setGranularityFilter(e.target.value)}
          >
            <option value="all">All granularities</option>
            {allGranularities.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table table--striped ${styles.table}`}>
        <caption style={{ captionSide: 'top', textAlign: 'left', fontWeight: 600, paddingBottom: '0.5rem' }}>
          Available meteorological parameters
        </caption>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>ID(s)</th>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'left' }}>Granularity</th>
            <th style={{ textAlign: 'left' }}>Unit(s)</th>
            <th style={{ textAlign: 'left' }}>Type(s)</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((e) => (
            <tr key={e.name}>
              <td><code className={styles.code}>{joinUnique(e.ids)}</code></td>
              <td>{e.name}</td>
              <td>{joinUnique(e.granularities)}</td>
              <td>{joinUnique(e.units)}</td>
              <td>{joinUnique(e.dtypes)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
        Note: parameters are grouped by <code>id</code> and <code>name</code>. Fields that vary across grouped entries (unit, type)
        are shown as comma-separated unique values.
      </p>
    </div>
  );
};

export default ParametersTable;
