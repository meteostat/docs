---
title: meteostat.Station | API Reference | Python Library
sidebar_label: ms.Station
sidebar_position: 17
---

# meteostat.Station

A class representing a weather station with its metadata and geographic location.

- **Type:** _Dataclass_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/typing.py#L21)

## Properties

| Property      | Description                                                              | Type              |
| ------------- | ------------------------------------------------------------------------ | ----------------- |
| `id`          | The Meteostat station ID (e.g., "10637" or "$0001" for virtual stations) | `str`             |
| `name`        | The (usually English) name of the station                                | `str` or `None`   |
| `country`     | ISO 3166-1 alpha-2 country code                                          | `str` or `None`   |
| `region`      | ISO 3166-2 state or region code                                          | `str` or `None`   |
| `identifiers` | Provider identifiers mapping                                             | `dict[str, str]`  |
| `latitude`    | The latitude in degrees                                                  | `float` or `None` |
| `longitude`   | The longitude in degrees                                                 | `float` or `None` |
| `elevation`   | The elevation in meters                                                  | `int` or `None`   |
| `timezone`    | The IANA timezone name                                                   | `str` or `None`   |
