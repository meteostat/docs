---
title: Configuration | Meteostat CLI
sidebar_label: Configuration
sidebar_position: 4
---

# Configuration

Manage the Meteostat CLI configuration. Settings are stored in a `cli.yml` file in the platform-specific app directory (e.g. `~/.config/meteostat/cli.yml` on Linux).

## Usage

```bash
meteo config [KEY VALUE] [OPTIONS]
```

## Examples

```bash
meteo config --list                         # Show all current settings
meteo config cache_enable false             # Disable caching
meteo config interpolation_radius 25000     # Set interpolation radius to 25 km
meteo config stations_repo ~/weather-stations  # Path to local stations repository
```

The `stations_repo` key is used by the [contributor commands](/cli/stations/contributing#repository-path).

## Options

| Option   | Description                |
| -------- | -------------------------- |
| `--list` | Print all current settings |
