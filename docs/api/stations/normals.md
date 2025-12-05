---
title: Climate Normals | Weather Station | JSON API
sidebar_label: Climate Normals
sidebar_position: 7
---

# Climate Normals

Climate normals are long-term averages of historical weather observations. Usually, these means are calculated over a period of 30 years (_“reference period“_). However, any other time series of sufficient length can be used to calculate climate normals.

Climate normals represent the typical monthly weather at a given location. The averages can also be used for calculating anomalies of current weather and climate conditions.

## Endpoint

Climate normals are provided through this endpoint:

```
GET https://meteostat.p.rapidapi.com/stations/normals
```

## Parameters

Just add the station’s ID through the `station` parameter. Please note that not all weather stations provide climate normals for all periods.

| **Parameter** | **Description**                                  | **Type** | **Required** | **Default** |
| :------------ | :----------------------------------------------- | :------- | :----------- | :---------- |
| station       | The weather station ID                           | String   | Yes          | `undefined` |
| start         | The start year (YYYY) of the period              | String   | No           | `null`      |
| end           | The end year (YYYY) of the period                | String   | No           | `null`      |
| units         | The unit system of the meteorological parameters | String   | No           | metric      |

The `units` parameter takes one of the following values:

- _metric_ (Celsius, Millimeters, Kilometers per hour)
- _imperial_ (Fahrenheit, Inches, Miles per hour)
- _scientific_ (Kelvin, Millimeters, Meters per second)

## Response

The data array of the response contains twelve objects (one per month) for every period. Each of these objects includes the following properties. Please note that all units mentioned below refer to the default `units` setting.

| **Parameter** | **Description**                           | **Type** |
| :------------ | :---------------------------------------- | :------- |
| month         | The integer number of the month (1 to 12) | Integer  |
| tavg          | The mean temperature in °C                | Float    |
| tmin          | The average minimum temperature in °C     | Float    |
| tmax          | The average maximum temperature in °C     | Float    |
| prcp          | The average total precipitation in mm     | Integer  |
| pres          | The average sea-level air pressure in hPa | Float    |
| tsun          | The average sunshine duration in minutes  | Integer  |

More information about the data format is available [here](/formats.html).

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --request GET \
	--url 'https://meteostat.p.rapidapi.com/stations/normals?station=10637&start=1961&end=1990' \
	--header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
	--header 'x-rapidapi-key: {key}'
```

Please replace `{key}` with your personal API key.

## Data Response

The response should look like that:

```json
{
  "meta": {
    "exec_time": 0.885,
    "generated": "2021-06-23 12:14:35"
  },
  "data": [
    {
      "month": 1,
      "tavg": 0.5,
      "tmin": -2.2,
      "tmax": 3.2,
      "prcp": 43.8,
      "wspd": 12.3,
      "pres": 1018,
      "tsun": 2454
    },
    {
      "month": 2,
      "tavg": 1.7,
      "tmin": -1.6,
      "tmax": 5,
      "prcp": 39.8,
      "wspd": 11.9,
      "pres": 1017.5,
      "tsun": 4494
    },
    {
      "month": 3,
      "tavg": 5.6,
      "tmin": 0.9,
      "tmax": 10.2,
      "prcp": 51.1,
      "wspd": 12.9,
      "pres": 1014.9,
      "tsun": 6984
    },
    {
      "month": 4,
      "tavg": 9.6,
      "tmin": 4.4,
      "tmax": 14.7,
      "prcp": 51.5,
      "wspd": 12.2,
      "pres": 1014.2,
      "tsun": 9756
    },
    {
      "month": 5,
      "tavg": 13.8,
      "tmin": 8.2,
      "tmax": 19.3,
      "prcp": 61.3,
      "wspd": 11.1,
      "pres": 1014.6,
      "tsun": 12390
    },
    {
      "month": 6,
      "tavg": 17,
      "tmin": 11.6,
      "tmax": 22.5,
      "prcp": 70.2,
      "wspd": 11.1,
      "pres": 1015.6,
      "tsun": 12564
    },
    {
      "month": 7,
      "tavg": 18.8,
      "tmin": 13.2,
      "tmax": 24.3,
      "prcp": 63,
      "wspd": 10.9,
      "pres": 1016.6,
      "tsun": 13470
    },
    {
      "month": 8,
      "tavg": 18.2,
      "tmin": 12.7,
      "tmax": 23.7,
      "prcp": 64.8,
      "wspd": 10.2,
      "pres": 1016.1,
      "tsun": 12234
    },
    {
      "month": 9,
      "tavg": 15,
      "tmin": 9.7,
      "tmax": 20.2,
      "prcp": 48.3,
      "wspd": 10.2,
      "pres": 1018.3,
      "tsun": 9450
    },
    {
      "month": 10,
      "tavg": 9.9,
      "tmin": 5.7,
      "tmax": 14.1,
      "prcp": 50.5,
      "wspd": 10.1,
      "pres": 1017.6,
      "tsun": 6150
    },
    {
      "month": 11,
      "tavg": 5,
      "tmin": 2,
      "tmax": 7.9,
      "prcp": 59.4,
      "wspd": 12,
      "pres": 1018.3,
      "tsun": 2904
    },
    {
      "month": 12,
      "tavg": 1.8,
      "tmin": -0.7,
      "tmax": 4.3,
      "prcp": 54.1,
      "wspd": 12.4,
      "pres": 1016.9,
      "tsun": 2310
    }
  ]
}
```
