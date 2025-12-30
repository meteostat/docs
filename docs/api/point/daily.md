---
title: Daily Data | Point Data | JSON API
sidebar_label: Daily Data
sidebar_position: 3
---

# Daily Data

This endpoint provides historical daily statistics for any geographic location. The data provided through this endpoint is aggregated from multiple governmental interfaces.

Daily data is coming in with an offset of about one to seven days. However, some data might be added multiple days or even months later, depending on when exactly the different weather services are updating their datasets. Additionally, Meteostat aggregates daily data from hourly observations and model data.

Daily data can be queried for a **maximum of 10 years** per request.

## Endpoint

Daily data is provided through this endpoint:

```
GET https://meteostat.p.rapidapi.com/point/daily
```

## Parameters

In order to query data for any location you’ll need to specify the `lat` and `lon` parameters. You will probably also want to add the `alt` parameter to your request to make the output more precise. If you do not set the `alt` parameter, Meteostat will guess the elevation based on nearby weather stations.

| **Parameter** | **Description**                                                       | **Type** | **Required** | **Default** |
| :------------ | :-------------------------------------------------------------------- | :------- | :----------- | :---------- |
| lat           | The latitude of the geographic location                               | Float    | Yes          | `undefined` |
| lon           | The longitude of the geographic location                              | Float    | Yes          | `undefined` |
| alt           | The elevation of the geographic location                              | Integer  | No           | `null`      |
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

| **Parameter** | **Description**                           | **Type** |
| :------------ | :---------------------------------------- | :------- |
| date          | The date string (YYYY-MM-DD)              | String   |
| tavg          | The average air temperature in °C         | Float    |
| tmin          | The minimum air temperature in °C         | Float    |
| tmax          | The maximum air temperature in °C         | Float    |
| prcp          | The daily precipitation total in mm       | Float    |
| snow          | The maximum snow depth in mm              | Integer  |
| wdir          | The average wind direction in degrees (°) | Integer  |
| wspd          | The average wind speed in km/h            | Float    |
| wpgt          | The peak wind gust in km/h                | Float    |
| pres          | The average sea-level air pressure in hPa | Float    |
| tsun          | The daily sunshine total in minutes (m)   | Integer  |

More information about the data format is available [here](/formats).

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --request GET \
	--url 'https://meteostat.p.rapidapi.com/point/daily?lat=43.6667&lon=-79.4&start=2020-01-01&end=2020-01-31&alt=184' \
	--header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
	--header 'x-rapidapi-key: {key}'
```

Please replace `{key}` with your personal API key.

### Data Response

The data output returns one object per day. Have a look at this example:

```json
{
  "date": "2020-02-01",
  "tavg": 11.4,
  "tmin": 7.8,
  "tmax": 12.8,
  "prcp": 10.1,
  "snow": 0,
  "wdir": 210,
  "wspd": 22.3,
  "wpgt": 126,
  "pres": 1009.6,
  "tsun": 0
}
```
