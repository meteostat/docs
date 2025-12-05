---
title: Climate Normals | Time Series | Python Library
sidebar_label: Climate Normals
sidebar_position: 4
---

# Climate Normals

Climate normals represent the average meteorological conditions, typically over a 30-year period. They are commonly used as a reference to compare current weather conditions against long-term averages. Climate normals are based on [monthly weather data](monthly.md) and can be requested for any period.

## 🚀 Example {#example}

Let's fetch some hourly data for Chicago O’Hare International Airport for January 1-2, 2021:

```python
from datetime import date
import meteostat as ms

# Get hourly time series
ts = ms.hourly(
    '72530',
    start=date(2021, 1, 1),
    end=date(2021, 1, 2),
)

# Fetch data as Pandas DataFrame
df = ts.fetch()

# Display first 48 hours
print(df.head(48))
```

## 🌥 Default Parameters {#default-parameters}

The default parameters for hourly data requests are [listed here](/docs/parameters?g=normals&d=1).

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

Please refer to the chapter ["Stations & Points"](/docs/python/stations-points) for detailed examples on how to specify the `station` parameter.

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

#### `model` {#parameter-model}

Include model data?

##### Data Type {#parameter-model-type}

`bool`

##### Default Value {#parameter-model-default}

`True`

---

#### `max_missing` {#parameter-max_missing}

Maximum number of missing monthly values in the normals period.

##### Data Type {#parameter-max_missing-type}

`int`

##### Default Value {#parameter-max_missing-default}

`3`

### Return Value

[TimeSeries](/docs/python/timeseries)
