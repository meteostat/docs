---
title: meteostat.interpolate | API Reference | Python Library
sidebar_label: ms.interpolate
sidebar_position: 10
---

# meteostat.interpolate

Estimate weather data at a specific geographical point based on nearby weather stations.

- **Type:** _Function_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/interpolate.py)

## Parameters

| Parameter              | Description                                                                                                                                       | Data Type                                 | Default Value |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------- |
| `ts`                   | A [`TimeSeries`](./meteostat.TimeSeries.md) object containing weather data from nearby stations.                                                  | [`TimeSeries`](./meteostat.TimeSeries.md) | Required      |
| `point`                | Geographical point specifying latitude, longitude, and elevation.                                                                                 | [`Point`](./meteostat.Point.md)           | Required      |
| `distance_threshold`   | Maximum horizontal distance in meters to use Nearest Neighbor. If `None`, only Nearest Neighbor will be used regardless of distance.              | `int` or `None`                           | `5000` (5 km) |
| `elevation_threshold`  | Maximum elevation difference in meters to use Nearest Neighbor. If `None`, only Nearest Neighbor will be used regardless of elevation difference. | `int` or `None`                           | `50` (50 m)   |
| `elevation_weight`     | Weight for elevation difference in distance calculation.                                                                                          | `float`                                   | `10`          |
| `power`                | Power parameter for IDW (higher = more weight to closer stations).                                                                                | `float`                                   | `2`           |
| `lapse_rate`           | Lapse rate in °C per 1000 meters for temperature adjustment. If `None`, no adjustment will be applied.                                            | `float` or `None`                         | `6.5`         |
| `lapse_rate_threshold` | Minimum elevation difference in meters to apply lapse rate adjustment                                                                             | `int`                                     | `50` (50 m)   |

## Returns

[`TimeSeries`](./meteostat.TimeSeries.md)

Time series object with interpolated weather data for the specified point.

## Example

```python
from datetime import date
import meteostat as ms

# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)  # Coordinates with elevation
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get nearby weather stations
stations = ms.stations.nearby(POINT, limit=4)

# Get daily data and perform interpolation
ts = ms.daily(stations, START, END)
# highlight-next-line
df = ms.interpolate(ts, POINT).fetch()

print(df)
```
