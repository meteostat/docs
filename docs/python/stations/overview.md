---
id: python-stations-overview
slug: /python/stations
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Weather Stations

Weather stations are the primary source of meteorological data for Meteostat. The Meteostat Python library provides access to a comprehensive database of weather stations worldwide, allowing users to retrieve station metadata and search for stations based on various criteria.

:::info
All `meteostat.stations.*` methods are using the Meteostat weather stations SQLite database. While this database can be loaded into memory, it is recommended to use the default on-disk database for most applications to conserve system memory. The `meteostat.station` method does not rely on the local database and can be used without caching.
:::

## 🚀 Example {#example}

<Tabs>
  <TabItem value="meta" label="Meta Data" default>
        You can easily retrieve metadata for a specific weather station using its unique identifier:

        ```python
        import meteostat as ms

        station = ms.station('72503')  # LaGuardia Airport

        print(station)
        ```

        Learn more about station metadata in the [Meta Data](meta.md) chapter.

  </TabItem>
  <TabItem value="nearby" label="Nearby Stations">
        To find weather stations near a specific geographical point, you can use the `nearby` method:

        ```python
        import meteostat as ms

        POINT = ms.Point(50.1155, 8.6842, 113)  # Try with your location

        # Get nearby weather stations
        stations = ms.stations.nearby(POINT, limit=4)

        print(stations)
        ```

        Learn more about finding nearby stations in the [Nearby Stations](nearby.md) chapter.

  </TabItem>
  <TabItem value="inventory" label="Inventory Data">
        You can check the data availability for a specific weather station using the `inventory` method:

        ```python
        import meteostat as ms

        STATION = '71624'  # Toronto Pearson International Airport

        # Get station inventory
        inventory = ms.stations.inventory(STATION)

        print(f"Data available from {inventory.start} to {inventory.end}.")
        ```

        Learn more about station inventory in the [Inventory](inventory.md) chapter.

  </TabItem>
</Tabs>

## 👀 Learn More {#learn-more}

<DocCardList />
