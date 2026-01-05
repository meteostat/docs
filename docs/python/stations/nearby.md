---
title: Nearby Stations | Weather Stations | Python Library
sidebar_label: Nearby Stations
sidebar_position: 2
---

# Nearby Stations

To find weather stations near a specific geographical point, you can use the [`nearby`](../api/meteostat.stations.nearby.md) method. This method allows you to specify a location using latitude & longitude, and it returns a list of nearby weather stations sorted by distance.

## 🚀 Example {#example}

```python
import meteostat as ms

POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location

# Get nearby weather stations
stations = ms.stations.nearby(POINT, limit=4)

print(stations)
```

This is the output you would get:

```
                       name country region  latitude  longitude  elevation       timezone  distance
id
D1424    Frankfurt  Westend      DE     HE   50.1269     8.6694        124  Europe/Berlin    1649.3
10640     Offenbach am Main      DE     HE   50.1167     8.7333         98  Europe/Berlin    3503.5
10641  Offenbach Wetterpark      DE     HE   50.0894     8.7864        119  Europe/Berlin    7845.6
10637     Frankfurt Airport      DE     HE   50.0500     8.6000        111  Europe/Berlin    9441.4
```

## 🔍 API {#api}

[`meteostat.stations.nearby`](../api/meteostat.stations.nearby.md)
