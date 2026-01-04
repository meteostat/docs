---
title: meteostat.Station | API Reference | Python Library
sidebar_label: ms.Station
sidebar_position: 16
---

# meteostat.Station

A class representing a weather station with its metadata and geographic location.

**Type:** _Class_

## Parameters

| Parameter   | Description                                            | Data Type | Default Value |
| ----------- | ------------------------------------------------------ | --------- | ------------- |
| `id`        | The unique Meteostat identifier of the station         | `str`     | Required      |
| `name`      | The name of the weather station                        | `str`     | `None`        |
| `country`   | ISO 3166-1 alpha-2 country code (e.g., "DE")           | `str`     | `None`        |
| `region`    | ISO 3166-2 state or region code (e.g., "HE")           | `str`     | `None`        |
| `latitude`  | The latitude of the station in decimal degrees         | `float`   | `None`        |
| `longitude` | The longitude of the station in decimal degrees        | `float`   | `None`        |
| `elevation` | The elevation of the station in meters above sea level | `int`     | `None`        |
| `timezone`  | The time zone of the station (e.g., "Europe/Berlin")   | `str`     | `None`        |

## Properties

| Property    | Description                            | Type    |
| ----------- | -------------------------------------- | ------- |
| `id`        | The unique Meteostat identifier        | `str`   |
| `name`      | The name of the weather station        | `str`   |
| `country`   | ISO 3166-1 alpha-2 country code        | `str`   |
| `region`    | ISO 3166-2 state or region code        | `str`   |
| `latitude`  | The latitude of the station            | `float` |
| `longitude` | The longitude of the station           | `float` |
| `elevation` | The elevation of the station in meters | `int`   |
| `timezone`  | The time zone of the station           | `str`   |
