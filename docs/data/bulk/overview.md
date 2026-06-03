---
title: Bulk Data | Data Access
sidebar_label: Overview
id: data-bulk-overview
slug: /data/bulk
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Bulk Data

The Meteostat bulk data interface provides access to weather and climate data across **all** weather stations in **Parquet** format. It's especially useful for large-scale, spatial analysis. Users are **not required to sign up** for this service.

:::warning[Beta]
This interface is currently in beta. We are actively working on improving it and adding new features. The formats and data structures may change in the future. We recommend checking back regularly for updates and improvements.
:::

## 🔌 Access

This interface does not require an API key. However, when using this service you must comply with our [terms of service](/terms). Please make sure to cache data if possible and forbear from sending malicious calls to this service.

Data is available in three different granularities:

- [Hourly data](/data/bulk/hourly)
- [Daily data](/data/bulk/daily)
- [Monthly data](/data/bulk/monthly)

:::warning
Years without data will return an HTTP `404` status code.
:::

## 🚀 Quick Start

The download of annual data dumps is dead simple and doesn’t even require an API key:

```bash
curl "https://data.meteostat.net/hourly/2024.parquet" --output "2024.parquet"
```

## 🔄 Update Cycle

The dumps are updated regularly, depending on the granularity of records. Recent hourly data should be available after a maximum of 24 hours.

## 👀 Learn More {#learn-more}

<DocCardList />
