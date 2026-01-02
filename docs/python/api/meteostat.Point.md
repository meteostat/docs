---
title: meteostat.Point | API Reference | Python Library
sidebar_label: ms.Point
sidebar_position: 11
---

# meteostat.Point

A class representing a geographical point with latitude, longitude, and optional elevation.

**Type:** _Class_

## Parameters

| Parameter   | Description                                                       | Data Type       | Default Value |
| ----------- | ----------------------------------------------------------------- | --------------- | ------------- |
| `latitude`  | The latitude of the geographical point in decimal degrees         | `float`         | Required      |
| `longitude` | The longitude of the geographical point in decimal degrees        | `float`         | Required      |
| `elevation` | The elevation of the geographical point in meters above sea level | `Optional[int]` | `None`        |

## Properties

| Property    | Description                             | Type            |
| ----------- | --------------------------------------- | --------------- |
| `latitude`  | The latitude of the geographical point  | `float`         |
| `longitude` | The longitude of the geographical point | `float`         |
| `elevation` | The elevation of the geographical point | `int` or `None` |

:::warning[Validation]

- Latitude must be between -90 and 90 degrees
- Longitude must be between -180 and 180 degrees

:::

## Example

```python
import meteostat as ms

# Define a geographical point (latitude, longitude, elevation)
# highlight-next-line
point = ms.Point(50.1155, 8.6842, 113)  # Frankfurt, Germany

print(f"Latitude: {point.latitude}")
print(f"Longitude: {point.longitude}")
print(f"Elevation: {point.elevation}")
```
