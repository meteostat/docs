import React from 'react';
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

  return (
    <div>
      <table className="table table--striped" style={{ width: '100%' }}>
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
          {items.map((e) => (
            <tr key={e.name}>
              <td><code>{joinUnique(e.ids)}</code></td>
              <td>{e.name}</td>
              <td>{joinUnique(e.granularities)}</td>
              <td>{joinUnique(e.units)}</td>
              <td>{joinUnique(e.dtypes)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
        Note: parameters are grouped by <code>id</code> and <code>name</code>. Fields that vary across grouped entries (unit, type)
        are shown as comma-separated unique values.
      </p>
    </div>
  );
};

export default ParametersTable;
