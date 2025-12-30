---
title: Daily Weather | Time Series | Python Library
sidebar_label: Daily Weather
sidebar_position: 2
---

# Daily Weather

Daily time series data is ideal for analyzing weather patterns over longer periods, such as weeks, months, or years.

## 🚀 Example {#example}

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

This is the output you would get:

```
            temp  tmin  tmax  rhum  prcp  snwd  wspd  wpgt    pres  tsun  cldc
time
2018-01-01   8.1   6.6  11.2    70   1.1     0  26.6  59.8  1005.0    42     7
2018-01-02   6.4   5.2   8.0    74   5.8     0  22.0  50.8  1011.9    12     7
2018-01-03   8.1   5.3  10.4    72   6.3     0  36.4  83.9   999.1   144     6
2018-01-04   7.6   5.9  10.9    83   8.4     0  20.9  58.7   999.9     0     6
2018-01-05   8.5   7.1  10.2    83   4.8     0  18.7  59.4  1001.8     0     7
...          ...   ...   ...   ...   ...   ...   ...   ...     ...   ...   ...
2018-12-27  -1.4  -2.1  -0.4    96   0.0     0   6.5  22.3  1030.7     0     8
2018-12-28  -0.5  -1.0   0.3    94   0.0     0   9.7  24.1  1031.8     0     8
2018-12-29   1.3  -0.7   4.6    92   0.8     0  16.9  45.7  1033.8     0     8
2018-12-30   7.2   4.5   8.3    76   0.0     0  17.3  48.6  1033.2     0     8
2018-12-31   6.8   5.6   9.0    94   0.0     0   9.7  43.9  1034.5     0     8

[365 rows x 11 columns]
```

## 🌥 Default Parameters {#default-parameters}

The default parameters for daily data requests are [listed here](/parameters?g=daily&d=1).

## 🔍 API {#api}

### Interface

```
meteostat.daily
```

### Parameters

#### `station` {#parameter-station}

Weather station(s) or geographical point(s)

##### Data Type {#parameter-station-type}

`str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

##### Examples {#parameter-station-examples}

Please refer to the chapter ["Stations & Points"](/python/stations-points) for detailed examples on how to specify the `station` parameter.

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

#### `parameters` {#parameter-parameters}

Requested meteorological parameters

##### Data Type {#parameter-parameters-type}

`List[Parameter]`

##### Default Value {#parameter-parameters-default}

[Default parameters](#default-parameters)

---

#### `providers` {#parameter-providers}

Requested data providers

##### Data Type {#parameter-providers-type}

`List[Provider]`

##### Default Value {#parameter-providers-default}

`[Provider.DAILY]`
