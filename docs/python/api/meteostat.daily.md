---
title: meteostat.daily | API Reference | Python Library
sidebar_label: ms.daily
sidebar_position: 1
---

# meteostat.daily

Get daily weather data for a specific station or location.

**Type:** _Function_

## Parameters

| Parameter    | Description                                 | Data Type                                                                           | Default Value                                 |
| ------------ | ------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------- |
| `station`    | Weather station(s) or geographical point(s) | `str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, `DataFrame` | Required                                      |
| `start`      | Start date of the desired period            | `datetime` or `date`                                                                | Required                                      |
| `end`        | End date of the desired period              | `datetime` or `date`                                                                | Required                                      |
| `parameters` | Requested meteorological parameters         | `List[Parameter]`                                                                   | [Default parameters](/parameters?g=daily&d=1) |
| `providers`  | Requested data providers                    | `List[Provider]`                                                                    | `[Provider.DAILY]`                            |

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

## Example

```python
# Import Meteostat library and dependencies
from datetime import date
import meteostat as ms

# Set time period
start = date(2018, 1, 1)
end = date(2018, 12, 31)

# Get daily data
# highlight-next-line
ts = ms.daily(ms.Station(id='10637'), start, end)
df = ts.fetch()

# Print DataFrame
print(df)
```
