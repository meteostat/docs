---
title: Inventory | Weather Stations | Python Library
sidebar_label: Inventory
sidebar_position: 3
---

# Inventory

You can check the data availability for a specific weather station using the `inventory` method. This method retrieves information about the time range for which data is available at the specified station. Inventory data is both provider and parameter specific, allowing you to see exactly what data can be accessed.

## 🚀 Example {#example}

```python
import meteostat as ms

STATION = '71624'  # Toronto Pearson International Airport

# Get station inventory
inventory = ms.stations.inventory(STATION)

print(f"Data available from {inventory.start} to {inventory.end}.")
```

## 🔍 API {#api}

### Interface

```
meteostat.stations.inventory
```

### Parameters

#### `station` {#parameter-station}

The unique identifier(s) of the weather station(s).

##### Data Type {#parameter-station-type}

`str` or `List[str]`

---

#### `providers` {#parameter-providers}

The data provider(s) to filter the inventory by. If not specified, the inventory for all available providers will be returned.

##### Data Type {#parameter-station-type}

`Optional[List[Provider]]`

##### Default Value {#parameter-providers-default}

`None`

### Properties

#### `start` {#property-start}

The start date of the available data period.

##### Data Type {#property-start-type}

[`date`](https://docs.python.org/3/library/datetime.html#datetime.date) or `None`

---

#### `end` {#property-end}

The end date of the available data period.

##### Data Type {#property-end-type}

[`date`](https://docs.python.org/3/library/datetime.html#datetime.date) or `None`

---

#### `parameters` {#property-parameters}

List of available meteorological parameters for the station.

##### Data Type {#property-parameters-type}

`List[Parameter]` or `None`

---

#### `df` {#property-df}

A DataFrame representation of the inventory data.

##### Data Type {#property-df-type}

[`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html) or `None`
