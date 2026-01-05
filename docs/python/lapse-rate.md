---
title: Lapse Rate | Python Library
sidebar_label: Lapse Rate
sidebar_position: 8
---

# Lapse Rate

Meteostat provides a function to calculate the lapse rate for temperature parameters based on weather data from multiple stations. The lapse rate is defined as the rate of temperature change with elevation and expressed in °C per 1000 meters. The standard lapse rate in the troposphere is approximately 6.5 °C per 1000 meters, but actual values can vary based on local atmospheric conditions.

:::tip
A negative lapse rate value indicates an increase in temperature with elevation, which can happen in certain weather conditions, such as temperature inversions.
:::

## 🧪 Usage {#usage}

Calculating the actual lapse rate based on weather station data can help improve the accuracy of temperature estimates during interpolation, especially in areas with significant elevation differences. You can pass the calculated lapse rate to the [`meteostat.interpolate`](./api/meteostat.interpolate.md) function to apply elevation-based temperature adjustments.

## 🚀 Example {#example}

First, we need to get multiple weather stations in a specific area with some variety in elevation. Here are some stations in the Taunus mountain range area in Germany:

```
                           name country region  ...  elevation       timezone  distance
id                                              ...
D2329  Bad Homburg (Filterwerk)      DE     HE  ...        255  Europe/Berlin    9529.6
10635          Kleiner Feldberg      DE     HE  ...        805  Europe/Berlin   11673.6
D5300          Waldems-Reinborn      DE     HE  ...        380  Europe/Berlin   11758.2
D0837              Camberg, Bad      DE     HE  ...        244  Europe/Berlin   14954.4
D5416               Weilmünster      DE     HE  ...        183  Europe/Berlin   15032.3
EDEV0      Friedberg / Ockstadt      DE     HE  ...        146  Europe/Berlin   16664.6
D5225    Vilbel, Bad-Dortelweil      DE     HE  ...        125  Europe/Berlin   20873.2
D3413        Münzenberg-Gambach      DE     HE  ...        155  Europe/Berlin   22291.0
D1424        Frankfurt  Westend      DE     HE  ...        124  Europe/Berlin   24303.5
D5541        Wiesbaden-Auringen      DE     HE  ...        263  Europe/Berlin   24316.3

[10 rows x 8 columns]
```

As you can see, we have stations with different elevations ranging from 124 m to 805 m.

Now, we can fetch hourly temperature data for these stations and calculate the lapse rate. Here's the full example:

```python
from datetime import datetime
import meteostat as ms

# Set location and time period
point = ms.Point(50.3167, 8.5, 320)  # Neu-Anspach, Germany
start = datetime(2020, 1, 1)
end = datetime(2020, 1, 31)

# Get nearby weather stations
stations = ms.stations.nearby(point, limit=10)

# Get hourly temperature data from these stations
ts = ms.hourly(stations, start, end, parameters=[ms.Parameter.TEMP])

# Calculate lapse rate
lapse_rate = ms.lapse_rate(ts)

print(lapse_rate)
```

This would output something like `8.9618535745605`, indicating a lapse rate of approximately 8.96 °C per 1000 meters (or approximately 0.896 °C per 100 meters) of elevation gain. This value is slightly higher than the standard lapse rate of 6.5 °C per 1000 meters, which can occur due to local atmospheric conditions.

## 🔍 API {#api}

[`meteostat.lapse_rate`](./api/meteostat.lapse_rate.md)
