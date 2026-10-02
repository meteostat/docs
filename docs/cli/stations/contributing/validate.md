---
title: Validate Stations | Meteostat CLI
sidebar_label: Validate Stations
sidebar_position: 5
---

# Validate Stations

Check station records in your [local repository](/cli/stations/contributing#repository-path) for errors. Validate selected stations by passing their IDs, or all stations when no IDs are given.

## Usage

```bash
meteo station validate [ID...] [OPTIONS]
```

## Examples

```bash
meteo station validate                        # Validate all stations
meteo station validate 10637                  # Validate one station
meteo station validate 10637 10638 10639      # Validate several stations
meteo station validate --changed              # Validate stations changed on your branch
```

## Checks

Each station is checked for the following:

- The file contains valid JSON and follows the [schema](https://raw.githubusercontent.com/meteostat/weather-stations/refs/heads/main/schema.json)
- The `id` matches the file name and is a valid Meteostat ID
- `country` is a valid ISO 3166-1 alpha-2 code and `region` a valid ISO 3166-2 subdivision of that country
- `latitude` is between -90 and 90, `longitude` between -180 and 180 and `elevation` is an integer
- `timezone` is a valid IANA time zone
- No other station uses any of the same identifiers (e.g. WMO or ICAO codes)
- Correct formatting (such as capitalized names, ordered identifiers)

## Output

Problems are listed per station. The command exits with code `0` if all stations are valid and `1` if at least one error was found, so it can be used in scripts and CI pipelines:

```text
$ meteo station validate 0A1B2 10637
✗ 0A1B2  location.latitude: 95.2 is out of range (-90 to 90)
✗ 0A1B2  timezone: "Europa/Frankfurt" is not a valid IANA time zone
✗ 0A1B2  name.en: "frankfurt downtown" should be capitalized
✓ 10637

1 of 2 stations invalid (3 errors)
```

## Options

| Option      | Short | Description                                                               |
| ----------- | ----- | ------------------------------------------------------------------------- |
| `--changed` |       | Only validate stations changed compared to `main` (requires Git)          |
| `--fix`     |       | Automatically fix issues where possible (e.g. formatting, mismatched IDs) |
| `--quiet`   | `-q`  | Only print stations with errors or warnings                               |
| `--repo`    |       | Path to the stations repository (overrides `stations_repo`)               |
