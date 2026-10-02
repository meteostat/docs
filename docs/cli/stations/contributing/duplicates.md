---
title: Find Duplicates | Meteostat CLI
sidebar_label: Find Duplicates
sidebar_position: 6
---

# Find Duplicates

Find potential duplicate stations in your [local repository](/cli/stations/contributing#repository-path). Two stations are reported as potential duplicates if they share an identifier (e.g. WMO or ICAO ID) or are located close to each other and have similar names.

## Usage

```bash
meteo station duplicates [OPTIONS]
```

## Examples

```bash
meteo station duplicates                      # Check the whole directory
meteo station duplicates --country DE         # Only check stations in Germany
meteo station duplicates --id 10637           # Find duplicates of a specific station
meteo station duplicates --radius 500         # Only match stations within 500 m
meteo station duplicates --format json        # JSON output
```

## Output

Each row represents a pair of stations along with their distance and the reasons why they were matched:

```text
station_a  station_b  distance  reasons
10637      0A1B2      120       wmo, name
10635      D4X9K      340       location, name
```

Review each pair carefully. If two records describe the same station, merge the relevant information into one using [`edit`](edit.md) and remove the other one using [`delete`](delete.md).

## Options

| Option        | Short | Description                                                     |
| ------------- | ----- | --------------------------------------------------------------- |
| `--id`        |       | Only report duplicates of the given station (repeatable)        |
| `--country`   | `-c`  | Only check stations in the given country                        |
| `--radius`    | `-r`  | Maximum distance in meters for location matches (default: 1000) |
| `--format`    | `-f`  | Output format: `csv`, `json`, `xlsx`, `parquet`                 |
| `--output`    | `-o`  | Output file path (defaults to stdout)                           |
| `--no-header` |       | Omit CSV header row                                             |
| `--all`       | `-A`  | Print full table without truncation                             |
| `--repo`      |       | Path to the stations repository (overrides `stations_repo`)     |

The command exits with code `1` if potential duplicates were found.
