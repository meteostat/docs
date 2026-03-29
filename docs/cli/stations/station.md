---
title: Station Lookup | Meteostat CLI
sidebar_label: Station Lookup
sidebar_position: 2
---

# Station Lookup

Browse and search weather stations in the Meteostat network. You can look up a specific station by ID or filter stations by country, region, name, or various identifiers.

## Usage

```bash
meteo station [ID] [OPTIONS]
```

Alias: `meteo s`

## Examples

```bash
meteo station 10637                        # Metadata for a specific station
meteo station --country DE                 # List stations by country
meteo station --country DE --state HE      # Filter by country and state
meteo station --name "Frankfurt"           # Search by name
meteo station --wmo 10637                  # Look up by WMO ID
meteo station --bbox 8.0,50.0,9.0,51.0     # Stations within a bounding box
```

## Options

| Option        | Short | Description                                      |
| ------------- | ----- | ------------------------------------------------ |
| `--country`   | `-c`  | ISO 3166-1 alpha-2 country code                  |
| `--state`     |       | State or region code                             |
| `--name`      | `-n`  | Station name (partial match)                     |
| `--wmo`       | `-w`  | WMO station ID                                   |
| `--icao`      | `-i`  | ICAO station ID                                  |
| `--iata`      |       | IATA station ID                                  |
| `--national`  | `-N`  | National station ID                              |
| `--bbox`      |       | Bounding box (`lon_min,lat_min,lon_max,lat_max`) |
| `--sql`       |       | Arbitrary SQL query                              |
| `--format`    | `-f`  | Output format: `csv`, `json`, `xlsx`, `parquet`  |
| `--output`    | `-o`  | Output file path (defaults to stdout)            |
| `--no-header` |       | Omit CSV header row                              |
| `--all`       | `-A`  | Print full table without truncation              |
