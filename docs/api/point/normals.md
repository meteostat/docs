---
sidebar_position: 5
---

# Climate Normals

Climate normals are long-term averages of historical weather observations. Usually, these means are calculated over a period of 30 years (“_reference period_“). However, any other time series of sufficient length can be used to calculate climate normals.

Climate normals represent the typical monthly weather at a given location. The averages can also be used for calculating anomalies of current weather and climate conditions.

## Endpoint

Climate normals are provided through this endpoint:

```
GET https://meteostat.p.rapidapi.com/point/normals
```

## Parameters

In order to query data for any location you’ll need to specify the `lat` and `lon` parameters. You will probably also want to add the `alt` parameter to your request to make the output more precise. If you do not set the `alt` parameter, Meteostat will detect the elevation using its own elevation model.

| **Parameter** | **Description**                                  | **Type** | **Required** | **Default** |
| :------------ | :----------------------------------------------- | :------- | :----------- | :---------- |
| lat           | The latitude of the geographic location          | Float    | Yes          | `undefined` |
| lon           | The longitude of the geographic location         | Float    | Yes          | `undefined` |
| alt           | The elevation of the geographic location         | Integer  | No           | `null`      |
| units         | The unit system of the meteorological parameters | String   | No           | metric      |

The `units` parameter takes one of the following values:

- _metric_ (Celsius, Millimeters, Kilometers per hour)
- _imperial_ (Fahrenheit, Inches, Miles per hour)
- _scientific_ (Kelvin, Millimeters, Meters per second)

## Response

The data array of the response contains twelve objects (one per month) for every period. Each of these objects includes the following properties. Please note that all units mentioned below refer to the default `units` setting.

| **Parameter** | **Description**                                        | **Type** |
| :------------ | :----------------------------------------------------- | :------- |
| start         | The first year (YYYY) of the period (if not specified) | Integer  |
| end           | The last year (YYYY) of the period (if not specified)  | Integer  |
| month         | The month                                              | Integer  |
| tavg          | The average daily air temperature in °C                | Float    |
| tmin          | The average daily minimum air temperature in °C        | Float    |
| tmax          | The average daily maximum air temperature in °C        | Float    |
| prcp          | The monthly precipitation total in mm                  | Float    |
| wspd          | The average wind speed in km/h                         | Float    |
| pres          | The average sea-level air pressure in hPa              | Float    |
| tsun          | The monthly sunshine total in minutes (m)              | Integer  |

More information about the data format is available [here](/formats.html).

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --request GET \
	--url 'https://meteostat.p.rapidapi.com/point/normals?lat=59.9127&lon=10.7461&alt=26&start=1961&end=1990' \
	--header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
	--header 'x-rapidapi-key: {key}'
```

Please replace `{key}` with your personal API key.

### Data Response

The data output returns one object per month. Have a look at this example:

```json
{
  "month": 1,
  "tavg": -3.8,
  "tmin": -6.3,
  "tmax": -1.3,
  "prcp": 50.9,
  "wspd": null,
  "pres": 1011.3,
  "tsun": 2400
}
```
