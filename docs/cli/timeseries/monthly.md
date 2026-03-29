---
title: Monthly Data | Meteostat CLI
sidebar_label: Monthly Data
sidebar_position: 4
---

# Monthly Data

Fetch monthly weather summaries for one or more weather stations.

## Usage

```bash
meteo monthly STATIONS... [OPTIONS]
```

Alias: `meteo m`

## Examples

```bash
meteo monthly 10637 --start 2020 --end 2024
meteo m 10637 -s 2020 -e 2024              # Short form
meteo monthly 10637 10635 -s 2020 -e 2024  # Multiple stations
meteo monthly 10637 -s 2020 -e 2024 --parameters tavg,prcp
meteo monthly 10637 -s 2020 -e 2024 --output data.xlsx
```

## Options

See [common time series options](/cli/timeseries#common-options).
