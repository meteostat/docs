---
title: Monthly Bulk Data | Datasets
sidebar_label: Monthly Data
sidebar_position: 3
---

# Monthly Data

This endpoint provides **a single Parquet file** containing historical monthly data for all weather stations.

## Endpoints

The historical monthly data, including model data as a substitute for missing observations, for all weather stations is available here:

```
https://data.meteostat.net/monthly.parquet
```

## Structure

Parquet files use a columnar storage format. The columns correspond to the parameter codes described [here](/parameters?g=monthly&d=1).

More information on the data formats and weather condition codes is available [here](/formats).

:::tip[Geographical Coordinates]
The Parquet files only contain the station ID, but not the geographical coordinates. To retrieve the coordinates, please download the [weather station database](/data/weather-stations) and join it based on the station ID.
:::

### Data Sources

Each data column has a corresponding source column with the `_source` suffix.
