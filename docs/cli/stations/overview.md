---
title: Weather Stations | Meteostat CLI
sidebar_label: Overview
id: cli-stations-overview
slug: /cli/stations
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Weather Stations

The Meteostat CLI provides several commands to browse and look up weather stations. You can search by location, country, name, or various station identifiers, and inspect the availability of data for any station.

## 🚀 Example

Look up the metadata for Frankfurt Airport:

```bash
meteo station 10637
```

Find stations in Germany:

```bash
meteo station --country DE
```

Search for stations by name:

```bash
meteo station --name "Frankfurt"
```

Find the nearest stations to a location:

```bash
meteo nearby 50.1109 8.6821
```

Check what data is available for a station:

```bash
meteo inventory 10637
```

## 👀 Learn More

<DocCardList />
