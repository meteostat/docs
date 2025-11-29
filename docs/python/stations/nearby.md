---
sidebar_position: 2
---

# Nearby Stations

To find weather stations near a specific geographical point, you can use the `nearby` method. This method allows you to specify a location using latitude & longitude, and it returns a list of nearby weather stations sorted by distance.

## 🚀 Example {#example}

```python
import meteostat as ms

POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location

# Get nearby weather stations
stations = ms.stations.nearby(POINT, limit=4)

print(stations)
```

## 🔍 API {#api}

### Interface

```
meteostat.stations.nearby
```

### Parameters

#### `point` {#parameter-point}

Geographical point specifying latitude and longitude. Elevation is not relevant for this method.

##### Data Type {#parameter-point-type}

`Point`

---

#### `radius` {#parameter-radius}

Search radius in meters.

##### Data Type {#parameter-radius-type}

`int`

##### Default Value {#parameter-radius-default}

`50000` (50 km)

---

#### `limit` {#parameter-limit}

Maximum number of stations to return.

##### Data Type {#parameter-limit-type}

`int`

##### Default Value {#parameter-limit-default}

`100`

### Return Value

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)
