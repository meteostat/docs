---
title: Nearby Stations | Meteostat CLI
sidebar_label: Nearby Stations
sidebar_position: 3
---

# Nearby Stations

Find weather stations near a geographic location. Provide a latitude and longitude and the command returns the closest stations within the specified radius.

## Usage

```bash
meteo nearby LAT LON [OPTIONS]
```

Alias: `meteo n`

## Examples

```bash
meteo nearby 50.1109 8.6821                  # Nearest stations (default: 5 within 5 km)
meteo nearby 50.1109 8.6821 --limit 10       # Return up to 10 stations
meteo nearby 50.1109 8.6821 --radius 20000   # Search within 20 km
meteo nearby 50.1109 8.6821 --format json    # JSON output
```

## Options

| Option        | Short | Description                                     |
| ------------- | ----- | ----------------------------------------------- |
| `--limit`     | `-l`  | Maximum number of stations (default: 5)         |
| `--radius`    | `-r`  | Search radius in meters (default: 5000)         |
| `--format`    | `-f`  | Output format: `csv`, `json`, `xlsx`, `parquet` |
| `--output`    | `-o`  | Output file path (defaults to stdout)           |
| `--no-header` |       | Omit CSV header row                             |
| `--all`       | `-A`  | Print full table without truncation             |
