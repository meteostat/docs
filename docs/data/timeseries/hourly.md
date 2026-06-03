---
title: Hourly Data | Data Access
sidebar_label: Hourly Data
sidebar_position: 1
---

# Hourly Data

This endpoint provides one **gzip-compressed CSV file** per weather station and year. The provided data is aggregated from historical databases, METAR reports and SYNOP data.

## Endpoints

Annual data dumps, including model data as substitute for missing observations, are available here:

```
https://data.meteostat.net/hourly/{year}/{station}.csv.gz
```

Please replace `{year}` with the desired year number and `{station}` with the ID of a [weather station](/data/weather-stations).

## Structure

CSV files use commas as separators. Each file includes a header row containing the column names, which correspond to the parameter codes described [here](/parameters?g=hourly&d=1).
The files **only contain the default set of parameters**. Additional parameters are not included in the data dumps, but can be retrieved through the [Python library](/python/).

More information on the data formats and weather condition codes is available [here](/formats).

### Data Sources

Each data column has a corresponding source column with the `_source` suffix.
