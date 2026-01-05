---
title: Inventory | Weather Stations | Python Library
sidebar_label: Inventory
sidebar_position: 3
---

# Inventory

You can check the data availability for a specific weather station using the [`inventory`](../api/meteostat.stations.inventory.md) method. This method retrieves information about the time range for which data is available at the specified station. Inventory data is both provider and parameter specific, allowing you to see exactly what data can be accessed.

## 🚀 Example {#example}

```python
import meteostat as ms

STATION = '71624'  # Toronto Pearson International Airport

# Get station inventory
inventory = ms.stations.inventory(STATION)

print(f"Data available from {inventory.start} to {inventory.end}.")
```

This is the output you would get, depending on when you run the code:

```
Data available from 1937-11-01 to 2025-12-31.
```

## 🔍 API {#api}

[`meteostat.stations.inventory`](../api/meteostat.stations.inventory.md)
