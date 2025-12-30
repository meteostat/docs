---
title: Monthly Data | Weather Station | JSON API
sidebar_label: Monthly Data
sidebar_position: 6
---

# Monthly Data

This endpoint provides historical monthly statistics for a particular weather station. The data provided through this endpoint is aggregated from multiple governmental interfaces.

Monthly data is coming in with an offset of multiple months. Additionally, Meteostat aggregates monthly data from hourly observations, daily records and model data.

## Endpoint

Monthly data is provided through this endpoint:

```
GET https://meteostat.p.rapidapi.com/stations/monthly
```

## Parameters

When calling this endpoint please refer to the following parameters.

| **Parameter** | **Description**                                                       | **Type** | **Required** | **Default** |
| :------------ | :-------------------------------------------------------------------- | :------- | :----------- | :---------- |
| station       | The weather station ID                                                | String   | Yes          | `undefined` |
| start         | The start date of the query (YYYY-MM-DD)                              | String   | Yes          | `undefined` |
| end           | The end date of the query (YYYY-MM-DD)                                | String   | Yes          | `undefined` |
| model         | Substitute missing records with statistically optimized model data    | String   | No           | `true`      |
| freq          | The time frequency of the records. Can be used for custom aggregation | String   | No           | `null`      |
| units         | The unit system of the meteorological parameters                      | String   | No           | metric      |

For full specification of available frequencies, defined by the `freq` parameter, please see [here](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases).

The `units` parameter takes one of the following values:

- _metric_ (Celsius, Millimeters, Kilometers per hour)
- _imperial_ (Fahrenheit, Inches, Miles per hour)
- _scientific_ (Kelvin, Millimeters, Meters per second)

## Response

The response body includes the following properties. Please note that all units mentioned below refer to the default `units` setting.

| **Parameter** | **Description**                                 | **Type** |
| :------------ | :---------------------------------------------- | :------- |
| date          | The first date (YYYY-MM-DD) of the month        | String   |
| tavg          | The average daily air temperature in °C         | Float    |
| tmin          | The average daily minimum air temperature in °C | Float    |
| tmax          | The average daily maximum air temperature in °C | Float    |
| prcp          | The monthly precipitation total in mm           | Float    |
| snow          | The maximum snow depth in mm                    | Integer  |
| wdir          | The average wind direction in degrees (°)       | Integer  |
| wspd          | The average wind speed in km/h                  | Float    |
| wpgt          | The peak wind gust in km/h                      | Float    |
| pres          | The average sea-level air pressure in hPa       | Float    |
| tsun          | The monthly sunshine total in minutes (m)       | Integer  |

More information about the data format is available [here](/formats).

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --request GET \
	--url 'https://meteostat.p.rapidapi.com/stations/monthly?station=10637&start=2020-01-01&end=2020-12-31' \
	--header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
	--header 'x-rapidapi-key: {key}'
```

Please replace `{key}` with your personal API key.

### Data Response

The data output returns one object per month. Have a look at this example:

```json
{
  "date": "2020-01-01",
  "tavg": 4.1,
  "tmin": 1,
  "tmax": 7,
  "prcp": 37,
  "snow": 0,
  "wdir": 191.3,
  "wspd": 11.2,
  "wpgt": 77,
  "pres": 1025.2,
  "tsun": 3300
}
```
