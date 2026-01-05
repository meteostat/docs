---
title: meteostat.Provider | API Reference | Python Library
sidebar_label: ms.Provider
sidebar_position: 20
---

# meteostat.Provider

Enumeration of data providers integrated in Meteostat.

- **Type:** _Enumeration_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/enumerations.py#L87)

The `Provider` enumeration defines all available weather data providers that Meteostat can access. Different providers offer different data granularities, parameters, and geographical coverage. You can specify which providers to use when retrieving weather data.

## Enumeration Members

Please refer to the [full list of providers](/providers).

## Example

```python
import meteostat as ms

# Request data from specific providers
ts = ms.daily(
    '10637',
    start_date,
    end_date,
    # highlight-next-line
    providers=[ms.Provider.DWD_DAILY]
)

df = ts.fetch()
print(df)
```
