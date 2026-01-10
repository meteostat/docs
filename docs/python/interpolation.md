---
title: Interpolation | Python Library
sidebar_label: Interpolation
sidebar_position: 7
---

# Interpolation

Meteostat provides interpolation methods to estimate weather data at specific geographical points based on nearby weather stations. This is particularly useful for locations that do not have a dedicated weather station. The interpolation methods take into account the distance and elevation differences between the point of interest and the surrounding stations to provide accurate estimates.

## 🚀 Example {#example}

```python
from datetime import date
import meteostat as ms

# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get nearby weather stations
stations = ms.stations.nearby(POINT, limit=4)

# Get daily data & perform interpolation
ts = ms.daily(stations, START, END)
df = ms.interpolate(ts, POINT).fetch()

print(df)
```

## 🎯 Interpolation Methods {#interpolation-methods}

Meteostat uses a combination of Nearest Neighbor and Inverse Distance Weighting (IDW) methods for interpolation. The choice of method depends on the distance and elevation difference between the point of interest and the nearby stations.

### Nearest Neighbor

If a nearby station is within a specified horizontal distance ([`distance_threshold`](./api/meteostat.interpolate.md#parameters)) and elevation difference threshold ([`elevation_threshold`](./api/meteostat.interpolate.md#parameters)), the value from that station is used directly. If there are multiple stations within the thresholds, the closest one is selected. If the closest station has missing data for a specific parameter, the next closest station is considered.

### Inverse Distance Weighting (IDW)

If no nearby stations meet the Nearest Neighbor criteria, IDW is used to calculate a weighted average of the values from all nearby stations. The weights are inversely proportional to the distance, meaning closer stations have a higher influence on the interpolated value. The [`power`](./api/meteostat.interpolate.md#parameters) parameter controls how quickly the weight decreases with distance. Elevation differences can also be factored into the distance calculation using a configurable weight ([`elevation_weight`](./api/meteostat.interpolate.md#parameters)).

## ⛰️ Lapse Rate Adjustment {#lapse-rate-adjustment}

For temperature parameters, Meteostat can apply a lapse rate adjustment based on the elevation difference between the point of interest and the nearby stations. The lapse rate is specified in °C per 1000 meters ([`lapse_rate`](./api/meteostat.interpolate.md#parameters)). If the elevation difference is less than a specified threshold ([`lapse_rate_threshold`](./api/meteostat.interpolate.md#parameters)), no adjustment is applied. The lapse rate can be calculated dynamically using the [`lapse_rate`](./api/meteostat.lapse_rate.md) function.

## 🔍 API {#api}

[`meteostat.interpolate`](./api/meteostat.interpolate.md)
