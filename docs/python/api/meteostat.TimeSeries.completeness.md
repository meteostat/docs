---
title: meteostat.TimeSeries.completeness | API Reference | Python Library
sidebar_label: ms.TimeSeries.completeness
sidebar_position: 7
---

# meteostat.TimeSeries.completeness

The share of non-`NaN` values of the time series's full length.

## Parameters

| Parameter   | Description                                                              | Type                         | Default |
| ----------- | ------------------------------------------------------------------------ | ---------------------------- | ------- |
| `parameter` | The parameter of interest, if `None` the whole time series is considered | `Parameter`, `str` or `None` | `None`  |

## Returns

`float`

- `0` means all data is missing
- `1` means all data is available

## Example

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)

# Get completeness of precipitation data
# highlight-next-line
completeness = ts.completeness(ms.Parameter.PRCP)

print(f'Precipitation data completeness: {completeness * 100}%')
```
