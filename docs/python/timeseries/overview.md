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

## 🚀 Example

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

## 👀 Learn More

<DocCardList />

## 🔍 API

### Interface

Through one of the following:

- [`meteostat.hourly`](/docs/python/timeseries/hourly.md)
- [`meteostat.daily`](/docs/python/timeseries/daily.md)
- [`meteostat.monthly`](/docs/python/timeseries/monthly.md)
- [`meteostat.normals`](/docs/python/timeseries/normals.md)

### Properties

#### `granularity`

The time series's granularity

##### Data Type

`Granularity`

---

#### `stations`

Included weather stations

##### Data Type

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

| **Parameter** | **Description**                                                                                           | **Type**                                                                        |
| :------------ | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| `granularity` | The time series's granularity                                                                             | `Granularity`                                                                   |
| `stations`    | Included weather stations                                                                                 | [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)              |
| `start`       | Start date of the requested period                                                                        | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) |
| `end`         | End date of the requested period                                                                          | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) |
| `timezone`    | Time zone of the period and records (only hourly granularity)                                             | `str`                                                                           |
| `parameters`  | Included meteorological parameters                                                                        | `List[Parameter]`                                                               |
| `freq`        | The time series's frequency (e.g. `1h` in case of hourly granularity)                                     | `str`                                                                           |
| `empty`       | Is the time series empty?                                                                                 | `bool`                                                                          |
| `providers`   | Included data providers                                                                                   | `List[Provider]`                                                                |
| `licenses`    | Applicable licenses                                                                                       | `List[License]`                                                                 |
| `attribution` | The attribution/copyright string                                                                          | `str`                                                                           |
| `commercial`  | Can data be used for commercial purposes?                                                                 | `bool`                                                                          |
| `is_valid`    | Does the time series pass all quality checks?                                                             | `bool`                                                                          |
| `lapse_rate`  | The temperature's lapse rate, if applicable (at least two included weather stations with sufficient data) | `float` or `None`                                                               |

### Methods

#### `fetch`

Fetch the actual weather/climate data.

##### Attributes

| **Attribute** | **Description**                                               | **Type** | **Default** |
| :------------ | :------------------------------------------------------------ | :------- | :---------- |
| `squash`      | Squash data from different sources                            | `bool`   | `True`      |
| `fill`        | Fill missing records                                          | `bool`   | `False`     |
| `sources`     | Include source columns?                                       | `bool`   | `False`     |
| `location`    | Add location-related columns (latitude, longitude, elevation) | `bool`   | `False`     |
| `clean`       | Remove inaccurate data                                        | `bool`   | `True`      |

##### Return Value

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

##### Example

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

#### `count`

Get the number of rows in the whole time series or by parameter. `NaN` values are excluded.

##### Attributes

| **Attribute** | **Description**                                                                      | **Type**             | **Default** |
| :------------ | :----------------------------------------------------------------------------------- | :------------------- | :---------- |
| `parameter`   | The parameter which should be counted, if `None` the whole time series is considered | `Parameter` or `str` | `None`      |

##### Return Value

`int`

##### Example

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

#### `completeness`

The share of non-`NaN` values of the time series's full length.

##### Attributes

| **Attribute** | **Description**                                                          | **Type**                     | **Default** |
| :------------ | :----------------------------------------------------------------------- | :--------------------------- | :---------- |
| `parameter`   | The parameter of interest, if `None` the whole time series is considered | `Parameter`, `str` or `None` | `None`      |

##### Return Value

`float`

- `0` means all data is missing
- `1` means all data is available

##### Example

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
