---
title: Build Database | Meteostat CLI
sidebar_label: Build Database
sidebar_position: 7
---

# Build Database

Build a SQLite database from the station files in your [local repository](/cli/stations/contributing#repository-path). The resulting file has the same structure as the [official stations database](/data/weather-stations#database), which makes it easy to test your changes locally before submitting them.

## Usage

```bash
meteo station build [OPTIONS]
```

By default, the database is written to `stations.db` in the root of the stations repository. Existing files are overwritten.

## Examples

```bash
meteo station build                         # Build stations.db in the repository root
meteo station build --output ~/stations.db  # Custom output path
```

## Options

| Option              | Short | Description                                                      |
| ------------------- | ----- | ---------------------------------------------------------------- |
| `--output`          | `-o`  | Output file path (default: `stations.db` in the repository root) |
| `--skip-validation` |       | Don't [validate](validate.md) stations before building           |
| `--repo`            |       | Path to the stations repository (overrides `stations_repo`)      |

:::info

Stations which fail validation are skipped and reported unless `--skip-validation` is set.

:::
