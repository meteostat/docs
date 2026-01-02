---
title: meteostat.stations.meta | API Reference | Python Library
sidebar_label: ms.stations.meta
sidebar_position: 13
---

# meteostat.stations.meta

Retrieve metadata for a specific weather station.

## Parameters

| Parameter | Description                                  | Data Type | Default Value |
| --------- | -------------------------------------------- | --------- | ------------- |
| `station` | The unique identifier of the weather station | `str`     | Required      |

## Returns

`Station`

## Example

```python
import meteostat as ms

# Get station metadata
# highlight-next-line
station = ms.stations.meta('72503')  # LaGuardia Airport

print(station)
```
