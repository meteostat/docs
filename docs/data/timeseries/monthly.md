---
title: Monthly Data | Datasets
sidebar_label: Monthly Data
sidebar_position: 3
---

# Monthly Data

This endpoint provides one **gzip-compressed CSV file** per weather station.

## Endpoints

Data dumps, including model data as substitute for missing observations, are available here:

```
https://data.meteostat.net/monthly/{station}.csv.gz
```

Please replace `{station}` with the ID of a [weather station](/data/weather-stations).

## Structure

CSV files use commas as separators. Each file includes a header row containing the column names, which correspond to the parameter codes described [here](/parameters?g=monthly&d=1).
The files **only contain the default set of parameters**. Additional parameters are not included in the data dumps, but can be retrieved through the [Python library](/python/).

More information on the data formats and weather condition codes is available [here](/formats).

### Data Sources

Each data column has a corresponding source column with the `_source` suffix. Monthly data may be aggregated from multiple sources; in such cases, the source column will list the data source IDs separated by a single whitespace.
