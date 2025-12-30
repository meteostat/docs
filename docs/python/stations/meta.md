---
title: Meta Data | Weather Stations | Python Library
sidebar_label: Meta Data
sidebar_position: 1
---

# Meta Data

Meteostat provides detailed metadata for each weather station in its database. This metadata includes information such as the station's name, location (latitude, longitude, elevation), country, and provider-specific identifiers. Metadata for individual stations can be accessed using the `meta` method. This method retrieves a `Station` object containing all relevant metadata for the specified station.

## 🚀 Example {#example}

You can easily retrieve metadata for a specific weather station using its unique identifier:

```python
import meteostat as ms

station = ms.stations.meta('72503')  # LaGuardia Airport

print(station)
```

This is the output you would get:

```
Station(
    id='72503',
    name='LaGuardia Airport',
    country='US',
    region='NY',
    identifiers={
        'wmo': '72503',
        'icao': 'KLGA',
        'iata': 'LGA',
        'ghcn': 'USW00014732',
        'wban': '14732',
        'usaf': '725030',
        'mosmix': '72503'
    },
    latitude=40.7833,
    longitude=-73.05,
    elevation=7,
    timezone='America/New_York'
)
```

## 🔍 API {#api}

### Interface

```
meteostat.stations.meta
```

### Parameters

#### `station` {#parameter-station}

The unique identifier of the weather station.

##### Data Type {#parameter-station-type}

`str`

### Return Value

`Station`
