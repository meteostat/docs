---
title: meteostat.normals | API Reference | Python Library
sidebar_label: meteostat.normals
sidebar_position: 3
---

# meteostat.normals

Get climate normals data for a specific station or location.

**Type:** _Function_

## Parameters

| Parameter     | Description                                 | Data Type                                                                           | Default Value                                   |
| ------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| `station`     | Weather station(s) or geographical point(s) | `str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, `DataFrame` | Required                                        |
| `start`       | Start year of the desired period            | `int`                                                                               | `1961`                                          |
| `end`         | End year of the desired period              | `int`                                                                               | `1990`                                          |
| `parameters`  | Requested meteorological parameters         | `List[Parameter]`                                                                   | [Default parameters](/parameters?g=normals&d=1) |
| `providers`   | Requested data providers                    | `List[Provider]`                                                                    | `Provider.HOURLY`                               |
| `max_missing` | Maximum number of missing monthly values    | `int`                                                                               | `3`                                             |

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
