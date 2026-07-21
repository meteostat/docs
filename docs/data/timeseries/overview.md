---
title: Time Series | Datasets
sidebar_label: Overview
id: data-timeseries-overview
slug: /data/timeseries
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Time Series

Meteostat provides access to full time series data dumps of individual weather stations. The data is provided in CSV format. Users are **not required to sign up** for this service.

## 🔌 Access

This interface does not require an API key. However, when using this service you must comply with our [terms of service](/terms). Please make sure to cache data if possible and forbear from sending malicious calls to this service.

Data is available in three different granularities:

- [Hourly data](/data/timeseries/hourly)
- [Daily data](/data/timeseries/daily)
- [Monthly data](/data/timeseries/monthly)

:::warning
The dumps of weather stations which didn't report data for the requested granularity or data type will return an HTTP `404` status code.
:::

## 🚀 Quick Start

The download of annual data dumps is dead simple and doesn’t even require an API key:

```bash
curl "https://data.meteostat.net/hourly/2024/10637.csv.gz" --output "10637-2024.csv.gz"
```

With our [Python library](/python/) we're providing a simple, yet powerful, wrapper for data dumps. If you're into more complex analysis you should definitely have a look at it.

## 🔄 Update Cycle

To keep the load on our infrastructure as low as possible, Meteostat updates data dumps individually for each weather station. The dumps are updated regularly, depending on the granularity of records. Recent hourly data should be available after a maximum of 24 hours.

## 👀 Learn More {#learn-more}

<DocCardList />
