---
title: Time Series | Python Library
sidebar_label: Overview
id: python-ts-overview
slug: /python/timeseries
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Time Series

Meteostat provides access to time series data for thousands of weather stations worldwide. These time series are provided in different granularities and can be consumed through a single interface.

## 🚀 Example {#example}

<Tabs>
  <TabItem value="hourly" label="Hourly" default>
        Let's fetch some hourly data for Atlanta, USA from January 1 to December 31, 2018:

        ```python
      # Import Meteostat library and dependencies
      from datetime import datetime
      import meteostat as ms

      # Set time period
      start = datetime(2018, 1, 1)
      end = datetime(2018, 12, 31, 23, 59)

      # Get hourly data
      ts = ms.hourly(ms.Station(id='72219'), start, end)
      df = ts.fetch()

      # Print DataFrame
      print(df)
        ```

  </TabItem>
  <TabItem value="daily" label="Daily">
        Let's fetch some daily temperature data for Frankfurt, Germany in 2018:

        ```python
      # Import Meteostat library and dependencies
      from datetime import date
      import meteostat as ms

      # Set time period
      start = date(2018, 1, 1)
      end = date(2018, 12, 31)

      # Get daily data
      ts = ms.daily(ms.Station(id='10637'), start, end)
      df = ts.fetch()

      # Print DataFrame
      print(df)
        ```

  </TabItem>
  <TabItem value="monthly" label="Monthly">
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

  </TabItem>
</Tabs>

## 🎯 Location Input {#location-input}

Please refer to the [Location Input](/cookbook/python/location-input.md) recipe for details on how to specify a location for fetching time series data.

## 🔀 Merging Time Series {#merging}

Please refer to the [Merging Time Series](/cookbook/python/merging-time-series.md) recipe for details on how to merge multiple time series objects into a single one.

## 👀 Learn More {#learn-more}

<DocCardList />

## 🔍 API {#api}

[`meteostat.TimeSeries`](../api/meteostat.TimeSeries.md)
