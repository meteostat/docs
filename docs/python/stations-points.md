---
title: Stations & Points | Python Library
sidebar_label: Stations & Points
sidebar_position: 7
---

# Stations & Points

When working with time series data in Meteostat, you can specify weather stations and geographical points as location input. We are using the [`hourly`](/python/timeseries/hourly.md) function as an example, but the same options apply to other time series functions.

:::tip[Performance Tip]
When working with the default providers, you may specify a new [`Station`](#station-object) object with just the station ID. That will improve performance by avoiding unnecessary metadata lookups. Example: `ms.Station(id='10637')`.
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

## Station Object

You can pass a `Station` object to specify a weather station. This could also be a list of `Station` objects. Passing a `Station` object allows you to specify a station's metadata yourself. This is useful if you want to include stations that are not (yet) part of the Meteostat database.

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

## Pandas Object

You can pass a Pandas `DataFrame`, `Series` or `Index` object containing station IDs to specify multiple weather stations. This is mainly used for accessing data for a list of nearby weather stations obtained from the [`meteostat.stations.nearby`](#) function.

```python
# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)

# Get nearby weather stations as Pandas DataFrame
stations = ms.stations.nearby(POINT, limit=4)

# Get hourly data
ts = ms.hourly(stations, START, END)
```

Meteostat extracts the station IDs from the Pandas object using the following assumptions:

- If a `DataFrame` is provided, the station IDs are expected to be in an index named `id`.
- If a `Series` or `Index` is provided, the station IDs are expected to be the values of the object.

## Point Object

You can pass a `Point` object to specify a geographical point. This could also be a list of `Point` objects. Passing a `Point` object allows you to specify a location's metadata yourself. This is useful if you want to access data for a geographical point, not a specific weather station.

:::warning
Note that when using a `Point` object, only providers that support accessing data by geographical point can be used.
:::

```python
POINT = ms.Point(50.05, 8.6842, 100)

ts = ms.hourly(POINT, START, END, providers=[ms.Provider.METNO_FORECAST])
```
