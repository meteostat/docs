---
title: Lapse Rate | Python Library
sidebar_label: Lapse Rate
sidebar_position: 9
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

---

#### `parameter` {#parameter-parameter}

The meteorological parameter for which the lapse rate should be calculated. Only temperature parameters are supported.

##### Data Type {#parameter-ts-type}

`Parameter`

##### Default Value {#parameter-parameter-default}

`Parameter.TEMP`

### Return Value

`float` or `None`
