---
title: Interpolation | Python Library
sidebar_label: Interpolation
sidebar_position: 10
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
df = ms.interpolate(ts, POINT)

print(df)
```

## 🎯 Interpolation Methods {#interpolation-methods}

Meteostat uses a combination of Nearest Neighbor and Inverse Distance Weighting (IDW) methods for interpolation. The choice of method depends on the distance and elevation difference between the point of interest and the nearby stations.

### Nearest Neighbor

If a nearby station is within a specified horizontal distance ([`distance_threshold`](#parameter-distance-threshold)) and elevation difference threshold ([`elevation_threshold`](#parameter-elevation-threshold)), the value from that station is used directly. If there are multiple stations within the thresholds, the closest one is selected. If the closest station has missing data for a specific parameter, the next closest station is considered.

### Inverse Distance Weighting (IDW)

If no nearby stations meet the Nearest Neighbor criteria, IDW is used to calculate a weighted average of the values from all nearby stations. The weights are inversely proportional to the distance, meaning closer stations have a higher influence on the interpolated value. The [`power`](#parameter-power) parameter controls how quickly the weight decreases with distance. Elevation differences can also be factored into the distance calculation using a configurable weight ([`elevation_weight`](#parameter-elevation-weight)).

## ⛰️ Lapse Rate Adjustment {#lapse-rate-adjustment}

For temperature parameters, Meteostat can apply a lapse rate adjustment based on the elevation difference between the point of interest and the nearby stations. The lapse rate is specified in °C per 1000 meters ([`lapse_rate`](#parameter-lapse-rate)). If the elevation difference is less than a specified threshold ([`lapse_rate_threshold`](#parameter-lapse-rate-threshold)), no adjustment is applied. The lapse rate can be calculated dynamically using the [`lapse_rate`](lapse-rate) function.

## 🔍 API {#api}

### Interface

```
meteostat.interpolate
```

### Parameters

#### `ts` {#parameter-ts}

A `TimeSeries` object containing weather data from nearby stations.

##### Data Type {#parameter-ts-type}

[`TimeSeries`](timeseries)

---

#### `point` {#parameter-point}

Geographical point specifying latitude, longitude, and elevation.

##### Data Type {#parameter-point-type}

[`Point`](points)

---

#### `distance_threshold` {#parameter-distance-threshold}

Maximum elevation difference in meters to use nearest neighbor (default: 50). Beyond this, IDW is used even if distance is within threshold.

##### Data Type {#parameter-distance-threshold-type}

`int`

##### Default Value {#parameter-distance-threshold-default}

`5000` (5 km)

---

#### `elevation_threshold` {#parameter-elevation-threshold}

Maximum elevation difference in meters to use nearest neighbor (default: 50). Beyond this, IDW is used even if distance is within threshold.

##### Data Type {#parameter-elevation-threshold-type}

`int`

##### Default Value {#parameter-elevation-threshold-default}

`50` (50 m)

---

#### `elevation_weight` {#parameter-elevation-weight}

Weight for elevation difference in distance calculation. The effective distance is calculated as:

```
sqrt(horizontal_distance^2 + (elevation_diff * elevation_weight)^2)
```

##### Data Type {#parameter-elevation-weight-type}

`float`

##### Default Value {#parameter-elevation-weight-default}

`10`

---

#### `power` {#parameter-power}

Power parameter for IDW. Higher values give more weight to closer stations.

##### Data Type {#parameter-power-type}

`float`

##### Default Value {#parameter-power-default}

`2`

---

#### `lapse_rate` {#parameter-lapse-rate}

Lapse rate in °C per 1000 meters for temperature adjustment based on elevation difference.

##### Data Type {#parameter-lapse-rate-type}

`float`

##### Default Value {#parameter-lapse-rate-default}

`6.5`

---

#### `lapse_rate_threshold` {#parameter-lapse-rate-threshold}

Minimum elevation difference in meters to apply lapse rate adjustment. If the elevation difference between the point and stations is less than this, no correction is applied.

##### Data Type {#parameter-lapse-rate-threshold-type}

`int`

##### Default Value {#parameter-lapse-rate-threshold-default}

`50` (50 m)

### Return Value

A [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html) containing the interpolated weather data for the specified geographical point.
