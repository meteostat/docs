import React, { useMemo, useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import params from "@site/static/parameters.json";
import {
  normalizeUnit,
  joinUnique,
  joinAndCap,
  capitalize,
} from "../Shared/utils";
import SearchInput from "../Shared/SearchInput";
import SelectFilter from "../Shared/SelectFilter";

type Param = {
  id: string;
  name: string;
  granularity: string;
  unit?: string | null;
  dtype: string;
  default?: boolean;
};

const ParametersTable: React.FC = () => {
  const raw = params as Param[];

  // Group items by id AND name and collect unique granularities, units and dtypes
  const map = new Map<
    string,
    {
      id: string;
      name: string;
      granularities: Set<string>;
      defaultGranularities: Set<string>;
      units: Set<string>;
      dtypes: Set<string>;
    }
  >();

  raw.forEach((p) => {
    const key = `${p.id}::${p.name}`;
    if (!map.has(key)) {
      map.set(key, {
        id: p.id,
        name: p.name || "—",
        granularities: new Set(),
        defaultGranularities: new Set(),
        units: new Set(),
        dtypes: new Set(),
      });
    }

    const entry = map.get(key)!;
    entry.granularities.add(p.granularity);
    if (p.default) entry.defaultGranularities.add(p.granularity);
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

  const [search, setSearch] = useState("");
  const [granularityFilter, setGranularityFilter] = useState("all");
  const [defaultOnly, setDefaultOnly] = useState(false);

  const initializedRef = useRef(false);

  // Initialize state from URL search params (safe for SSR)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    const q = sp.get("q") || "";
    const g = sp.get("g") || sp.get("granularity") || "all";
    const d =
      sp.get("d") === "1" ||
      sp.get("default") === "1" ||
      sp.get("d") === "true";

    setSearch(q);
    setGranularityFilter(g);
    setDefaultOnly(d);

    initializedRef.current = true;
  }, []);

  // Sync state -> URL (preserve other existing params)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Avoid writing the URL before initial parse
    if (!initializedRef.current) return;

    const url = new URL(window.location.href);
    const sp = url.searchParams;

    if (search) sp.set("q", search);
    else sp.delete("q");

    if (granularityFilter && granularityFilter !== "all")
      sp.set("g", granularityFilter);
    else sp.delete("g");

    if (defaultOnly) sp.set("d", "1");
    else sp.delete("d");

    const searchString = sp.toString();
    const newUrl = `${url.pathname}${searchString ? `?${searchString}` : ""}${
      url.hash
    }`;
    window.history.replaceState({}, "", newUrl);
  }, [search, granularityFilter, defaultOnly]);

  const filteredItems = useMemo(() => {
    const s = search.trim().toLowerCase();

    return items.filter((e) => {
      // granularity filter
      if (granularityFilter !== "all") {
        if (!e.granularities.has(granularityFilter)) return false;
      }

      // default-only filter
      if (defaultOnly) {
        if (granularityFilter === "all") {
          if (!e.defaultGranularities || e.defaultGranularities.size === 0)
            return false;
        } else {
          if (
            !e.defaultGranularities ||
            !e.defaultGranularities.has(granularityFilter)
          )
            return false;
        }
      }

      if (!s) return true;

      // match against name
      if (e.name.toLowerCase().includes(s)) return true;

      // match against id
      if (e.id && e.id.toLowerCase().includes(s)) return true;

      return false;
    });
  }, [items, search, granularityFilter, defaultOnly]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search"
          ariaLabel="Search parameters"
        />

        <SelectFilter
          value={granularityFilter}
          onChange={setGranularityFilter}
          options={[
            { value: "all", label: "All granularities" },
            ...allGranularities.map((g) => ({
              value: g,
              label: capitalize(g),
            })),
          ]}
          ariaLabel="Filter by granularity"
        />
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          <input
            type="checkbox"
            checked={defaultOnly}
            onChange={(e) => setDefaultOnly(e.target.checked)}
            aria-label="Show default parameters only"
          />
          <span style={{ fontSize: "0.9rem" }}>Default only</span>
        </label>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table table--striped ${styles.table}`}>
          <caption
            style={{
              captionSide: "top",
              textAlign: "left",
              fontWeight: 600,
              paddingBottom: "0.5rem",
            }}
          >
            Available meteorological parameters
          </caption>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>ID</th>
              <th style={{ textAlign: "left" }}>Enumeration</th>
              <th style={{ textAlign: "left" }}>Name</th>
              <th style={{ textAlign: "left" }}>Granularity</th>
              <th style={{ textAlign: "left" }}>Unit(s)</th>
              <th style={{ textAlign: "left" }}>Type(s)</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((e) => (
              <tr key={e.name}>
                <td>
                  <code className={styles.code}>{e.id}</code>
                </td>
                <td>
                  <code className={styles.code}>
                    Parameter.{e.id.toUpperCase()}
                  </code>
                </td>
                <td>{e.name}</td>
                <td>
                  {Array.from(e.granularities).map((g, i) => (
                    <span key={g}>
                      {i > 0 ? ", " : ""}
                      {e.defaultGranularities &&
                      e.defaultGranularities.has(g) ? (
                        <strong>{capitalize(g)}</strong>
                      ) : (
                        capitalize(g)
                      )}
                    </span>
                  ))}
                </td>
                <td>{joinUnique(e.units)}</td>
                <td>{joinUnique(e.dtypes)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        Note: parameters are grouped by <code>id</code> and <code>name</code>.
        Fields that vary across grouped entries are shown as comma-separated
        unique values.
      </p>
    </div>
  );
};

export default ParametersTable;
