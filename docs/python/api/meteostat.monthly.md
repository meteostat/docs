---
title: meteostat.monthly | API Reference | Python Library
sidebar_label: meteostat.monthly
sidebar_position: 2
---

# meteostat.monthly

Get monthly weather data for a specific station or location.

**Type:** _Function_

## Parameters

| Parameter    | Description                                 | Data Type                                                                           | Default Value                                   |
| ------------ | ------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| `station`    | Weather station(s) or geographical point(s) | `str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, `DataFrame` | Required                                        |
| `start`      | Start date of the desired period            | `datetime` or `date`                                                                | Required                                        |
| `end`        | End date of the desired period              | `datetime` or `date`                                                                | Required                                        |
| `parameters` | Requested meteorological parameters         | `List[Parameter]`                                                                   | [Default parameters](/parameters?g=monthly&d=1) |
| `providers`  | Requested data providers                    | `List[Provider]`                                                                    | `[Provider.MONTHLY]`                            |

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

## Example

```python
# Import Meteostat library and dependencies
from datetime import date
import meteostat as ms

# Set time period
start = date(2000, 1, 1)
end = date(2018, 12, 31)

# Get monthly data
# highlight-next-line
ts = ms.monthly(ms.Station(id='10637'), start, end)
df = ts.fetch()

# Print DataFrame
print(df)
```
