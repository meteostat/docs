---
title: meteostat.monthly | API Reference | Python Library
sidebar_label: ms.monthly
sidebar_position: 2
---

# meteostat.monthly

Get monthly weather data for a specific station or location.

- **Type:** _Function_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/monthly.py)

## Parameters

| Parameter    | Description                                  | Data Type                                                                                                                                                                                                                                                     | Default Value                                   |
| ------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `station`    | Weather station(s) or geographical point(s). | `str`, [`Station`](./meteostat.Station.md), [`Point`](./meteostat.Point.md), `List[str]`, [`List[Station]`](./meteostat.Station.md), [`List[Point]`](./meteostat.Point.md), [`DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) | Required                                        |
| `start`      | Start date of the desired period.            | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime), [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) or `None`                                                                                            | `None`                                          |
| `end`        | End date of the desired period.              | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime), [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) or `None`                                                                                            | `None`                                          |
| `parameters` | Requested meteorological parameters.         | [`List[Parameter]`](./meteostat.Parameter.md)                                                                                                                                                                                                                 | [Default parameters](/parameters?g=monthly&d=1) |
| `providers`  | Requested data providers.                    | [`List[Provider]`](./meteostat.Provider.md)                                                                                                                                                                                                                   | `[Provider.MONTHLY]`                            |

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
