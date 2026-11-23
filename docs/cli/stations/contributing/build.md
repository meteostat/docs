---
title: Build Database | Meteostat CLI
sidebar_label: Build Database
sidebar_position: 7
---

# Build Database

Build a SQLite database or a Parquet file from the station files in your [local repository](/cli/stations/contributing#repository-path). The SQLite database has the same structure as the [official stations database](/data/weather-stations#database), which makes it easy to test your changes locally before submitting them.

## Usage

```bash
meteo station build [OPTIONS]
```

By default, the database is written to `stations.db` in the root of the stations repository. With `--format parquet`, the default file is `stations.parquet`. Existing files are overwritten.

## Examples

```bash
meteo station build                         # Build stations.db in the repository root
meteo station build --output ~/stations.db  # Custom output path
meteo station build --format parquet        # Build stations.parquet in the repository root
```

## Parquet Format {#parquet}

The Parquet file contains one row per station, sorted by ID:

| Column        | Type                  | Description                                                |
| ------------- | --------------------- | ---------------------------------------------------------- |
| `id`          | `string`              | Meteostat ID                                               |
| `name`        | `string`              | English name                                               |
| `names`       | `map<string, string>` | Names in other languages by language code (`null` if none) |
| `country`     | `string`              | ISO 3166-1 alpha-2 country code                            |
| `region`      | `string`              | ISO 3166-2 region code                                     |
| `latitude`    | `double`              | Latitude                                                   |
| `longitude`   | `double`              | Longitude                                                  |
| `elevation`   | `int16`               | Elevation in meters                                        |
| `timezone`    | `string`              | IANA time zone                                             |
| `identifiers` | `map<string, string>` | Identifiers by key, e.g. `wmo` or `icao` (`null` if none)  |

Identifiers and translated names are stored as maps, so new identifier types or languages don't change the columns. Parquet readers can load only the columns they need, e.g. with DuckDB:

```sql
SELECT id, latitude, longitude, identifiers['icao'] AS icao
FROM 'stations.parquet';
```

Parquet output requires the `contrib` extra:

```bash
uv tool install "meteostat-cli[contrib]"
```

## Options

| Option              | Short | Description                                                                            |
| ------------------- | ----- | -------------------------------------------------------------------------------------- |
| `--output`          | `-o`  | Output file path (default: `stations.db` or `stations.parquet` in the repository root) |
| `--format`          | `-f`  | Output format: `sqlite` (default) or `parquet`                                         |
| `--skip-validation` |       | Don't [validate](validate.md) stations before building                                 |
| `--repo`            |       | Path to the stations repository (overrides `stations_repo`)                            |

:::info

Stations which fail validation are skipped and reported unless `--skip-validation` is set.

:::
