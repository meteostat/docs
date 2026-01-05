---
title: meteostat.merge | API Reference | Python Library
sidebar_label: ms.merge
sidebar_position: 9
---

# meteostat.merge

Merge multiple time series objects into a single object.

- **Type**: _Function_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/merge.py)

:::warning[Requirements]

- All time series objects to be merged must have the same granularity (e.g., all hourly, all daily, or all monthly)
- In case of hourly data, the time zones of the time series objects must match

:::

## Parameters

| Parameter | Description                                                          | Data Type                                       | Default Value |
| --------- | -------------------------------------------------------------------- | ----------------------------------------------- | ------------- |
| `objs`    | A list of [`TimeSeries`](./meteostat.TimeSeries.md) objects to merge | [`List[TimeSeries]`](./meteostat.TimeSeries.md) | Required      |

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

The merged time series object.

## Example

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

# Merge time series
# highlight-next-line
ts = ms.merge([ts1, ts2])

# Fetch combined data as Pandas DataFrame
df = ts.fetch()

print(df)
```
