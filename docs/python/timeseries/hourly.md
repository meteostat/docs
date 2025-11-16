---
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Hourly Weather

If you want to investigate the weather on a particular day or a short period of time, hourly time series data is a great choice.

## 🚀 Example

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

## 🌥 Default Parameters

- `Parameter.TEMP`
- `Parameter.RHUM`
- `Parameter.PRCP`
- `Parameter.SNWD`
- `Parameter.WDIR`
- `Parameter.WSPD`
- `Parameter.WPGT`
- `Parameter.PRES`
- `Parameter.TSUN`
- `Parameter.CLDC`
- `Parameter.COCO`

Learn more about the [different parameters](/docs/parameters.md).

## 🔍 API

### Interface

```
meteostat.hourly
```

### Parameters

#### `station`

Weather station(s) or geographical point(s)

##### Data Type

`str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, [`Index`](https://pandas.pydata.org/docs/reference/indexing.html) or [`Series`](https://pandas.pydata.org/docs/reference/series.html)

##### Examples

<Tabs>
  <TabItem value="single-station" label="Single Station" default>
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

| **Parameter** | **Description**                                            | **Type**                                                                                                                                                                                                      | **Default**                                |
| :------------ | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------- |
| `station`     | Weather station(s) or geographical point(s)                | `str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, [`Index`](https://pandas.pydata.org/docs/reference/indexing.html) or [`Series`](https://pandas.pydata.org/docs/reference/series.html) |                                            |
| `start`       | Start date of the desired period                           | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) or [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)                                                    |                                            |
| `end`         | End date of the desired period                             | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) or [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)                                                    |                                            |
| `timezone`    | Time zone of the period and records, if `None` UTC is used | `Optional[str]`                                                                                                                                                                                               | `None`                                     |
| `parameters`  | Requested meteorological parameters                        | `List[Parameter]`                                                                                                                                                                                             | [Default parameters](#-default-parameters) |
| `providers`   | Requested data providers                                   | `List[Provider]`                                                                                                                                                                                              | `Provider.HOURLY`                          |
| `model`       | Include model data?                                        | `bool`                                                                                                                                                                                                        | `True`                                     |

### Return Value

[TimeSeries](/docs/python/timeseries)
