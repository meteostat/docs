---
title: Daily Bulk Data | Data Access
sidebar_label: Daily Data
sidebar_position: 2
---

# Daily Data

This endpoint provides **one Parquet file per year**.

:::warning[Beta]
This interface is currently in beta. We are actively working on improving it and adding new features. The formats and data structures may change in the future. We recommend checking back regularly for updates and improvements.
:::

## Endpoints

Annual data dumps, including model data as a substitute for missing observations, are available here:

```
https://data.meteostat.net/daily/{year}.parquet
```

Please replace `{year}` with the desired year number.

## Structure

Parquet files use a columnar storage format. The columns correspond to the parameter codes described [here](/parameters?g=daily&d=1).

More information on the data formats and weather condition codes is available [here](/formats).

:::tip[Geographical Coordinates]
The Parquet files only contain the station ID, but not the geographical coordinates. To retrieve the coordinates, please download the [weather station database](/data/weather-stations) and join it based on the station ID.
:::

### Data Sources

Each data column has a corresponding source column with the `_source` suffix.
