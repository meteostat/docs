---
title: meteostat.merge | API Reference | Python Library
sidebar_label: ms.merge
sidebar_position: 9
---

# meteostat.merge

Merge multiple time series objects into a single object.

**Type:** _Function_

## Parameters

| Parameter | Description                                                          | Data Type          | Default Value |
| --------- | -------------------------------------------------------------------- | ------------------ | ------------- |
| `objs`    | A list of [`TimeSeries`](./meteostat.TimeSeries.md) objects to merge | `List[TimeSeries]` | Required      |

:::warning[Requirements]

- All time series objects to be merged must have the same granularity (e.g., all hourly, all daily, or all monthly)
- In case of hourly data, the time zones of the time series objects must match

:::

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

A new `TimeSeries` object representing the merged time series.

## Example

```python
from datetime import date
import meteostat as ms

# Specify time ranges
START1 = date(2020, 1, 1)
END1 = date(2020, 1, 10)
START2 = date(2020, 1, 11)
END2 = date(2020, 1, 20)

# Get daily data for two different periods
ts1 = ms.daily('72503', START1, END1)
ts2 = ms.daily('72503', START2, END2)

# Merge time series
# highlight-next-line
ts_combined = ms.merge([ts1, ts2])

# Fetch combined data as Pandas DataFrame
df = ts_combined.fetch()

print(df)
```
