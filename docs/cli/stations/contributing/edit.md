---
title: Edit Station | Meteostat CLI
sidebar_label: Edit Station
sidebar_position: 3
---

# Edit Station

Edit an existing weather station in your [local repository](/cli/stations/contributing#repository-path).

## Usage

```bash
meteo station edit ID [OPTIONS]
```

Without options, the station's JSON file is opened in your default editor (`$VISUAL` or `$EDITOR`). Once you save and close the file, the station is [validated](validate.md). If validation fails, you can re-open the editor or discard your changes.

To change individual properties without an editor, use `--set` and `--unset` with dot notation.

## Examples

```bash
meteo station edit 10637                                  # Open in editor
meteo station edit 10637 --set name.en="Frankfurt Airport" # Update a single property
meteo station edit 10637 --set identifiers.icao=EDDF \
  --set location.elevation=111                            # Update multiple properties
meteo station edit 10637 --unset identifiers.iata         # Remove a property
```

## Options

| Option      | Short | Description                                                     |
| ----------- | ----- | --------------------------------------------------------------- |
| `--set`     | `-s`  | Set a property using `KEY=VALUE` with dot notation (repeatable) |
| `--unset`   | `-u`  | Remove an optional property (repeatable)                        |
| `--editor`  |       | Editor command to use instead of `$VISUAL`/`$EDITOR`            |
| `--dry-run` |       | Print the resulting JSON without writing the file               |
| `--repo`    |       | Path to the stations repository (overrides `stations_repo`)     |

:::info

The Meteostat ID (`id`) cannot be changed, since it is used to reference the station across all Meteostat products.

:::
