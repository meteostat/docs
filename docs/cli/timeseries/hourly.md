---
title: Hourly Data | Meteostat CLI
sidebar_label: Hourly Data
sidebar_position: 2
---

# Hourly Data

Fetch hourly weather observations for one or more weather stations. Supports coordinate-based input for interpolated data.

## Usage

```bash
meteo hourly STATIONS... [OPTIONS]
```

Alias: `meteo h`

## Examples

```bash
meteo hourly 10637 --start 2024-01-01 --end 2024-01-31
meteo h 10637 -s 2024-01-01 -e 2024-01-31                     # Short form
meteo hourly 10637 10635 -s 2024-01-01 -e 2024-01-31          # Multiple stations
meteo hourly 50.1109,8.6821 -s 2024-01-01 -e 2024-01-07       # Coordinates (interpolation)
meteo hourly 10637 -s 2024-01-01 -e 2024-01-31 --timezone Europe/Berlin
meteo hourly 10637 -s 2024-01-01 -e 2024-01-31 --parameters tavg,prcp
meteo hourly 10637 -s 2024-01-01 -e 2024-01-31 --output data.csv
meteo hourly 10637 -s 2024-01-01 -e 2024-01-31 --output chart.png
```

## Options

Hourly data supports all [common time series options](/cli/timeseries#common-options) plus:

| Option       | Short | Description                                    |
| ------------ | ----- | ---------------------------------------------- |
| `--timezone` | `-t`  | Timezone for timestamps (e.g. `Europe/Berlin`) |
