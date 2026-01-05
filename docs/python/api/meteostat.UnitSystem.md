---
title: meteostat.UnitSystem | API Reference | Python Library
sidebar_label: ms.UnitSystem
sidebar_position: 23
---

# meteostat.UnitSystem

Enumeration of unit systems for meteorological data.

- **Type:** _Enumeration_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/enumerations.py#L77)

The `UnitSystem` enumeration defines the different unit systems available for meteorological parameters in Meteostat. When you fetch data, you can specify which unit system to use, and the data will be automatically converted if necessary. This allows you to work with data in your preferred measurement units.

## Enumeration Members

- `SI` - International System of Units (Kelvin, m/s, Pascal, mm)
- `METRIC` - Metric system (Celsius, km/h, hectopascal, mm) **(default)**
- `IMPERIAL` - Imperial system (Fahrenheit, mph, inHg, in)

## Example

You can specify the unit system when fetching data using the `units` parameter:

```python
import meteostat as ms
from datetime import date

ts = ms.daily(
    '10637',
    date(2023, 1, 1),
    date(2023, 12, 31)
)

# highlight-next-line
df = ts.fetch(units=ms.UnitSystem.IMPERIAL)
print(df)
```
