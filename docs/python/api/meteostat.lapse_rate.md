---
title: meteostat.lapse_rate | API Reference | Python Library
sidebar_label: ms.lapse_rate
sidebar_position: 11
---

# meteostat.lapse_rate

Calculate the lapse rate for temperature parameters based on weather data from multiple stations.

- **Type:** _Function_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/interpolation/lapserate.py)

The lapse rate is the rate of temperature change with elevation, expressed in °C per 1000 meters. This function calculates the lapse rate by analyzing temperature data from multiple weather stations at different elevations. This is useful for temperature interpolation and understanding how temperature varies with altitude in a geographical region.

## Parameters

| Parameter   | Description                                                        | Data Type                                 | Default Value    |
| ----------- | ------------------------------------------------------------------ | ----------------------------------------- | ---------------- |
| `ts`        | A TimeSeries object containing weather data from multiple stations | [`TimeSeries`](./meteostat.TimeSeries.md) | Required         |
| `parameter` | The temperature parameter to calculate lapse rate for              | [`Parameter`](./meteostat.Parameter.md)   | `Parameter.TEMP` |

:::warning[Supported Parameters]

Only temperature parameters are supported:

- `Parameter.TEMP` - Average temperature (default)
- `Parameter.TMIN` - Minimum temperature
- `Parameter.TMAX` - Maximum temperature
- `Parameter.TXMN` - Extreme minimum temperature
- `Parameter.TXMX` - Extreme maximum temperature

:::

## Returns

`float` or `None`

The calculated lapse rate in °C per 1000 meters, or `None` if the lapse rate cannot be calculated (e.g., insufficient data or only one station).

## Example

```python
from datetime import date
import meteostat as ms

# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)  # Frankfurt, Germany
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get nearby weather stations
stations = ms.stations.nearby(POINT, limit=4)

# Get daily data from multiple stations
ts = ms.daily(stations, START, END)

# Calculate lapse rate for average temperature
# highlight-next-line
lapse_rate = ms.lapse_rate(ts)

if lapse_rate is not None:
    print(f"Lapse rate: {lapse_rate:.2f}°C per 1000m")
else:
    print("Could not calculate lapse rate")
```
