---
title: Time Series | Meteostat CLI
sidebar_label: Overview
id: cli-ts-overview
slug: /cli/timeseries
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Time Series

The Meteostat CLI provides commands for fetching historical time series data at hourly, daily, monthly, and climate normal granularities. All commands accept one or more station IDs (or coordinates for interpolation) and a date range.

## 🚀 Example

<Tabs>
  <TabItem value="hourly" label="Hourly" default>

    Fetch hourly data for Frankfurt Airport in January 2024:

    ```bash
    meteo hourly 10637 --start 2024-01-01 --end 2024-01-31
    ```

  </TabItem>
  <TabItem value="daily" label="Daily">

    Fetch daily data for Frankfurt Airport for the full year 2024:

    ```bash
    meteo daily 10637 --start 2024-01-01 --end 2024-12-31
    ```

  </TabItem>
  <TabItem value="monthly" label="Monthly">

    Fetch monthly data for Frankfurt Airport from 2020 to 2024:

    ```bash
    meteo monthly 10637 --start 2020 --end 2024
    ```

  </TabItem>
  <TabItem value="normals" label="Normals">

    Fetch the 30-year climate normals for Frankfurt Airport:

    ```bash
    meteo normals 10637 --start 1991 --end 2020
    ```

  </TabItem>
</Tabs>

## 🎯 Common Options {#common-options}

All time series commands share the following options:

| Option           | Short | Description                                                   |
| ---------------- | ----- | ------------------------------------------------------------- |
| `--start`        | `-s`  | Start date (`YYYY-MM-DD`, `YYYY-MM`, `YYYY`)                  |
| `--end`          | `-e`  | End date (same formats)                                       |
| `--parameters`   | `-p`  | Comma-separated parameters (e.g. `tavg,tmin,tmax,prcp`)       |
| `--providers`    | `-P`  | Comma-separated data providers                                |
| `--format`       | `-f`  | Output format: `csv`, `json`, `xlsx`, `parquet`, `png`, `svg` |
| `--output`       | `-o`  | Output file path (defaults to stdout)                         |
| `--with-sources` | `-S`  | Include data source column in output                          |
| `--no-models`    |       | Exclude model data (e.g. MOSMIX)                              |
| `--no-header`    |       | Omit CSV header row                                           |
| `--no-cache`     |       | Disable result caching                                        |
| `--all`          | `-A`  | Print full table without truncation                           |
| `--agg`          |       | Aggregation function: `mean`, `sum`, `min`, `max`             |

## 👀 Learn More

<DocCardList />
