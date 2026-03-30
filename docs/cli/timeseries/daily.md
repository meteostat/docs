---
title: Daily Data | Meteostat CLI
sidebar_label: Daily Data
sidebar_position: 3
---

# Daily Data

Fetch daily weather observations for one or more weather stations. Supports coordinate-based input for interpolated data.

## Usage

```bash
meteo daily STATIONS... [OPTIONS]
```

Alias: `meteo d`

## Examples

```bash
meteo daily 10637 --start 2024-01-01 --end 2024-12-31
meteo d 10637 -s 2024-01-01 -e 2024-12-31              # Short form
meteo daily 10637 10635 -s 2024-01-01 -e 2024-12-31   # Multiple stations
meteo daily 50.1109,8.6821 -s 2024-01-01 -e 2024-12-31 # Coordinates (interpolation)
meteo daily 10637 -s 2024-01-01 -e 2024-12-31 --parameters tavg,tmin,tmax,prcp
meteo daily 10637 -s 2024-01-01 -e 2024-12-31 --agg max
meteo daily 10637 -s 2024-01-01 -e 2024-12-31 --output data.json
meteo daily 10637 -s 2024-01-01 -e 2024-12-31 --output chart.png
```

## Options

See [common time series options](/cli/timeseries#common-options).
