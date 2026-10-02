---
title: Contributing | Meteostat CLI
sidebar_label: Overview
id: cli-contributing-overview
slug: /cli/stations/contributing
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Contributing

Meteostat maintains an [open directory of weather stations](/data/weather-stations) on [GitHub](https://github.com/meteostat/weather-stations). The Meteostat CLI ships a set of contributor commands which help you add, edit and check station records in a local copy of this repository before you submit a pull request.

All contributor commands live directly under `meteo station`:

```text
meteo station
├── add
├── edit <id>
├── delete <id>
├── validate [<id>...]
├── duplicates
└── build
```

:::info

These commands only modify files in your local clone of the stations repository. Nothing is published until your changes are merged into the `main` branch of [meteostat/weather-stations](https://github.com/meteostat/weather-stations).

:::

## 📂 Setup {#setup}

First, fork the [weather stations repository](https://github.com/meteostat/weather-stations) on GitHub and clone your fork:

```bash
git clone https://github.com/<your-username>/weather-stations.git
```

The repository contains one JSON file per weather station in the `stations` directory. Each file is named after the station's Meteostat ID (e.g. `stations/10637.json`).

### Repository Path {#repository-path}

The contributor commands need to know where your local clone is located. Set the path once using the `stations_repo` configuration key:

```bash
meteo config stations_repo ~/code/weather-stations
```

The path must point to the root of the repository, i.e. the directory which contains the `stations` folder. You can check the current value at any time:

```bash
meteo config stations_repo
```

To use a different clone for a single command, pass the `--repo` option. It takes precedence over the configured path:

```bash
meteo station validate --repo ./weather-stations
```

If neither `--repo` nor `stations_repo` is set, the CLI uses the current working directory if it looks like a stations repository and exits with an error otherwise.

## 🔄 Workflow {#workflow}

A typical contribution looks like this:

```bash
# 1. Create a branch in your local clone
git -C ~/code/weather-stations checkout -b add-my-station

# 2. Add or edit station records
meteo station add
meteo station edit 10637

# 3. Check your changes
meteo station validate
meteo station duplicates

# 4. Commit, push and open a pull request
git -C ~/code/weather-stations commit -am "Add my station"
git -C ~/code/weather-stations push -u origin add-my-station
```

Please make sure `meteo station validate` passes before opening a pull request. The same checks are run automatically on every pull request.

## ✍️ Guidelines {#guidelines}

- Names of weather stations are capitalized.
- Use short and descriptive names for a weather station.
- Refer to aerodromes which handle air cargo or passengers as _airports_ and use the term _airfield_ if they don't.
- Only include identifiers which are actually set. Don't add empty values.
- Prefer [`edit`](edit.md) over [`delete`](delete.md) + [`add`](add.md) so the Meteostat ID of a station stays stable.

## 👀 Learn More

<DocCardList />
