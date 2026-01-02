---
title: meteostat.TimeSeries | API Reference | Python Library
sidebar_label: meteostat.TimeSeries
sidebar_position: 4
---

# meteostat.TimeSeries

A class representing a time series of meteorological data.

**Type:** _Class_

## Overview

The `TimeSeries` class provides access to weather or climate data for one or multiple weather stations. Time series objects are created through one of the granularity-specific interfaces:

- [`meteostat.hourly`](./meteostat.hourly.md)
- [`meteostat.daily`](./meteostat.daily.md)
- [`meteostat.monthly`](./meteostat.monthly.md)
- [`meteostat.normals`](./meteostat.normals.md)

## Properties

| Property      | Description                                                           | Type                                                                            |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `granularity` | The time series's granularity                                         | `Granularity`                                                                   |
| `stations`    | Included weather stations                                             | [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)              |
| `start`       | Start date of the requested period                                    | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) |
| `end`         | End date of the requested period                                      | [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) |
| `timezone`    | Time zone of the period and records (only hourly granularity)         | `str`                                                                           |
| `parameters`  | Included meteorological parameters                                    | `List[Parameter]`                                                               |
| `freq`        | The time series's frequency (e.g. `1h` in case of hourly granularity) | `str`                                                                           |
| `empty`       | Is the time series empty?                                             | `bool`                                                                          |
| `providers`   | Included data providers                                               | `List[Provider]`                                                                |
| `licenses`    | Applicable licenses                                                   | `List[License]`                                                                 |
| `attribution` | The attribution/copyright string                                      | `str`                                                                           |
| `commercial`  | Can data be used for commercial purposes?                             | `bool`                                                                          |

## Methods

- [`fetch()`](./meteostat.TimeSeries.fetch.md) - Fetch the actual weather/climate data
- [`count()`](./meteostat.TimeSeries.count.md) - Get the number of rows in the time series or by parameter
- [`completeness()`](./meteostat.TimeSeries.completeness.md) - Get the share of non-NaN values in the time series
- [`validate()`](./meteostat.TimeSeries.validate.md) - Check if the time series passes all quality checks
