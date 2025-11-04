---
sidebar_position: 2
---

# Hourly Data

This endpoint provides one GZ compressed CSV file per weather station and year. The provided data is being aggregated from historical databases, METAR reports and SYNOP data.

## Endpoints

Annual data dumps, including model data as substitute for missing observations, are available here:

```
https://data.meteostat.net/hourly/{year}/{station}.csv.gz
```

Please replace `{year}` with the desired year number and `{station}` with the ID of a weather station.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file includes a header row containing the column names, which correspond to the parameter codes described [here](/formats.html#meteorological-parameters).

More information on the data formats and weather condition codes is available [here](/formats.html).

### Data Sources

Each data column has a corresponding source column with the `_source` suffix.