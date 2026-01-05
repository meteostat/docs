---
title: meteostat.config | API Reference | Python Library
sidebar_label: ms.config
sidebar_position: 24
---

# meteostat.config

Configure the behavior of the Meteostat Python library.

- **Type:** _Singleton_
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/core/config.py)

The `meteostat.config` module allows you to customize how the Meteostat library retrieves, caches, and processes weather data. Configuration options can be modified at runtime and also set via environment variables.

## Properties

For default values, please refer to the [source code](https://github.com/meteostat/meteostat/blob/main/meteostat/core/config.py#L95).

| Property                     | Description                                                                                                                                                                           | Type                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `cache_enable`               | Enable or disable caching of data. If `True`, caching is enabled (default).                                                                                                           | `bool`                                        |
| `cache_directory`            | Directory path for cached data.                                                                                                                                                       | `str`                                         |
| `cache_ttl`                  | Maximum time-to-live for cached data (seconds). After this period, cached data is considered expired. Most cached data defines its own TTL, which is usually shorter.                 | `int`                                         |
| `cache_autoclean`            | Automatically clean up expired cache files upon interaction with the cache (default `True`).                                                                                          | `bool`                                        |
| `block_large_requests`       | Whether to block large requests to prevent excessive data usage (default `True`). Requests are considered large based on the number of weather stations and period of time requested. | `bool`                                        |
| `network_proxies`            | Dictionary of proxy servers for requests. Please refer to the [Requests documentation](https://requests.readthedocs.io/en/latest/user/advanced/#proxies) for more information.        | `Dict[str, str]` or `None`                    |
| `stations_db_ttl`            | Time-to-live for stations database (seconds). Since the database file is relatively large (more than 20 MB), the TTL should be set to a longer duration to reduce frequent downloads. | `int`                                         |
| `stations_db_urls`           | URLs to download stations database. URLs are tried in order until a successful download occurs.                                                                                       | `List[str]`                                   |
| `stations_db_file`           | Path to local SQLite stations database.                                                                                                                                               | `str`                                         |
| `hourly_endpoint`            | Endpoint URL for [hourly data](../../data/timeseries/hourly.md).                                                                                                                      | `str`                                         |
| `daily_endpoint`             | Endpoint URL for [daily data](../../data/timeseries/daily.md).                                                                                                                        | `str`                                         |
| `monthly_endpoint`           | Endpoint URL for [monthly data](../../data/timeseries/monthly.md).                                                                                                                    | `str`                                         |
| `include_model_data`         | Whether to include model data (e.g. archived weather forecasts or analysis) when retrieving data from default providers (default `True`).                                             | `bool`                                        |
| `lapse_rate_parameters`      | Parameters for lapse rate adjustment. These parameters are adjusted based on altitude differences to improve temperature estimates during interpolation.                              | [`List[Parameter]`](./meteostat.Parameter.md) |
| `dwd_ftp_host`               | FTP host for DWD data downloads.                                                                                                                                                      | `str`                                         |
| `dwd_hourly_modes`           | DWD hourly data modes (recent/historical) to consider when retrieving data. If `None`, applicable modes are used automatically.                                                       | `List[str]` or `None`                         |
| `dwd_daily_modes`            | DWD daily data modes (recent/historical) to consider when retrieving data. If `None`, applicable modes are used automatically.                                                        | `List[str]` or `None`                         |
| `dwd_monthly_modes`          | DWD monthly data modes (recent/historical) to consider when retrieving data. If `None`, applicable modes are used automatically.                                                      | `List[str]` or `None`                         |
| `aviationweather_endpoint`   | NOAA Aviation Weather Center API endpoint.                                                                                                                                            | `str`                                         |
| `aviationweather_user_agent` | User agent for Aviation Weather API.                                                                                                                                                  | `str` or `None`                               |
| `metno_forecast_endpoint`    | Met.no forecast API endpoint.                                                                                                                                                         | `str`                                         |
| `metno_user_agent`           | User agent for Met.no APIs. Please refer to the [Met.no API documentation](https://api.met.no/doc/TermsOfService) for more information.                                               | `str` or `None`                               |

## Methods

- [`load_env`](./meteostat.config.load_env.md) - Parse environment variables and update the configuration
- [`get_env_name`](./meteostat.config.get_env_name.md) - Get the full environment variable name for a configuration option

## Examples

```python
import meteostat as ms

# Set the cache directory
ms.config.cache_directory = '/path/to/cache'

# Now all data will be cached in the specified directory
# Your code here
```
