---
sidebar_position: 2
---

# Formats & Units

Meteostat uses the metric system. Both the JSON API and the Bulk Data interface use the formats and units listed below.

## Time Format

Date and time statements follow the ISO 8601 standard (e.g. _2016-12-31_ for _December 31st 2016_ and _23:59:58_ for _23 hours, 59 minutes, and 58 seconds_). The time zone used by Meteostat is Coordinated Universal Time (UTC).

### Time Ranges

Many JSON API endpoints require the specification of a time range using the <code>start</code> and <code>end</code> parameters. For these parameters please always provide dates in this format: _YYYY-MM-DD_.

## Meteorological Parameters

Meteostat provides time series data for many different meteorological parameters and granularities. A comprehensive list is available [here](parameters.md).

## Data Units

Meteostat uses the metric system by default.

| **Parameter(s)**           | **Unit** |
| :------------------------- | :------- |
| Temperature                | °C       |
| Precipitation              | mm       |
| Sunshine Duration          | Minutes  |
| Air Pressure               | hPa      |
| Wind Speed, Peak Wind Gust | km/h     |
| Wind Direction             | Degrees  |
| Visibility, Cloud Height   | m        |
| Relative Humidity          | %        |

## Weather Condition Codes

Hourly weather data may include information on the observed weather condition. Please note that the weather condition is not a key parameter for Meteostat. METAR reports, issued by weather stations located at airports, only report significant weather events. Also, some weather stations do not provide weather condition data at all.

Weather conditions are indicated by an integer value between 1 and 27 according to this list:

| **Code** | **Weather Condition** |
| :------- | :-------------------- |
| 1        | Clear                 |
| 2        | Fair                  |
| 3        | Cloudy                |
| 4        | Overcast              |
| 5        | Fog                   |
| 6        | Freezing Fog          |
| 7        | Light Rain            |
| 8        | Rain                  |
| 9        | Heavy Rain            |
| 10       | Freezing Rain         |
| 11       | Heavy Freezing Rain   |
| 12       | Sleet                 |
| 13       | Heavy Sleet           |
| 14       | Light Snowfall        |
| 15       | Snowfall              |
| 16       | Heavy Snowfall        |
| 17       | Rain Shower           |
| 18       | Heavy Rain Shower     |
| 19       | Sleet Shower          |
| 20       | Heavy Sleet Shower    |
| 21       | Snow Shower           |
| 22       | Heavy Snow Shower     |
| 23       | Lightning             |
| 24       | Hail                  |
| 25       | Thunderstorm          |
| 26       | Heavy Thunderstorm    |
| 27       | Storm                 |
