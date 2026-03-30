---
title: Location Input
description: Learn how to specify a location for fetching weather data using the Meteostat Python library.
tags:
  - Python
  - Time Series
---

# Location Input

When working with time series data in Meteostat, you can specify weather stations and geographical points as location input. We are using the [`hourly`](/python/timeseries/hourly.md) function as an example, but the same options apply to other time series functions.

:::tip[Performance Tip]
When working with the default providers, you may specify a new [`Station`](/python/api/meteostat.Station.md) object with just the station ID. That will improve performance by avoiding unnecessary metadata lookups. Example: `ms.Station(id='10637')`.
:::

## Station ID

You can access time series data by specifying a weather station using its Meteostat ID:

```python
ts = ms.hourly('10637', START, END)
```

You can also provide a list of station IDs to access data from multiple stations simultaneously:

```python
ts = ms.hourly(['10637', '10635'], START, END)
```

## Station

You can pass a [`Station`](/python/api/meteostat.Station.md) object to specify a weather station. This could also be a list of [`Station`](/python/api/meteostat.Station.md) objects. Passing a [`Station`](/python/api/meteostat.Station.md) object allows you to specify a station's metadata yourself. This is useful if you want to include stations that are not (yet) part of the Meteostat database.

```python
STATION = ms.Station(
    id='10637',
    name='Frankfurt Airport',
    country='DE',
    region='HE',
    lat=50.05,
    lon=8.6842,
    elevation=100
)

ts = ms.hourly(STATION, START, END)
```

## DataFrame

You can pass a Pandas [`DataFrame`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) with an index named `id`. This is mainly used for accessing data for a list of nearby weather stations obtained from the [`meteostat.stations.nearby`](/python/api/meteostat.stations.nearby.md) function.

```python
# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)

# Get nearby weather stations as Pandas DataFrame
stations = ms.stations.nearby(POINT, limit=4)

# Get hourly data
ts = ms.hourly(stations, START, END)
```

## Point

You can pass a [`Point`](/python/api/meteostat.Point.md) object to specify a geographical point. This could also be a list of [`Point`](/python/api/meteostat.Point.md) objects. Passing a [`Point`](/python/api/meteostat.Point.md) object allows you to specify a location's metadata yourself. This is useful if you want to access data for a geographical point, not a specific weather station.

:::warning
Note that when using a [`Point`](/python/api/meteostat.Point.md) object, only providers that support accessing data by geographical point can be used.
:::

```python
POINT = ms.Point(50.05, 8.6842, 100)

ts = ms.hourly(POINT, START, END, providers=[ms.Provider.METNO_FORECAST])
```
