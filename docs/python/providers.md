---
title: Data Providers | Python Library
sidebar_label: Data Providers
sidebar_position: 6
---

# Data Providers

Meteostat integrates data from various weather data providers to offer comprehensive meteorological information. Each provider has its own set of meteorological parameters, data coverage, and update frequency. The Meteostat Python library allows you to access data from these providers seamlessly.

:::warning[Be Explicit]
When retrieving data directly from a specific provider, it is important to explicitly specify the desired `parameters` to avoid fetching unnecessary data.
:::

## 🚀 Example {#example}

```python
# Import Meteostat library and dependencies
from datetime import datetime
import meteostat as ms

# Set time period
start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

# Get hourly temperature data directly from DWD
ts = ms.hourly(
    '10637',
    start,
    end,
    providers=[ms.Provider.DWD_HOURLY],
    parameters=[ms.Parameter.TEMP]
)
df = ts.fetch()

# Print DataFrame
print(df)
```

This is the output you would get:

```
time
2018-01-01 00:00:00  11.3
2018-01-01 01:00:00  10.8
2018-01-01 02:00:00  10.5
2018-01-01 03:00:00  10.0
2018-01-01 04:00:00   9.6
...                   ...
2018-12-31 19:00:00   7.3
2018-12-31 20:00:00   7.3
2018-12-31 21:00:00   7.1
2018-12-31 22:00:00   6.8
2018-12-31 23:00:00   6.6

[8760 rows x 1 columns]
```
