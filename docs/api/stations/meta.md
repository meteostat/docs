---
title: Meta Data | Weather Station | JSON API
sidebar_label: Meta Data
sidebar_position: 3
---

# Meta Data

This endpoint provides information which describes a specific weather station. The output includes meta data like latitude, longitude and elevation.

## Endpoint

```
GET https://meteostat.p.rapidapi.com/stations/meta
```

## Parameters

You’ll need to specify one of the following parameters.

| **Parameter** | **Description**                         | **Type** | **Required** | **Default** |
| :------------ | :-------------------------------------- | :------- | :----------- | :---------- |
| id            | The Meteostat ID of the weather station | String   | No           | `undefined` |
| wmo           | The WMO ID of the weather station       | Integer  | No           | `undefined` |
| icao          | The ICAO ID of the weather station      | String   | No           | `undefined` |

## Response

The response body includes the following properties.

- `id`: Meteostat ID (_String_)
- `name`: Name in different languages (_Object_)
- `country`: ISO 3166-1 alpha-2 country code, e.g. CA for Canada (_String_)
- `region`: ISO 3166-2 state or region code, e.g. TX for Texas (_String_)
- `identifiers`: Identifiers (_Object_)
  - `national`: National ID (_String_)
  - `wmo`: WMO ID (_String_)
  - `icao`: ICAO ID (_String_)
- `location`: Geographic location (_Object_)
  - `latitude`: Latitude (_Float_)
  - `longitude`: Longitude (_Float_)
  - `elevation`: Elevation in meters (_Integer_)
- `timezone`: Time zone (_String_)
- `inventory`: Available data by frequency (_Object_)
  - `model`: Hourly model inventory data (_Object_)
    - `start`: First day (YYYY-MM-DD) of hourly model data (_String_)
    - `end`: Last day (YYYY-MM-DD) of hourly model data (_String_)
  - `hourly`: Hourly inventory data (_Object_)
    - `start`: First day (YYYY-MM-DD) of hourly data (_String_)
    - `end`: Last day (YYYY-MM-DD) of hourly data (_String_)
  - `daily`: Daily inventory data (_Object_)
    - `start`: First day (YYYY-MM-DD) of daily data (_String_)
    - `end`: Last day (YYYY-MM-DD) of daily data (_String_)
  - `monthly`: Monthly inventory data (_Object_)
    - `start`: First year (YYYY) of monthly data (_String_)
    - `end`: Last year (YYYY) of monthly data (_String_)
  - `normals`: Climate normals inventory data (_Object_)
    - `start`: First year (YYYY) of climate normals data (_Integer_)
    - `end`: Last year (YYYY) of climate normals data (_Integer_)

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --request GET \
	--url 'https://meteostat.p.rapidapi.com/stations/meta?id=10637' \
	--header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
	--header 'x-rapidapi-key: {key}'
```

Please replace `{key}` with your personal API key.

### Data Response

That’s the expected response:

```json
{
  "meta": {
    "exec_time": 0.003,
    "generated": "2021-06-21 18:23:58"
  },
  "data": {
    "id": "10637",
    "name": {
      "de": "Frankfurt Flughafen",
      "es": "Aeropuerto de Fráncfort",
      "en": "Frankfurt Airport"
    },
    "country": "DE",
    "region": "HE",
    "identifier": {
      "national": "01420",
      "wmo": "10637",
      "icao": "EDDF"
    },
    "location": {
      "latitude": 50.05,
      "longitude": 8.6,
      "elevation": 111
    },
    "timezone": "Europe/Berlin",
    "inventory": {
      "model": {
        "start": "2018-01-28",
        "end": "2021-06-29"
      },
      "hourly": {
        "start": "1926-01-01",
        "end": "2021-06-20"
      },
      "daily": {
        "start": "1934-05-01",
        "end": "2021-06-18"
      },
      "monthly": {
        "start": 1934,
        "end": 2021
      },
      "normals": {
        "start": 1961,
        "end": 2020
      }
    }
  }
}
```
