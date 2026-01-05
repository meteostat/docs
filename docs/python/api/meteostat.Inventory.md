---
title: meteostat.Inventory | API Reference | Python Library
sidebar_label: ms.Inventory
sidebar_position: 16
---

# meteostat.Inventory

A weather station's data inventory.

- **Type:** _Class_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/api/inventory.py)

The `Inventory` class represents the available data for a weather station across different parameters and date ranges. It is returned by [`meteostat.stations.inventory`](./meteostat.stations.inventory.md) and provides information about which meteorological parameters are available and the time period covered by the data.

## Properties

| Property     | Description                                                            | Returns                                                                                     |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `start`      | The earliest start date from the inventory. `None` if no data.         | [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) or `None`           |
| `end`        | The latest end date from the inventory. `None` if no data.             | [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) or `None`           |
| `parameters` | List of available meteorological parameters. `[]` if no data.          | [`List[Parameter]`](./meteostat.Parameter.md)                                               |
| `df`         | Internal DataFrame representation of the inventory. `None` if no data. | [`DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) or `None` |
