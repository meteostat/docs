---
title: meteostat.License | API Reference | Python Library
sidebar_label: ms.License
sidebar_position: 21
---

# meteostat.License

A data license specification.

- **Type:** _Dataclass_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/typing.py#L40)

The `License` dataclass represents licensing information for meteorological data. It contains details about whether a data source can be used commercially and attribution information. License objects are typically accessed through provider or dataset metadata.

## Properties

| Property      | Description                       | Type            |
| ------------- | --------------------------------- | --------------- |
| `commercial`  | Whether commercial use is allowed | `bool`          |
| `name`        | Name of the license               | `str` or `None` |
| `url`         | URL to the license details        | `str` or `None` |
| `attribution` | Required attribution text         | `str` or `None` |
