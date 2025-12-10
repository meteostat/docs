---
title: Geographical Points | Python Library
sidebar_label: Geographical Points
sidebar_position: 7
---

# Geographical Points

Meteostat allows you to define geographical points using latitude, longitude, and optional elevation. These points can be used to retrieve weather data for specific locations that may not have a dedicated weather station. Points are also used as input for functions that require a location reference. The `Point` class in the Meteostat Python library provides a simple way to create and manage these geographical points.

:::tip
Meteostat will validate the latitude and longitude values to ensure they fall within acceptable ranges. Latitude must be between -90 and 90 degrees, while longitude must be between -180 and 180 degrees.
:::

## 🚀 Example {#example}

```python
import meteostat as ms

# Define a geographical point (latitude, longitude, elevation)
point = ms.Point(50.1155, 8.6842, 113)  # Example: Frankfurt, Germany

print(point)
```

## 🔍 API {#api}

### Interface

```
meteostat.Point
```

### Parameters

#### `latitude` {#parameter-latitude}

The latitude of the geographical point in decimal degrees.

##### Data Type {#parameter-latitude-type}

`float`

---

#### `longitude` {#parameter-longitude}

The longitude of the geographical point in decimal degrees.

##### Data Type {#parameter-longitude-type}

`float`

---

#### `elevation` {#parameter-elevation}

The elevation of the geographical point in meters above sea level. This parameter is optional.

##### Data Type {#parameter-elevation-type}

`Optional[int]`

##### Default Value {#parameter-elevation-default}

`None`

### Properties

The validated `latitude`, `longitude`, and `elevation` values are exposed as read-only properties of the `Point` object.
