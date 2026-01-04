---
title: Time Series | Python Library
sidebar_label: Overview
id: python-ts-overview
slug: /python/timeseries
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Time Series

Meteostat provides access to time series data for thousands of weather stations worldwide. These time series are provided in different granularities and can be consumed through a single interface.

## 🚀 Example {#example}

<Tabs>
  <TabItem value="hourly" label="Hourly" default>
        Let's fetch some hourly data for Atlanta, USA from January 1 to December 31, 2018:

        ```python
      # Import Meteostat library and dependencies
      from datetime import datetime
      import meteostat as ms

      # Set time period
      start = datetime(2018, 1, 1)
      end = datetime(2018, 12, 31, 23, 59)

      # Get hourly data
      ts = ms.hourly(ms.Station(id='72219'), start, end)
      df = ts.fetch()

      # Print DataFrame
      print(df)
        ```

  </TabItem>
  <TabItem value="daily" label="Daily">
        Let's fetch some daily temperature data for Frankfurt, Germany in 2018:

        ```python
      # Import Meteostat library and dependencies
      from datetime import date
      import meteostat as ms

      # Set time period
      start = date(2018, 1, 1)
      end = date(2018, 12, 31)

      # Get daily data
      ts = ms.daily(ms.Station(id='10637'), start, end)
      df = ts.fetch()

      # Print DataFrame
      print(df)
        ```

  </TabItem>
  <TabItem value="monthly" label="Monthly">
        Let's fetch some monthly data for Frankfurt, Germany from 2000 to 2018:

        ```python
      # Import Meteostat library and dependencies
      from datetime import date
      import meteostat as ms

      # Set time period
      start = date(2000, 1, 1)
      end = date(2018, 12, 31)

      # Get monthly data
      ts = ms.monthly(ms.Station(id='10637'), start, end)
      df = ts.fetch()

      # Print DataFrame
      print(df)
        ```

  </TabItem>
</Tabs>

## 🎯 Location Input {#location-input}

When working with time series data in Meteostat, you can specify weather stations and geographical points as location input. We are using the [`hourly`](/python/timeseries/hourly.md) function as an example, but the same options apply to other time series functions.

:::tip[Performance Tip]
When working with the default providers, you may specify a new [`Station`](../api/meteostat.Station.md) object with just the station ID. That will improve performance by avoiding unnecessary metadata lookups. Example: `ms.Station(id='10637')`.
:::

### Station ID

You can access time series data by specifying a weather station using its Meteostat ID:

```python
ts = ms.hourly('10637', START, END)
```

You can also provide a list of station IDs to access data from multiple stations simultaneously:

```python
ts = ms.hourly(['10637', '10635'], START, END)
```

### Station

You can pass a [`Station`](../api/meteostat.Station.md) object to specify a weather station. This could also be a list of [`Station`](../api/meteostat.Station.md) objects. Passing a [`Station`](../api/meteostat.Station.md) object allows you to specify a station's metadata yourself. This is useful if you want to include stations that are not (yet) part of the Meteostat database.

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

### DataFrame

You can pass a Pandas [`DataFrame`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) with an index named `id`. This is mainly used for accessing data for a list of nearby weather stations obtained from the [`meteostat.stations.nearby`](../api/meteostat.stations.nearby.md) function.

```python
# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)

# Get nearby weather stations as Pandas DataFrame
stations = ms.stations.nearby(POINT, limit=4)

# Get hourly data
ts = ms.hourly(stations, START, END)
```

### Point

You can pass a [`Point`](../api/meteostat.Point.md) object to specify a geographical point. This could also be a list of [`Point`](../api/meteostat.Point.md) objects. Passing a [`Point`](../api/meteostat.Point.md) object allows you to specify a location's metadata yourself. This is useful if you want to access data for a geographical point, not a specific weather station.

:::warning
Note that when using a [`Point`](../api/meteostat.Point.md) object, only providers that support accessing data by geographical point can be used.
:::

```python
POINT = ms.Point(50.05, 8.6842, 100)

ts = ms.hourly(POINT, START, END, providers=[ms.Provider.METNO_FORECAST])
```

## 🔀 Merging Time Series {#merging}

Meteostat allows you to merge multiple time series objects into a single object using the [`merge`](../api/meteostat.merge.md) function. This is useful when you want to combine data from different sources or time periods into one cohesive dataset. The [`merge`](../api/meteostat.merge.md) function can handle various types of time series data, including hourly, daily, and monthly data. However, it is important to ensure that the time series being merged are compatible in terms of their structure and parameters.

### Requirements {#merging-requirements}

- All time series objects to be merged must have the same granularity (e.g., all hourly, all daily, or all monthly).
- In case of hourly data, the time zones of the time series objects must match.

### Example {#merging-example}

```python
from datetime import date
import meteostat as ms

# Specify time range
START1 = date(2020, 1, 1)
END1 = date(2020, 1, 10)
START2 = date(2020, 1, 11)
END2 = date(2020, 1, 20)

# Get daily data for two different periods
ts1 = ms.daily('72503', START1, END1)
ts2 = ms.daily('72503', START2, END2)

# Merge time series
ts = ms.merge([ts1, ts2])

# Fetch combined data as Pandas DataFrame
df = ts.fetch()

print(df)
```

## 👀 Learn More {#learn-more}

<DocCardList />

## 🔍 API {#api}

[`meteostat.TimeSeries`](../api/meteostat.TimeSeries.md)
