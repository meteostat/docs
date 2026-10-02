---
title: Delete Station | Meteostat CLI
sidebar_label: Delete Station
sidebar_position: 4
---

# Delete Station

Remove a weather station from your [local repository](/cli/stations/contributing#repository-path).

## Usage

```bash
meteo station delete ID [OPTIONS]
```

The command shows the station's metadata and asks for confirmation before removing its JSON file.

## Examples

```bash
meteo station delete 0A1B2          # Delete a station (asks for confirmation)
meteo station delete 0A1B2 --yes    # Delete without confirmation
```

:::warning

Only delete stations which were added by mistake or are exact [duplicates](duplicates.md). If a station has simply stopped reporting, **do not delete it** so historical data remains available.

:::

## Options

| Option   | Short | Description                                                 |
| -------- | ----- | ----------------------------------------------------------- |
| `--yes`  | `-y`  | Skip the confirmation prompt                                |
| `--repo` |       | Path to the stations repository (overrides `stations_repo`) |
