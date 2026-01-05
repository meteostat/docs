---
title: meteostat.TimeSeries.validate | API Reference | Python Library
sidebar_label: ms.TimeSeries.validate
sidebar_position: 8
---

# meteostat.TimeSeries.validate

Check if the time series passes all quality checks. Values which fail any of the checks can be set to `NaN` when fetching data (using the [`clean`](./meteostat.TimeSeries.fetch.md#parameters) parameter).

- **Type:** _Method_ of [`TimeSeries`](./meteostat.TimeSeries.md)
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/timeseries.py#L309)

## Parameters

This method does not accept any parameters.

## Returns

`bool`

## Example

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)

# Validate the time series
# highlight-next-line
is_valid = ts.validate()

print(f'Time series valid: {is_valid}')
```
