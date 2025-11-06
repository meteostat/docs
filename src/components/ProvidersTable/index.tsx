import React, { useMemo, useState } from 'react';
import SearchInput from '../Shared/SearchInput';
import SelectFilter from '../Shared/SelectFilter';
import styles from '../Shared/styles.module.css';
import providers from '@site/static/providers.json';
import params from '@site/static/parameters.json';
import { capitalize } from '../Shared/utils';

type Provider = {
  id: string;
  name: string;
  granularity: string;
  parameters: string[];
};

const ProvidersTable: React.FC = () => {
  const raw = providers as Provider[];

  const allGranularities = useMemo(() => {
    const s = new Set<string>();
    raw.forEach((p) => s.add(p.granularity));
    return Array.from(s);
  }, [raw]);

  const allParameters = useMemo(() => {
    // collect parameter ids from parameters.json to show labels (id -> name mapping)
    const map = new Map<string, string>();
    (params as any[]).forEach((p) => map.set(p.id, p.name));
    const ids = new Set<string>();
    raw.forEach((r) => r.parameters.forEach((id) => ids.add(id)));
    return Array.from(ids).map((id) => ({ value: id, label: map.get(id) || id }));
  }, [raw]);

  const [search, setSearch] = useState('');
  const [granularity, setGranularity] = useState('all');
  const [parameter, setParameter] = useState('all');

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return raw.filter((r) => {
      if (granularity !== 'all' && r.granularity !== granularity) return false;
      if (parameter !== 'all' && !r.parameters.includes(parameter)) return false;
      if (!s) return true;
      if (r.name.toLowerCase().includes(s)) return true;
      if (r.id.toLowerCase().includes(s)) return true;
      return false;
    });
  }, [raw, search, granularity, parameter]);

  return (
    <div>
      <div className={styles.controls}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search" />

        <SelectFilter
          value={granularity}
          onChange={setGranularity}
          options={[{ value: 'all', label: 'All granularities' }, ...allGranularities.map((g) => ({ value: g, label: capitalize(g) }))]}
        />

        <SelectFilter
          value={parameter}
          onChange={setParameter}
          options={[{ value: 'all', label: 'All parameters' }, ...allParameters]}
        />
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table table--striped ${styles.table}`}>
          <caption style={{ captionSide: 'top', textAlign: 'left', fontWeight: 600, paddingBottom: '0.5rem' }}>
            Available providers (from static/providers.json)
          </caption>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>ID</th>
              <th style={{ textAlign: 'left' }}>Enumeration</th>
              <th style={{ textAlign: 'left' }}>Name</th>
              <th style={{ textAlign: 'left' }}>Granularity</th>
              <th style={{ textAlign: 'left' }}>Parameters</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td><code className={styles.code}>{p.id}</code></td>
                <td><code className={styles.code}>Provider.{p.id.toUpperCase()}</code></td>
                <td>{p.name}</td>
                <td>{capitalize(p.granularity)}</td>
                <td>{p.parameters.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvidersTable;
