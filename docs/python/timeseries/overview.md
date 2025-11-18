---
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
        Let's plot 2018 temperature data for Frankfurt, Germany:

        ```python
        from datetime import date
        import matplotlib.pyplot as plt
        import meteostat as ms

        # Specify location and time range
        POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location
        START = date(2018, 1, 1)
        END = date(2018, 12, 31)

        # Get nearby weather stations
        stations = ms.stations.nearby(POINT, limit=4)

        # Get daily data & perform interpolation
        ts = ms.daily(stations, START, END)
        df = ms.interpolate(ts, POINT)

        # Plot line chart including average, minimum and maximum temperature
        df.plot(y=[ms.Parameter.TEMP, ms.Parameter.TMIN, ms.Parameter.TMAX])
        plt.show()
        ```

  </TabItem>
  <TabItem value="daily" label="Daily">
        Let's plot 2018 temperature data for Frankfurt, Germany:

        ```python
        from datetime import date
        import matplotlib.pyplot as plt
        import meteostat as ms

        # Specify location and time range
        POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location
        START = date(2018, 1, 1)
        END = date(2018, 12, 31)

        # Get nearby weather stations
        stations = ms.stations.nearby(POINT, limit=4)

        # Get daily data & perform interpolation
        ts = ms.daily(stations, START, END)
        df = ms.interpolate(ts, POINT)

        # Plot line chart including average, minimum and maximum temperature
        df.plot(y=[ms.Parameter.TEMP, ms.Parameter.TMIN, ms.Parameter.TMAX])
        plt.show()
        ```

  </TabItem>
  <TabItem value="monthly" label="Monthly">
        Let's plot 2018 temperature data for Frankfurt, Germany:

        ```python
        from datetime import date
        import matplotlib.pyplot as plt
        import meteostat as ms

        # Specify location and time range
        POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location
        START = date(2018, 1, 1)
        END = date(2018, 12, 31)

        # Get nearby weather stations
        stations = ms.stations.nearby(POINT, limit=4)

        # Get daily data & perform interpolation
        ts = ms.daily(stations, START, END)
        df = ms.interpolate(ts, POINT)

        # Plot line chart including average, minimum and maximum temperature
        df.plot(y=[ms.Parameter.TEMP, ms.Parameter.TMIN, ms.Parameter.TMAX])
        plt.show()
        ```

  </TabItem>
    <TabItem value="normals" label="Normals">
        Let's plot 2018 temperature data for Frankfurt, Germany:

        ```python
        from datetime import date
        import matplotlib.pyplot as plt
        import meteostat as ms

        # Specify location and time range
        POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location
        START = date(2018, 1, 1)
        END = date(2018, 12, 31)

        # Get nearby weather stations
        stations = ms.stations.nearby(POINT, limit=4)

        # Get daily data & perform interpolation
        ts = ms.daily(stations, START, END)
        df = ms.interpolate(ts, POINT)

        # Plot line chart including average, minimum and maximum temperature
        df.plot(y=[ms.Parameter.TEMP, ms.Parameter.TMIN, ms.Parameter.TMAX])
        plt.show()
        ```

  </TabItem>
</Tabs>

## 📍 Stations & Points {#stations-points}

When working with time series data in Meteostat, you can specify weather stations and geographical points as location input. We are using the [`hourly`](/docs/python/timeseries/hourly.md) function as an example, but the same options apply to other time series functions.

### Station ID

You can access time series data by specifying a weather station using its Meteostat ID:

```python
ts = ms.hourly('10637', START, END)
```

You can also provide a list of station IDs to access data from multiple stations simultaneously:

```python
ts = ms.hourly(['10637', '10635'], START, END)
```

### Station Object

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

### Pandas Object

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

### Point Object

You can pass a `Point` object to specify a geographical point. This could also be a list of `Point` objects. Passing a `Point` object allows you to specify a location's metadata yourself. This is useful if you want to access data for a geographical point, not a specific weather station.

:::warning
Note that when using a `Point` object, only providers that support accessing data by geographical point can be used.
:::

```python
POINT = ms.Point(50.05, 8.6842, 100)

ts = ms.hourly(POINT, START, END, providers=[ms.Provider.METNO_FORECAST])
```

## 👀 Learn More {#learn-more}

<DocCardList />

## 📄 Source Code {#source-code}

