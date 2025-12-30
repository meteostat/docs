---
title: Hourly Weather | Time Series | Python Library
sidebar_label: Hourly Weather
sidebar_position: 1
---

# Hourly Weather

If you want to investigate the weather on a particular day or a short period of time, hourly time series data is a great choice.

## 🚀 Example {#example}

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

This is the output you would get:

```
                     temp  rhum  prcp  snwd  wdir  wspd  wpgt    pres  tsun  cldc  coco
time
2018-01-01 00:00:00   0.6    63  <NA>  <NA>   340  18.4  <NA>  1024.6  <NA>     6  <NA>
2018-01-01 01:00:00  -1.1    66   0.0  <NA>   320  16.6  <NA>  1025.4  <NA>  <NA>  <NA>
2018-01-01 02:00:00  -1.1    53   0.0  <NA>   330  22.3  <NA>  1025.8  <NA>  <NA>  <NA>
2018-01-01 03:00:00  -1.1    51   0.0  <NA>   330  25.9  <NA>  1025.6  <NA>  <NA>  <NA>
2018-01-01 04:00:00  -1.7    51   0.0  <NA>   340  18.4  <NA>  1026.1  <NA>  <NA>  <NA>
...                   ...   ...   ...   ...   ...   ...   ...     ...   ...   ...   ...
2018-12-31 19:00:00  20.0    84   0.0  <NA>   200  18.4  <NA>  1016.5  <NA>  <NA>     4
2018-12-31 20:00:00  21.1    76   0.0  <NA>   190  22.3  <NA>  1015.8  <NA>  <NA>     4
2018-12-31 21:00:00  21.1    73   0.0  <NA>   180  27.7  <NA>  1014.7  <NA>  <NA>     4
2018-12-31 22:00:00  21.1    68   0.0  <NA>   190  27.7  <NA>  1015.7  <NA>  <NA>     7
2018-12-31 23:00:00  20.0    73   0.0  <NA>   180  20.5  <NA>  1015.6  <NA>  <NA>     7

[8760 rows x 11 columns]
```

## 🌥 Default Parameters {#default-parameters}

The default parameters for hourly data requests are [listed here](/parameters?g=hourly&d=1).

## 🔍 API {#api}

### Interface

```
meteostat.hourly
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

[Default parameters](#default-parameters)

---

#### `providers` {#parameter-providers}

Requested data providers

##### Data Type {#parameter-providers-type}

`List[Provider]`

##### Default Value {#parameter-providers-default}

`[Provider.HOURLY]`
