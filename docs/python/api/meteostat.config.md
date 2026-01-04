---
title: meteostat.config | API Reference | Python Library
sidebar_label: ms.config
sidebar_position: 21
---

# meteostat.config

Configure the behavior of the Meteostat Python library.

**Type:** _Singleton_

## Overview

The `meteostat.config` module allows you to customize how the Meteostat library retrieves, caches, and processes weather data. Configuration options can be modified at runtime and also set via environment variables.

## Properties

### Caching

| Property          | Description                                    | Type   | Default Value        |
| ----------------- | ---------------------------------------------- | ------ | -------------------- |
| `cache_enable`    | Enable or disable caching of data              | `bool` | `True`               |
| `cache_directory` | Directory path for cached data                 | `str`  | `~/.meteostat/cache` |
| `cache_ttl`       | Maximum time-to-live for cached data (seconds) | `int`  | `2592000` (30 days)  |
| `cache_autoclean` | Automatically clean up expired cache files     | `bool` | `True`               |

### Request Handling

| Property               | Description                              | Type                       | Default Value |
| ---------------------- | ---------------------------------------- | -------------------------- | ------------- |
| `block_large_requests` | Block large requests                     | `bool`                     | `True`        |
| `network_proxies`      | Dictionary of proxy servers for requests | `Optional[Dict[str, str]]` | `None`        |

### Weather Stations

| Property           | Description                                  | Type        | Default Value              |
| ------------------ | -------------------------------------------- | ----------- | -------------------------- |
| `stations_db_ttl`  | Time-to-live for stations database (seconds) | `int`       | `604800` (7 days)          |
| `stations_db_urls` | URLs to download stations database           | `List[str]` | See example                |
| `stations_db_file` | Path to local SQLite stations database       | `str`       | `~/.meteostat/stations.db` |

### Data Endpoints

| Property           | Description                   | Type  | Default Value                                               |
| ------------------ | ----------------------------- | ----- | ----------------------------------------------------------- |
| `hourly_endpoint`  | Endpoint URL for hourly data  | `str` | `https://data.meteostat.net/hourly/{year}/{station}.csv.gz` |
| `daily_endpoint`   | Endpoint URL for daily data   | `str` | `https://data.meteostat.net/daily/{year}/{station}.csv.gz`  |
| `monthly_endpoint` | Endpoint URL for monthly data | `str` | `https://data.meteostat.net/monthly/{station}.csv.gz`       |

### Data Providers

| Property                | Description                               | Type              | Default Value        |
| ----------------------- | ----------------------------------------- | ----------------- | -------------------- |
| `include_model_data`    | Include model data from default providers | `bool`            | `True`               |
| `lapse_rate_parameters` | Parameters for lapse rate adjustment      | `List[Parameter]` | `[TEMP, TMIN, TMAX]` |

### DWD Provider

| Property            | Description                                | Type                  | Default Value       |
| ------------------- | ------------------------------------------ | --------------------- | ------------------- |
| `dwd_ftp_host`      | FTP host for DWD data downloads            | `str`                 | `"opendata.dwd.de"` |
| `dwd_hourly_modes`  | DWD hourly data modes (recent/historical)  | `Optional[List[str]]` | `None` (both)       |
| `dwd_daily_modes`   | DWD daily data modes (recent/historical)   | `Optional[List[str]]` | `None` (both)       |
| `dwd_monthly_modes` | DWD monthly data modes (recent/historical) | `Optional[List[str]]` | `None` (both)       |

### Provider API Endpoints

| Property                     | Description                               | Type            | Default Value |
| ---------------------------- | ----------------------------------------- | --------------- | ------------- |
| `aviationweather_endpoint`   | NOAA Aviation Weather Center API endpoint | `str`           | See endpoint  |
| `aviationweather_user_agent` | User agent for Aviation Weather API       | `Optional[str]` | `None`        |
| `metno_forecast_endpoint`    | Met.no forecast API endpoint              | `str`           | See endpoint  |
| `metno_user_agent`           | User agent for Met.no APIs                | `Optional[str]` | `None`        |

## Methods

- [`get_env_name()`](./meteostat.config.get_env_name.md) - Get the full environment variable name for a configuration option
- [`load_env()`](./meteostat.config.load_env.md) - Parse environment variables and update the configuration

## Examples

### Configure Caching

```python
import meteostat as ms

# Disable caching
ms.config.cache_enable = False

# Or set a custom cache directory
ms.config.cache_directory = '/path/to/custom/cache'

# Set cache time-to-live to 1 day
ms.config.cache_ttl = 86400
```

### Use Network Proxy

```python
import meteostat as ms

# Configure proxy for network requests
ms.config.network_proxies = {
    'http': 'http://proxy.example.com:8080',
    'https': 'https://proxy.example.com:8080'
}
```

### Configure DWD Provider

```python
import meteostat as ms

# Only use recent DWD data
ms.config.dwd_hourly_modes = ['recent']
ms.config.dwd_daily_modes = ['recent']
```

### Met.no User Agent

```python
import meteostat as ms

# Set user agent for Met.no API (required by their terms of service)
ms.config.metno_user_agent = 'MyWeatherApp/1.0 (contact@example.com)'
```

## Environment Variables

Configuration options can be set via environment variables with the prefix `MS_`. For example:

```bash
export MS_CACHE_DIRECTORY=/custom/cache
export MS_CACHE_TTL=86400
export MS_BLOCK_LARGE_REQUESTS=false
```

Then load them in your code:

```python
import meteostat as ms

ms.config.load_env()
```
