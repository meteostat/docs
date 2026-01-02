---
title: meteostat.hourly | API Reference | Python Library
sidebar_label: meteostat.hourly
sidebar_position: 1
---

# meteostat.hourly

Get hourly weather data for a specific station or location.

**Type:** _Function_

## Parameters

| Parameter    | Description                                 | Data Type                                                                           | Default Value                                  |
| ------------ | ------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------- |
| `station`    | Weather station(s) or geographical point(s) | `str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, `DataFrame` | Required                                       |
| `start`      | Start date of the desired period            | `datetime` or `date`                                                                | Required                                       |
| `end`        | End date of the desired period              | `datetime` or `date`                                                                | Required                                       |
| `timezone`   | Time zone of the period and records         | `Optional[str]`                                                                     | `None` (UTC)                                   |
| `parameters` | Requested meteorological parameters         | `List[Parameter]`                                                                   | [Default parameters](/parameters?g=hourly&d=1) |
| `providers`  | Requested data providers                    | `List[Provider]`                                                                    | `[Provider.HOURLY]`                            |

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

## Example

```python
# Import Meteostat library and dependencies
from datetime import datetime
import meteostat as ms

# Set time period
start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

# Get hourly data
# highlight-next-line
ts = ms.hourly(ms.Station(id='72219'), start, end)
df = ts.fetch()

# Print DataFrame
print(df)
```
