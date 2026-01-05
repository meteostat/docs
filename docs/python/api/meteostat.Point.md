---
title: meteostat.Point | API Reference | Python Library
sidebar_label: ms.Point
sidebar_position: 17
---

# meteostat.Point

A class representing a geographical point with latitude, longitude, and optional elevation.

- **Type:** _Class_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/point.py)

## Parameters

| Parameter   | Description                                                       | Data Type       | Default Value |
| ----------- | ----------------------------------------------------------------- | --------------- | ------------- |
| `latitude`  | The latitude of the geographical point in decimal degrees         | `float`         | Required      |
| `longitude` | The longitude of the geographical point in decimal degrees        | `float`         | Required      |
| `elevation` | The elevation of the geographical point in meters above sea level | `int` or `None` | `None`        |

:::info[Validation]

- Latitude must be between -90 and 90 degrees
- Longitude must be between -180 and 180 degrees

:::

## Properties

All parameters are available as properties of the `Point` class.

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
