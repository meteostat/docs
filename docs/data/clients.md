---
title: Building Clients | Datasets
sidebar_label: Building Clients
sidebar_position: 5
---

# Building Clients

We recommend using [Meteostat Python](/python) for accessing Meteostat Datasets. However, if you want to build your own client, here is what you need to know.

## Data Structure

Meteostat Datasets **are not versioned**. Therefore, clients **must be able to handle changes in the data structure**. For example, new columns may be added to the datasets, or existing columns may be removed or renamed. Clients should be designed to handle these changes gracefully.

Build your client so it can handle:

- new columns being added to the datasets,
- existing columns being removed or renamed,
- the order of columns changing, and
- data types of columns changing.

:::warning
CSV readers that rely on the order of columns may break when new columns are added or existing columns are removed. Therefore, it is recommended to use column names instead of column indices when accessing data.
:::

## Handling Changes

Meteostat will communicate any changes to the data structure ahead of time in the [Changelog](/data/changelog). Maintainers of clients should subscribe to the Changelog and update their clients accordingly.

- New columns may be added to the datasets **without prior notice**.
- Existing columns may be removed or renamed with a **minimum 90-day notice**.
- Changes to the data types of columns are **not communicated ahead of time** if types can be cast automatically (e.g., integer to float).
- Meteostat strives to inform users about the discontinuation of datasets **at least 6 months in advance**. They will remain available for download for a period after the discontinuation date. However, they won't be updated anymore.

## Rate Limiting
