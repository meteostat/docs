---
title: meteostat.Inventory | API Reference | Python Library
sidebar_label: ms.Inventory
sidebar_position: 16
---

# meteostat.Inventory

A weather station's data inventory.

**Type:** _Class_

The `Inventory` class represents the available data for a weather station across different parameters and date ranges. It is returned by [`meteostat.stations.inventory`](./meteostat.stations.inventory.md) and provides information about which meteorological parameters are available and the time period covered by the data.

## Properties

| Property     | Description                                                            | Returns                  |
| ------------ | ---------------------------------------------------------------------- | ------------------------ |
| `start`      | The earliest start date from the inventory. `None` if no data.         | `Optional[date]`         |
| `end`        | The latest end date from the inventory. `None` if no data.             | `Optional[date]`         |
| `parameters` | List of available meteorological parameters. `[]` if no data.          | `List[Parameter]`        |
| `df`         | Internal DataFrame representation of the inventory. `None` if no data. | `Optional[pd.DataFrame]` |
