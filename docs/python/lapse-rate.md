---
title: Lapse Rate | Python Library
sidebar_label: Lapse Rate
sidebar_position: 7
---

# Lapse Rate

Meteostat provides a function to calculate the lapse rate for temperature parameters based on weather data from multiple stations. The lapse rate is defined as the rate of temperature change with elevation and expressed in °C per 1000 meters.

## 🔍 API {#api}

### Interface

```
meteostat.lapse_rate
```

### Parameters

#### `ts` {#parameter-ts}

A `TimeSeries` object containing weather data from multiple weather stations.

##### Data Type {#parameter-ts-type}

[`TimeSeries`](timeseries)

### Return Value

`float` or `None`
