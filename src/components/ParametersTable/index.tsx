import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';
import params from '@site/static/parameters.json';
import { normalizeUnit, joinUnique, joinAndCap, capitalize } from '../Shared/utils';
import SearchInput from '../Shared/SearchInput';
import SelectFilter from '../Shared/SelectFilter';

type Param = {
  id: string;
  name: string;
  granularity: string;
  unit?: string | null;
  dtype: string;
};

const ParametersTable: React.FC = () => {
  const raw = params as Param[];

  // Group items by id AND name and collect unique granularities, units and dtypes
  const map = new Map<string, {
    id: string;
    name: string;
    granularities: Set<string>;
    units: Set<string>;
    dtypes: Set<string>;
  }>();

  raw.forEach((p) => {
    const key = `${p.id}::${p.name}`;
    if (!map.has(key)) {
      map.set(key, {
        id: p.id,
        name: p.name || '—',
        granularities: new Set(),
        units: new Set(),
        dtypes: new Set(),
      });
    }

    const entry = map.get(key)!;
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

      // match against id
      if (e.id && e.id.toLowerCase().includes(s)) return true;

      return false;
    });
  }, [items, search, granularityFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search" ariaLabel="Search parameters" />

        <SelectFilter
          value={granularityFilter}
          onChange={setGranularityFilter}
          options={[{ value: 'all', label: 'All granularities' }, ...allGranularities.map((g) => ({ value: g, label: capitalize(g) }))]}
          ariaLabel="Filter by granularity"
        />
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table table--striped ${styles.table}`}>
        <caption style={{ captionSide: 'top', textAlign: 'left', fontWeight: 600, paddingBottom: '0.5rem' }}>
          Available meteorological parameters
        </caption>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>ID</th>
            <th style={{ textAlign: 'left' }}>Enumeration</th>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'left' }}>Granularity</th>
            <th style={{ textAlign: 'left' }}>Unit(s)</th>
            <th style={{ textAlign: 'left' }}>Type(s)</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((e) => (
            <tr key={e.name}>
              <td><code className={styles.code}>{e.id}</code></td>
              <td><code className={styles.code}>Parameter.{e.id.toUpperCase()}</code></td>
              <td>{e.name}</td>
              <td>{joinAndCap(e.granularities)}</td>
              <td>{joinUnique(e.units)}</td>
              <td>{joinUnique(e.dtypes)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
        Note: parameters are grouped by <code>id</code> and <code>name</code>. Fields that vary across grouped entries
        are shown as comma-separated unique values.
      </p>
    </div>
  );
};

export default ParametersTable;
