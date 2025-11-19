---
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Hourly Weather

If you want to investigate the weather on a particular day or a short period of time, hourly time series data is a great choice.

## 🚀 Example {#example}

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

## 🌥 Default Parameters {#default-parameters}

The default parameters for hourly data requests are [listed here](/docs/parameters?g=hourly&d=1).

## 🔍 API {#api}

### Interface

```
meteostat.hourly
```

### Parameters

#### `station` {#parameter-station}

Weather station(s) or geographical point(s)

##### Data Type {#parameter-station-type}

`str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html), [`Index`](https://pandas.pydata.org/docs/reference/indexing.html) or [`Series`](https://pandas.pydata.org/docs/reference/series.html)

##### Examples {#parameter-station-examples}

Please refer to the chapter ["Stations & Points"](/docs/python/timeseries/overview.md#stations-points) for detailed examples on how to specify the `station` parameter.

---

#### `start` {#parameter-start}

Start date of the desired period

##### Data Type {#parameter-start-type}

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) or [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)

---

#### `end` {#parameter-end}

End date of the desired period

##### Data Type {#parameter-end-type}

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) or [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)

---

#### `timezone` {#parameter-timezone}

Time zone of the period and records, if `None` UTC is used

##### Data Type {#parameter-timezone-type}

`Optional[str]`

##### Default Value {#parameter-timezone-default}

`None`

---

#### `parameters` {#parameter-parameters}

Requested meteorological parameters

##### Data Type {#parameter-parameters-type}

`List[Parameter]`

##### Default Value {#parameter-parameters-default}

[Default parameters](#-default-parameters)

---

#### `providers` {#parameter-providers}

Requested data providers

##### Data Type {#parameter-providers-type}

`List[Provider]`

##### Default Value {#parameter-providers-default}

`Provider.HOURLY`

---

#### `model` {#parameter-model}

Include model data?

##### Data Type {#parameter-model-type}

`bool`

##### Default Value {#parameter-model-default}

`True`

### Return Value

[TimeSeries](/docs/python/timeseries)
