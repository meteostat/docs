---
title: meteostat.TimeSeries.count | API Reference | Python Library
sidebar_label: meteostat.TimeSeries.count
sidebar_position: 6
---

# meteostat.TimeSeries.count

Get the number of rows in the whole time series or by parameter. `NaN` values are excluded.

## Parameters

| Parameter   | Description                                                                          | Type                 | Default |
| ----------- | ------------------------------------------------------------------------------------ | -------------------- | ------- |
| `parameter` | The parameter which should be counted, if `None` the whole time series is considered | `Parameter` or `str` | `None`  |

## Returns

`int`

## Example

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)

# Count rows with precipitation data
# highlight-next-line
count = ts.count(ms.Parameter.PRCP)

print(f'{count} rows with precipitation data')
```
