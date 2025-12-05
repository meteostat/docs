---
title: Meta Data | Weather Stations | Python Library
sidebar_label: Meta Data
sidebar_position: 1
---

# Meta Data

Meteostat provides detailed metadata for each weather station in its database. This metadata includes information such as the station's name, location (latitude, longitude, elevation), country, and provider-specific identifiers. Metadata for individual stations can be accessed using the `meteostat.station` method. This method retrieves a `Station` object containing all relevant metadata for the specified station. It does not require the SQLite stations database and can be used independently. For more advanced use cases, such as searching for stations based on specific criteria or retrieving multiple stations, the `meteostat.stations` namespace offers additional methods that utilize the local SQLite database.

## 🚀 Example {#example}

You can easily retrieve metadata for a specific weather station using its unique identifier:

```python
import meteostat as ms

station = ms.station('72503')  # LaGuardia Airport

print(station)
```

The same can be achieved by using the `meteostat.stations` namespace:

```python
import meteostat as ms

station = ms.stations.meta('72503')  # LaGuardia Airport

print(station)
```

The latter approach uses the SQLite stations database instead of individual JSON files. This is particularly useful when working with multiple stations or performing searches based on specific criteria, since the database requires just a single download and is optimized for such operations.

## 🔍 API {#api}

### Interface

Through one of the following:

- `meteostat.station`
- `meteostat.stations.meta`

### Parameters

#### `station` {#parameter-station}

The unique identifier of the weather station.

##### Data Type {#parameter-station-type}

`str`

### Return Value

`Station`
