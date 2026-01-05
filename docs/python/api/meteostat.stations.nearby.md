---
title: meteostat.stations.nearby | API Reference | Python Library
sidebar_label: ms.stations.nearby
sidebar_position: 14
---

# meteostat.stations.nearby

Find weather stations near a geographical point.

- **Type:** _Method_ of [`meteostat.stations`](./meteostat.stations.md)
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/stations.py)

## Parameters

| Parameter | Description                                          | Data Type                       | Default Value   |
| --------- | ---------------------------------------------------- | ------------------------------- | --------------- |
| `point`   | Geographical point specifying latitude and longitude | [`Point`](./meteostat.Point.md) | Required        |
| `radius`  | Search radius in meters                              | `int`                           | `50000` (50 km) |
| `limit`   | Maximum number of stations to return                 | `int`                           | `100`           |

## Returns

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

A DataFrame containing nearby stations sorted by distance.

## Example

```python
import meteostat as ms

# Create a geographical point
POINT = ms.Point(50.1155, 8.6842, 113)  # Frankfurt, Germany

# Get nearby weather stations
# highlight-next-line
stations = ms.stations.nearby(POINT, limit=4)

print(stations)
```
