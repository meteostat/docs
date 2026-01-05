---
title: meteostat.TimeSeries.fetch | API Reference | Python Library
sidebar_label: ms.TimeSeries.fetch
sidebar_position: 5
---

# meteostat.TimeSeries.fetch

Fetch the actual weather/climate data as a Pandas [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html).

- **Type:** _Method_ of [`TimeSeries`](./meteostat.TimeSeries.md)
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/timeseries.py#L180)

## Parameters

| Parameter  | Description                                                    | Type                                      | Default             |
| ---------- | -------------------------------------------------------------- | ----------------------------------------- | ------------------- |
| `squash`   | Squash data from different sources?                            | `bool`                                    | `True`              |
| `fill`     | Fill missing records?                                          | `bool`                                    | `False`             |
| `sources`  | Include source columns?                                        | `bool`                                    | `False`             |
| `location` | Add location-related columns (latitude, longitude, elevation)? | `bool`                                    | `False`             |
| `clean`    | Remove inaccurate data?                                        | `bool`                                    | `True`              |
| `humanize` | Humanize data values for wind direction and condition code?    | `bool`                                    | `False`             |
| `units`    | Unit system for data values (e.g., metric or imperial)         | [`UnitSystem`](./meteostat.UnitSystem.md) | `UnitSystem.METRIC` |

## Returns

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

## Example

```python
from datetime import date
import meteostat as ms

# Specify time range
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get daily data
ts = ms.daily('10637', START, END)

# Fetch the data
# highlight-next-line
df = ts.fetch()

# Print the DataFrame
print(df)
```