The source code of the `TimeSeries` class is available on [GitHub](#).

## 🔍 API {#api}

### Interface

Through one of the following:

- [`meteostat.hourly`](/docs/python/timeseries/hourly.md)
- [`meteostat.daily`](/docs/python/timeseries/daily.md)
- [`meteostat.monthly`](/docs/python/timeseries/monthly.md)
- [`meteostat.normals`](/docs/python/timeseries/normals.md)

### Parameters

Please refer to the respective [interface documentation](#interface) for a list of accepted parameters.

### Properties

#### `granularity` {#property-granularity}

The time series's granularity.

##### Data Type {#property-granularity-type}

`Granularity`

---

#### `stations` {#property-stations}

Included weather stations.

##### Data Type {#property-stations-type}

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

---

#### `start` {#property-start}

Start date of the requested period.

##### Data Type {#property-start-type}

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime)

---

#### `end` {#property-end}

End date of the requested period.

##### Data Type {#property-end-type}

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime)

---

#### `timezone` {#property-timezone}

Time zone of the period and records (only hourly granularity).

##### Data Type {#property-timezone-type}

`str`

---

#### `parameters` {#property-parameters}

Included meteorological parameters.

##### Data Type {#property-parameters-type}

`List[Parameter]`

---

#### `freq` {#property-freq}

The time series's frequency (e.g. `1h` in case of hourly granularity).

##### Data Type {#property-freq-type}

`str`

---

#### `empty` {#property-empty}

Is the time series empty?

##### Data Type {#property-empty-type}

`bool`

---

#### `providers` {#property-providers}

Included data providers.

##### Data Type {#property-providers-type}

`List[Provider]`

---

#### `licenses` {#property-licenses}

Applicable licenses.

##### Data Type {#property-licenses-type}

`List[License]`

---

#### `attribution` {#property-attribution}

The attribution/copyright string.

##### Data Type {#property-attribution-type}

`str`

---

#### `commercial` {#property-commercial}

Can data be used for commercial purposes?

##### Data Type {#property-commercial-type}

`bool`

---

#### `is_valid` {#property-is_valid}

Does the time series pass all quality checks?

##### Data Type {#property-is_valid-type}

`bool`

---

#### `lapse_rate` {#property-lapse_rate}

The temperature's lapse rate, if applicable (at least two included weather stations with sufficient data).

##### Data Type {#property-lapse_rate-type}

`float` or `None`

### Methods

#### `fetch` {#method-fetch}

Fetch the actual weather/climate data.

##### Attributes {#method-fetch-attributes}

| **Attribute** | **Description**                                               | **Type** | **Default** |
| :------------ | :------------------------------------------------------------ | :------- | :---------- |
| `squash`      | Squash data from different sources                            | `bool`   | `True`      |
| `fill`        | Fill missing records                                          | `bool`   | `False`     |
| `sources`     | Include source columns?                                       | `bool`   | `False`     |
| `location`    | Add location-related columns (latitude, longitude, elevation) | `bool`   | `False`     |
| `clean`       | Remove inaccurate data                                        | `bool`   | `True`      |

##### Return Value {#method-fetch-return}

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

##### Example {#method-fetch-example}

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)
# highlight-next-line
df = ts.fetch()

# Print the DataFrame
print(df)
```

---

#### `count` {#method-count}

Get the number of rows in the whole time series or by parameter. `NaN` values are excluded.

##### Attributes {#method-count-attributes}

| **Attribute** | **Description**                                                                      | **Type**             | **Default** |
| :------------ | :----------------------------------------------------------------------------------- | :------------------- | :---------- |
| `parameter`   | The parameter which should be counted, if `None` the whole time series is considered | `Parameter` or `str` | `None`      |

##### Return Value {#method-count-return}

`int`

##### Example {#method-count-example}

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)
# highlight-next-line
count = ts.count(ms.Parameter.PRCP)

# Print the DataFrame
print(f'{count} rows with precipitation data')
```

---

#### `completeness` {#method-completeness}

The share of non-`NaN` values of the time series's full length.

##### Attributes {#method-completeness-attributes}

| **Attribute** | **Description**                                                          | **Type**                     | **Default** |
| :------------ | :----------------------------------------------------------------------- | :--------------------------- | :---------- |
| `parameter`   | The parameter of interest, if `None` the whole time series is considered | `Parameter`, `str` or `None` | `None`      |

##### Return Value {#method-completeness-return}

`float`

- `0` means all data is missing
- `1` means all data is available

##### Example {#method-completeness-example}

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)
# highlight-next-line
completeness = ts.completeness(ms.Parameter.PRCP)

# Print the DataFrame
print(f'Precipitation data completeness: {completeness * 100}%')
```
