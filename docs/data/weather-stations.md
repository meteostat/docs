---
title: Weather Stations | Bulk Data
sidebar_label: Weather Stations
sidebar_position: 4
---

# Weather Stations

Meteostat operates an open directory of weather stations. The data is available on [GitHub](https://github.com/meteostat/weather-stations).

## 🗄️ Database {#database}

A SQLite database containing information about all weather stations, both metadata and inventory, is available for download:

```
https://data.meteostat.net/stations.db
```

### Tables

The database contains the following tables:

- `stations`: Metadata for all weather stations
- `names`: Names and alternative names for each weather station
- `identifiers`: External identifiers for each weather station
- `inventory`: Available data types and periods for each weather station

## 📦 JSON Files {#json-files}

Individual weather station metadata is also available as JSON files. The files are organized in a directory structure based on the station identifier:

```
https://data.meteostat.net/stations/{station}.json
```

Please replace `{station}` with the actual station identifier (e.g., `10637`).

## 🤝 Contributing {#contributing}

You can contribute to this collection by submitting a pull request on [GitHub](https://github.com/meteostat/weather-stations).
