---
title: Monthly Weather | Time Series | Python Library
sidebar_label: Monthly Weather
sidebar_position: 3
---

# Monthly Weather

Monthly time series data is perfect for examining long-term climate trends and seasonal patterns over extended periods, such as years or decades.

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

The default parameters for hourly data requests are [listed here](/parameters?g=monthly&d=1).

## 🔍 API {#api}

### Interface

```
meteostat.monthly
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

`[Provider.MONTHLY]`

---

#### `model` {#parameter-model}

Include model data?

##### Data Type {#parameter-model-type}

`bool`

##### Default Value {#parameter-model-default}

`True`

### Return Value

[TimeSeries](/python/timeseries)
