---
title: Accessing Climate Data from DWD | Python Library Cookbook
sidebar_label: Accessing Data from DWD
sidebar_position: 3
description: Learn how to fetch weather and climate data directly from Deutscher Wetterdienst (DWD) using the Meteostat Python library.
tags:
  - Python
  - Time Series
  - Providers
  - DWD
---

# Accessing Climate Data from DWD

[Deutscher Wetterdienst (DWD)](https://www.dwd.de) is Germany's national meteorological service and one of the most comprehensive sources of weather and climate data for German stations. Meteostat integrates several DWD data feeds — covering hourly observations, daily summaries, and monthly records — that you can target directly using the [`providers`](/python/api/meteostat.hourly#parameters) parameter.

## Available DWD Providers {#providers}

| Provider Enum             | Granularity       | Covered Area |
| ------------------------- | ----------------- | ------------ |
| `ms.Provider.DWD_HOURLY`  | Hourly            | Germany      |
| `ms.Provider.DWD_POI`     | Hourly            | Europe       |
| `ms.Provider.DWD_MOSMIX`  | Hourly (forecast) | Global       |
| `ms.Provider.DWD_DAILY`   | Daily             | Germany      |
| `ms.Provider.DWD_MONTHLY` | Monthly           | Germany      |
| `ms.Provider.CLIMAT`      | Monthly           | Global       |

A full list of available providers is available [here](/providers).

:::tip[Be Explicit]
Always pass both `providers` and `parameters` when targeting a specific DWD source. This avoids unnecessary data fetches and makes the data lineage clear.
:::

## Installation {#installation}

```bash
pip install meteostat
```

The `DWD_MOSMIX` provider also requires the `lxml` package for parsing XML data.

## Finding a DWD Station {#finding-stations}

DWD does not only cover stations in Germany, but also provides access to stations across Europe and beyond. However, the majority of DWD's data is for German stations, and the `DWD_HOURLY`, `DWD_DAILY`, and `DWD_MONTHLY` providers are limited to German stations only.

Those are the relevant identifiers for the different DWD feeds:

- `DWD_HOURLY`, `DWD_DAILY` and `DWD_MONTHLY`: `national` ID; **most** German stations
- `DWD_POI`: `wmo` ID, **selected** European stations
- `DWD_MOSMIX`: `mosmix` ID, **thousands** of global stations

For example, let's filter for German stations with a `national` ID:

```python
import meteostat as ms

stations = ms.stations.query("""
    SELECT s.id, n.name, i.value AS national_id, s.latitude, s.longitude
    FROM stations s
    JOIN names n ON s.id = n.station AND n.language = 'en'
    JOIN identifiers i ON s.id = i.station AND i.key = 'national'
    WHERE s.country = 'DE';
""", index_col="id")

print(stations)
```

Throughout this recipe, **Frankfurt Airport** (`10637`) is used as the example station — it has one of the longest continuous DWD records in Germany.

## Hourly Observations {#hourly}

`DWD_HOURLY` provides synoptic observations recorded every hour. The example below retrieves temperature and relative humidity for a full calendar year:

```python
from datetime import datetime
import meteostat as ms

start = datetime(2024, 1, 1)
end   = datetime(2024, 12, 31, 23, 59)

ts = ms.hourly(
    '10637',
    start,
    end,
    providers=[ms.Provider.DWD_HOURLY],
    parameters=[ms.Parameter.TEMP, ms.Parameter.RHUM],
)

df = ts.fetch()

print(df.head())
```

Sample output:

```
                     temp  rhum
time
2024-01-01 00:00:00   4.8  92.0
2024-01-01 01:00:00   4.5  93.0
2024-01-01 02:00:00   4.2  94.0
2024-01-01 03:00:00   4.0  95.0
2024-01-01 04:00:00   3.8  95.0
```

## POI Feed {#poi}

`DWD_POI` is a richer hourly feed that additionally includes cloud cover, snow depth, wind gusts, and visibility. Use it when you need the full parameter set:

```python
ts = ms.hourly(
    '10637',
    start,
    end,
    providers=[ms.Provider.DWD_POI],
    parameters=[
        ms.Parameter.TEMP,
        ms.Parameter.PRCP,
        ms.Parameter.CLDC,
        ms.Parameter.SNWD,
    ],
)
df = ts.fetch()
```

## Daily Summaries {#daily}

`DWD_DAILY` provides daily climate summaries with a full set of parameters including min/max temperatures, precipitation, sunshine duration, and more:

```python
from datetime import date
import meteostat as ms

start = date(2020, 1, 1)
end   = date(2024, 12, 31)

ts = ms.daily(
    '10637',
    start,
    end,
    providers=[ms.Provider.DWD_DAILY],
    parameters=[
        ms.Parameter.TMIN,
        ms.Parameter.TMAX,
        ms.Parameter.PRCP,
        ms.Parameter.TSUN,
    ],
)
df = ts.fetch()
print(df.describe())
```

## Monthly Records {#monthly}

`DWD_MONTHLY` provides pre-aggregated monthly values published by DWD. Use it for long-running climatological analyses where daily resolution is not required:

```python
from datetime import date
import meteostat as ms

start = date(1950, 1, 1)
end   = date(2024, 12, 31)

ts = ms.monthly(
    '10637',
    start,
    end,
    providers=[ms.Provider.DWD_MONTHLY],
    parameters=[ms.Parameter.TEMP, ms.Parameter.PRCP],
)
df = ts.fetch()
print(df.tail(12))
```

## CLIMAT Reports {#climat}

`CLIMAT` is an international monthly exchange format that DWD contributes to. It covers stations worldwide and includes parameters not available in `DWD_MONTHLY`, such as absolute monthly extremes (`txmn`, `txmx`) and mean sea-level pressure:

```python
from datetime import date
import meteostat as ms

start = date(1990, 1, 1)
end   = date(2024, 12, 31)

ts = ms.monthly(
    '10637',
    start,
    end,
    providers=[ms.Provider.CLIMAT],
    parameters=[ms.Parameter.TEMP, ms.Parameter.TMIN, ms.Parameter.TMAX],
)
df = ts.fetch()
```
