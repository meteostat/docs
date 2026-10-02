---
title: Add Station | Meteostat CLI
sidebar_label: Add Station
sidebar_position: 2
---

# Add Station

Add a new weather station to the directory. The command creates a new JSON file in the `stations` directory of your [local repository](/cli/stations/contributing#repository-path) and assigns a unique Meteostat ID automatically.

## Usage

```bash
meteo station add [OPTIONS]
```

When called without options, the command runs interactively and prompts for all required properties. Any property passed as an option is not prompted for.

## Examples

```bash
meteo station add                                   # Interactive mode
meteo station add \
  --name "Frankfurt Airport" \
  --country DE \
  --region HE \
  --lat 50.05 --lon 8.6 --elevation 111 \
  --timezone Europe/Berlin \
  --id wmo=10637 --id icao=EDDF                     # Non-interactive
meteo station add --name de="Frankfurt Flughafen" \
  --name en="Frankfurt Airport" ...                 # Multiple languages
```

Identifiers are passed as `KEY=VALUE` pairs and stored in the station's `identifiers` object. Any key is accepted, so you can add identifiers for national networks or other data sources in addition to common ones like `wmo`, `icao`, `iata`, `national` and `ghcn`.

Before the file is written, the new station is [validated](validate.md) and checked against existing stations for [potential duplicates](duplicates.md). If a likely duplicate is found, you are asked to confirm.

On success, the command prints the ID and path of the new station file:

```text
Created station 0A1B2 (stations/0A1B2.json)
```

## Options

| Option        | Short | Description                                                                                                   |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------- |
| `--name`      | `-n`  | Station name. Use `LANG=NAME` to set a localized name (repeatable). A plain value is stored as English (`en`) |
| `--country`   | `-c`  | ISO 3166-1 alpha-2 country code                                                                               |
| `--region`    |       | ISO 3166-2 state or region code                                                                               |
| `--lat`       |       | Latitude in decimal degrees                                                                                   |
| `--lon`       |       | Longitude in decimal degrees                                                                                  |
| `--elevation` | `-e`  | Elevation in meters                                                                                           |
| `--timezone`  | `-t`  | IANA time zone (e.g. `Europe/Berlin`)                                                                         |
| `--id`        | `-i`  | Station identifier as `KEY=VALUE` (e.g. `wmo=10637`, `icao=EDDF`). Any key is accepted (repeatable)           |
| `--yes`       | `-y`  | Don't prompt; fail if a required property is missing and skip duplicate confirmation                          |
| `--dry-run`   |       | Print the resulting JSON without writing any file                                                             |
| `--repo`      |       | Path to the stations repository (overrides `stations_repo`)                                                   |
