---
title: meteostat.Parameter | API Reference | Python Library
sidebar_label: ms.Parameter
sidebar_position: 19
---

# meteostat.Parameter

Enumeration of meteorological parameters available in Meteostat.

- **Type:** _Enumeration_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/enumerations.py#L29)

The `Parameter` enumeration defines all available meteorological parameters that can be retrieved from Meteostat. Different parameters are available for different data granularities (hourly, daily, monthly, normals). Use these enumeration values to specify which parameters you want to retrieve in your requests.

## Enumeration Members

Please refer to the [full list of parameters](/parameters).

## Example

```python
import meteostat as ms

# Request specific parameters
ts = ms.daily(
    '10637',
    start_date,
    end_date,
    # highlight-next-line
    parameters=[ms.Parameter.TEMP, ms.Parameter.PRCP]
)

df = ts.fetch()
print(df)
```
