---
title: Monthly Weather | Time Series | Python Library
sidebar_label: Monthly Weather
sidebar_position: 3
---

# Monthly Weather

Monthly time series data is perfect for examining long-term climate trends and seasonal patterns over extended periods, such as years or decades.

## 🚀 Example {#example}

Let's fetch some monthly data for Frankfurt, Germany from 2000 to 2018:

```python
# Import Meteostat library and dependencies
from datetime import date
import meteostat as ms

# Set time period
start = date(2000, 1, 1)
end = date(2018, 12, 31)

# Get monthly data
ts = ms.monthly(ms.Station(id='10637'), start, end)
df = ts.fetch()

# Print DataFrame
print(df)
```

This is the output you would get:

```
            temp  tmin  tmax  txmn  txmx  prcp    pres   tsun
time
2000-01-01   2.9  -0.1   5.0 -11.0  10.9  37.2  1025.3   2844
2000-02-01   5.3   1.4   8.8  -4.7  16.4  51.5  1021.5   4884
2000-03-01   7.6   4.5  11.3  -1.6  17.4  59.6  1019.6   5304
2000-04-01  11.8   6.5  16.8  -1.1  26.7  27.1  1009.1  10890
2000-05-01  16.5  10.9  21.9   5.1  28.9  99.0  1015.7  13002
...          ...   ...   ...   ...   ...   ...     ...    ...
2018-08-01  22.0  15.1  28.9   5.9  36.8  20.3  1016.7  16428
2018-09-01  16.6  10.2  23.9   2.9  31.6  26.3  1021.2  13308
2018-10-01  12.4   7.1  18.1   0.1  26.9   7.0  1018.3  10734
2018-11-01   7.1   3.7  10.3  -1.6  18.1  25.9  1018.4   4974
2018-12-01   4.7   2.2   7.0  -4.3  13.2  75.3  1020.8   1308

[228 rows x 8 columns]
```

## 🌥 Default Parameters {#default-parameters}

The default parameters for monthly data requests are [listed here](/parameters?g=monthly&d=1).

## 🔍 API {#api}

### Interface

```
meteostat.monthly
```

### Parameters

#### `station` {#parameter-station}

Weather station(s) or geographical point(s)

##### Data Type {#parameter-station-type}

`str`, `Station`, `Point`, `List[str]`, `List[Station]`, `List[Point]`, [`DataFrame`](https://pandas.pydata.org/docs/reference/frame.html)

##### Examples {#parameter-station-examples}

Please refer to the chapter ["Stations & Points"](/python/stations-points) for detailed examples on how to specify the `station` parameter.

---

#### `start` {#parameter-start}

Start date of the desired period

##### Data Type {#parameter-start-type}

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) or [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)

---

#### `end` {#parameter-end}

End date of the desired period

##### Data Type {#parameter-end-type}

[`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) or [`date`](https://docs.python.org/3/library/datetime.html#datetime.date)

---

#### `parameters` {#parameter-parameters}

Requested meteorological parameters

##### Data Type {#parameter-parameters-type}

`List[Parameter]`

##### Default Value {#parameter-parameters-default}

[Default parameters](#default-parameters)

---

#### `providers` {#parameter-providers}

Requested data providers

##### Data Type {#parameter-providers-type}

`List[Provider]`

##### Default Value {#parameter-providers-default}

`[Provider.MONTHLY]`
