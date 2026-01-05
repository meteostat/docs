---
title: meteostat.stations.meta | API Reference | Python Library
sidebar_label: ms.stations.meta
sidebar_position: 13
---

# meteostat.stations.meta

Retrieve metadata for a specific weather station.

- **Type:** _Method_ of [`meteostat.stations`](./meteostat.stations.md)
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/stations.py)

## Parameters

| Parameter | Description                                  | Data Type | Default Value |
| --------- | -------------------------------------------- | --------- | ------------- |
| `station` | The unique identifier of the weather station | `str`     | Required      |

## Returns

[`Station`](./meteostat.Station.md)

## Example

```python
import meteostat as ms

# Get station metadata
# highlight-next-line
station = ms.stations.meta('72503')  # LaGuardia Airport

print(station)
```
