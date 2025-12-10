---
title: Concatenation | Python Library
sidebar_label: Concatenation
sidebar_position: 10
---

# Concatenation

Meteostat allows you to concatenate multiple time series objects into a single object using the `concat` function. This is useful when you want to combine data from different sources or time periods into one cohesive dataset. The `concat` function can handle various types of time series data, including hourly, daily, and monthly data. However, it is important to ensure that the time series being concatenated are compatible in terms of their structure and parameters.

## 🚀 Example {#example}

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

# Concatenate time series
ts_combined = ms.concat([ts1, ts2])

# Fetch combined data as Pandas DataFrame
df = ts_combined.fetch()

print(df)
```

## 📋 Requirements

- All time series objects to be concatenated must have the same granularity (e.g., all hourly, all daily, or all monthly).
- In case of hourly data, the time zones of the time series objects must match.

## 🔍 API {#api}

### Interface

```
meteostat.concat
```

### Parameters

#### `objs` {#parameter-objs}

A list of [`TimeSeries`](timeseries) objects to concatenate.

##### Data Type {#parameter-objs-type}

`List[TimeSeries]`

### Return Value

A new [`TimeSeries`](timeseries) object representing the concatenated time series.
