---
title: Climate Normals | Meteostat CLI
sidebar_label: Climate Normals
sidebar_position: 5
---

# Climate Normals

Fetch climate normals for one or more weather stations. Climate normals are long-term averages (typically 30 years) used as a baseline for comparing current conditions.

## Usage

```bash
meteo normals STATIONS... [OPTIONS]
```

Alias: `meteo n`

## Examples

```bash
meteo normals 10637 --start 1991 --end 2020
meteo n 10637 -s 1991 -e 2020              # Short form
meteo normals 10637 10635 -s 1991 -e 2020  # Multiple stations
meteo normals 10637 -s 1991 -e 2020 --parameters tavg,prcp
meteo normals 10637 -s 1991 -e 2020 --output normals.csv
```

## Options

See [common time series options](/cli/timeseries#common-options).
