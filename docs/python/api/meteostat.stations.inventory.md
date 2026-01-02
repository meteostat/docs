---
title: meteostat.stations.inventory | API Reference | Python Library
sidebar_label: ms.stations.inventory
sidebar_position: 15
---

# meteostat.stations.inventory

Check data availability for a weather station.

## Parameters

| Parameter   | Description                                     | Data Type                  | Default Value |
| ----------- | ----------------------------------------------- | -------------------------- | ------------- |
| `station`   | The unique identifier(s) of the weather station | `str` or `List[str]`       | Required      |
| `providers` | Data provider(s) to filter inventory by         | `Optional[List[Provider]]` | `None`        |

## Returns

`Inventory`

## Example

```python
import meteostat as ms

# Check data availability for a station
STATION = '71624'  # Toronto Pearson International Airport

# highlight-next-line
inventory = ms.stations.inventory(STATION)

print(f"Data available from {inventory.start} to {inventory.end}.")
print(f"Available parameters: {inventory.parameters}")
```
