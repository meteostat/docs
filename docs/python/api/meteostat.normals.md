---
title: meteostat.normals | API Reference | Python Library
sidebar_label: ms.normals
sidebar_position: 3
---

# meteostat.normals

Get climate normals data for a specific station or location.

- **Type:** _Function_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/normals.py)

## Parameters

| Parameter     | Description                                  | Data Type                                                                                                                                                                                                                                                     | Default Value                                   |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `station`     | Weather station(s) or geographical point(s). | `str`, [`Station`](./meteostat.Station.md), [`Point`](./meteostat.Point.md), `List[str]`, [`List[Station]`](./meteostat.Station.md), [`List[Point]`](./meteostat.Point.md), [`DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) | Required                                        |
| `start`       | Start year of the desired period.            | `int`                                                                                                                                                                                                                                                         | `1961`                                          |
| `end`         | End year of the desired period.              | `int`                                                                                                                                                                                                                                                         | `1990`                                          |
| `parameters`  | Requested meteorological parameters.         | [`List[Parameter]`](./meteostat.Parameter.md)                                                                                                                                                                                                                 | [Default parameters](/parameters?g=normals&d=1) |
| `providers`   | Requested data providers.                    | [`List[Provider]`](./meteostat.Provider.md)                                                                                                                                                                                                                   | `[Provider.MONTHLY]`                            |
| `max_missing` | Maximum number of missing monthly values.    | `int`                                                                                                                                                                                                                                                         | `3`                                             |

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

## Example

```python
# Import Meteostat library
import meteostat as ms

# Get climate normals data
# highlight-next-line
ts = ms.normals(ms.Station(id='10637'), 1961, 1990)
df = ts.fetch()

# Print DataFrame
print(df)
```
