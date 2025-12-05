---
title: Python Library
sidebar_label: Overview
id: python-overview
slug: /python
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Meteostat Python

The Meteostat Python library offers an easy and efficient way to access open weather and climate data through Pandas. It retrieves historical observations and statistics from Meteostat’s [bulk data interface](/docs/data), which aggregates information from various public sources—primarily governmental agencies. Among Meteostat’s data providers are national weather services such as the **National Oceanic and Atmospheric Administration (NOAA)** and **Germany’s Meteorological Service (DWD)**.

## 📚 Installation

The Meteostat Python package is available through [PyPI](https://pypi.org/project/meteostat/):

```sh
pip install meteostat
```

## 🚀 Usage

Let's plot 2018 temperature data for Frankfurt, Germany:

```python
from datetime import date
import matplotlib.pyplot as plt
import meteostat as ms

# Specify location and time range
POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location
START = date(2018, 1, 1)
END = date(2018, 12, 31)

# Get nearby weather stations
stations = ms.stations.nearby(POINT, limit=4)

# Get daily data & perform interpolation
ts = ms.daily(stations, START, END)
df = ms.interpolate(ts, POINT)

# Plot line chart including average, minimum and maximum temperature
df.plot(y=[ms.Parameter.TEMP, ms.Parameter.TMIN, ms.Parameter.TMAX])
plt.show()
```

## 👀 Learn More

<DocCardList />
