---
title: Merging Time Series
description: Learn how to merge multiple time series objects into a single one using the Meteostat Python library.
tags:
  - Python
  - Time Series
---

# Merging Time Series

Meteostat allows you to merge multiple time series objects into a single object using the [`merge`](/python/api/meteostat.merge.md) function. This is useful when you want to combine data from different sources or time periods into one cohesive dataset. The [`merge`](/python/api/meteostat.merge.md) function can handle various types of time series data, including hourly, daily, and monthly data. However, it is important to ensure that the time series being merged are compatible in terms of their structure and parameters.

## Requirements {#merging-requirements}

- All time series objects to be merged must have the same granularity (e.g., all hourly, all daily, or all monthly).
- In case of hourly data, the time zones of the time series objects must match.

## Example {#merging-example}

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
ts = ms.merge([ts1, ts2])

# Fetch combined data as Pandas DataFrame
df = ts.fetch()

print(df)
```
