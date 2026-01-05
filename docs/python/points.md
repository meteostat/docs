---
title: Geographical Points | Python Library
sidebar_label: Geographical Points
sidebar_position: 5
---

# Geographical Points

Meteostat allows you to define geographical points using latitude, longitude, and optional elevation. These points can be used to retrieve weather data for specific locations that may not have a dedicated weather station. Points are also used as input for functions that require a location reference. The [`Point`](./api/meteostat.Point.md) class in the Meteostat Python library provides a simple way to create and manage these geographical points.

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

[`meteostat.Point`](./api/meteostat.Point.md)
