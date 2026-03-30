---
title: Inventory | Meteostat CLI
sidebar_label: Inventory
sidebar_position: 4
---

# Inventory

Check what data is available for a weather station. You can filter by granularity and specific parameters to see exactly which records exist.

## Usage

```bash
meteo inventory STATION_ID [OPTIONS]
```

Alias: `meteo i`

## Examples

```bash
meteo inventory 10637
meteo inventory 10637 --granularity daily
meteo inventory 10637 --granularity daily --parameters tavg,tmin,tmax
```

## Options

| Option          | Short | Description                                                     |
| --------------- | ----- | --------------------------------------------------------------- |
| `--granularity` | `-g`  | Filter by granularity: `hourly`/`h`, `daily`/`d`, `monthly`/`m` |
| `--parameters`  | `-p`  | Comma-separated parameters (e.g. `tavg,tmin,tmax`)              |
| `--providers`   | `-P`  | Comma-separated data providers                                  |
| `--format`      | `-f`  | Output format: `csv`, `json`, `xlsx`, `parquet`                 |
| `--output`      | `-o`  | Output file path (defaults to stdout)                           |
| `--no-header`   |       | Omit CSV header row                                             |
| `--all`         | `-A`  | Print full table without truncation                             |
