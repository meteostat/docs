---
title: Climate Normals | Python Library
sidebar_label: Climate Normals
sidebar_position: 5
---

# Climate Normals

Climate normals represent the average meteorological conditions, typically over a 30-year period. They are commonly used as a reference to compare current weather conditions against long-term averages. Climate normals are based on [monthly weather data](timeseries/monthly.md) and can be requested for any period.

## 🚀 Example {#example}

Let's fetch some climate normals data for Frankfurt, Germany for the period 1961-1990:

```python
# Import Meteostat library
import meteostat as ms

# Get climate normals data
ts = ms.normals(ms.Station(id='10637'), 1961, 1990)
df = ts.fetch()

# Print DataFrame
print(df)
```

This is the output you would get:

```
      temp  tmin  tmax  txmn  txmx  prcp    pres     tsun
time
1      0.7  -2.1   3.1 -21.6  13.6  43.3  1017.8   2453.0
2      1.8  -1.6   5.2 -18.5  17.5  40.0  1016.6   4490.0
3      5.3   0.9   9.7 -13.0  24.7  51.0  1015.6   6982.0
4      9.2   3.9  14.2  -7.1  29.8  51.3  1013.8   9758.0
5     13.8   7.9  19.0  -2.7  31.4  61.8  1014.7  12391.0
6     17.1  11.3  22.2   0.1  34.2  69.4  1015.8  12565.0
7     18.9  13.0  24.2   2.8  36.6  64.4  1016.4  13470.0
8     18.3  12.7  23.9   2.5  35.7  64.1  1016.0  12234.0
9     14.8   9.7  20.2  -0.3  31.7  48.4  1017.5   9448.0
10     9.8   5.8  14.2  -5.2  28.0  49.8  1017.9   6150.0
11     4.7   1.7   7.6 -10.4  18.8  59.8  1016.6   2905.0
12     1.8  -1.0   4.1 -17.0  16.3  54.5  1017.3   2313.0
```

## 🌥 Default Parameters {#default-parameters}

The default parameters for normals data requests are [listed here](/parameters?g=normals&d=1).

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

Please refer to the chapter ["Stations & Points"](/python/stations-points) for detailed examples on how to specify the `station` parameter.

---

#### `start` {#parameter-start}

The start year of the desired period.

##### Data Type {#parameter-start-type}

`int`

#### Default Value {#parameter-start-default}

`1961`

---

#### `end` {#parameter-end}

The end year of the desired period.

##### Data Type {#parameter-end-type}

`int`

##### Default Value {#parameter-end-default}

`1990`

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

`Provider.HOURLY`

---

#### `max_missing` {#parameter-max_missing}

Maximum number of missing monthly values in the normals period.

##### Data Type {#parameter-max_missing-type}

`int`

##### Default Value {#parameter-max_missing-default}

`3`

### Return Value

[TimeSeries](/python/timeseries)
