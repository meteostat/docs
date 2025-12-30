---
title: Configuration | Python Library
sidebar_label: Configuration
sidebar_position: 12
---

# Configuration

The Meteostat Python library allows you to customize its behavior through a configuration system. You can set various options that affect how data is retrieved, cached, and processed. The configuration can be modified at runtime using the `meteostat.config` module.

## 🚀 Example {#example}

```python
import meteostat as ms

# Set the cache directory
ms.config.cache_directory = '/path/to/cache'

# Now all data will be cached in the specified directory
# Your code here
```

## 🔍 API {#api}

### Interface

```
meteostat.config
```

### Properties

#### `prefix` {#config-prefix}

The prefix (without the underscore) which is used when parsing environment variables.

##### Data Type {#config-prefix-type}

`str`

##### Default Value {#config-prefix-default}

`"MS"`

---

#### `block_large_requests` {#config-block-large-requests}

Block requests that are considered large (e.g., requesting data for a very long time period or many stations at once).

##### Data Type {#config-block-large-requests-type}

`bool`

##### Default Value {#config-block-large-requests-default}

`True`

---

#### `cache_enable` {#config-cache-enable}

Enable or disable caching of data.

##### Data Type {#config-cache-enable-type}

`bool`

##### Default Value {#config-cache-enable-default}

`True`

---

#### `cache_directory` {#config-cache-directory}

Directory path where cached data will be stored.

##### Data Type {#config-cache-directory-type}

`str`

##### Default Value {#config-cache-directory-default}

`~/.meteostat/cache`

---

#### `cache_ttl` {#config-cache-ttl}

The maximum time-to-live for cached data in seconds. After this period, cached data will be considered stale and will be refreshed upon the next request.

:::info
This is the global maximum TTL for all cached data. Most data retrieval methods have their own specific TTL settings that override this global value. The value is typically lowered for data that changes frequently, such as recent weather observations, and increased for static data, such as station metadata.
:::

##### Data Type {#config-cache-ttl-type}

`int`

##### Default Value {#config-cache-ttl-default}

`2592000` (30 days)

---

#### `cache_autoclean` {#config-cache-autoclean}

Automatically clean up expired cache files when accessing the cache.

##### Data Type {#config-cache-autoclean-type}

`bool`

##### Default Value {#config-cache-autoclean-default}

`True`

---

#### `network_proxies` {#config-network-proxies}

Dictionary of proxy servers to use for network requests.

##### Data Type {#config-network-proxies-type}

`Optional[Dict[str, str]]`

##### Default Value {#config-network-proxies-default}

`None`

---

#### `stations_db_ttl` {#config-stations-db-ttl}

The time-to-live for the local SQLite stations database in seconds. After this period, the database will be refreshed upon the next request.

##### Data Type {#config-stations-db-ttl-type}

`int`

##### Default Value {#config-stations-db-ttl-default}

`604800` (7 days)

---

#### `stations_db_urls` {#config-stations-db-urls}

URLs to download the local SQLite stations database from. Multiple URLs can be specified and will be tried in order if the download from the first URL fails.

##### Data Type {#config-stations-db-url-type}

`List[str]`

##### Default Value {#config-stations-db-url-default}

```
[
    "https://data.meteostat.net/stations.db",
    "https://raw.githubusercontent.com/meteostat/weather-stations/main/stations.db"
]
```

---

#### `stations_db_file` {#config-stations-db-file}

Path to the local SQLite stations database file.

##### Data Type {#config-stations-db-file-type}

`str`

##### Default Value {#config-stations-db-file-default}

`~/.meteostat/stations.db`

---

#### `lapse_rate_parameters` {#config-interpolation-lapse-rate-parameters}

List of temperature parameters that will have lapse rate adjustment applied during interpolation.

##### Data Type {#config-interpolation-lapse-rate-parameters-type}

`List[Parameter]`

##### Default Value {#config-interpolation-lapse-rate-parameters-default}

```
[
    Parameter.TEMP,
    Parameter.TMIN,
    Parameter.TMAX
]
```

---

#### `include_model_data` {#config-include-model-data}

Include model data (e.g. reanalysis or weather forecast models) when retrieving data from Meteostat's default data providers.

##### Data Type {#config-include-model-data-type}

`bool`

##### Default Value {#config-include-model-data-default}

`True`

---

#### `hourly_endpoint` {#config-hourly-endpoint}

The endpoint URL for retrieving hourly data from Meteostat's default data providers.

##### Data Type {#config-hourly-endpoint-type}

`str`

##### Default Value {#config-hourly-endpoint-default}

`https://data.meteostat.net/hourly/{year}/{station}.csv.gz`

---

#### `daily_endpoint` {#config-daily-endpoint}

The endpoint URL for retrieving daily data from Meteostat's default data providers.

##### Data Type {#config-daily-endpoint-type}

`str`

##### Default Value {#config-daily-endpoint-default}

`https://data.meteostat.net/daily/{year}/{station}.csv.gz`

---

#### `monthly_endpoint` {#config-monthly-endpoint}

The endpoint URL for retrieving monthly data from Meteostat's default data providers.

##### Data Type {#config-monthly-endpoint-type}

`str`

##### Default Value {#config-monthly-endpoint-default}

`https://data.meteostat.net/monthly/{station}.csv.gz`

---

#### `dwd_ftp_host` {#config-dwd-ftp-host}

The FTP host for DWD data downloads.

##### Data Type {#config-dwd-ftp-host-type}

`str`

##### Default Value {#config-dwd-ftp-host-default}

`"opendata.dwd.de"`

---

#### `dwd_hourly_modes` {#config-dwd-hourly-modes}

DWD differentiates between _recent_ and _historical_ hourly data. This setting specifies which mode(s) to use when retrieving hourly data from DWD.

##### Data Type {#config-dwd-hourly-modes-type}

`Optional[List[str]]`

##### Default Value {#config-dwd-hourly-modes-default}

`None` (both modes if applicable)

---

#### `dwd_daily_modes` {#config-dwd-daily-modes}

DWD differentiates between _recent_ and _historical_ daily data. This setting specifies which mode(s) to use when retrieving daily data from DWD.

##### Data Type {#config-dwd-daily-modes-type}

`Optional[List[str]]`

##### Default Value {#config-dwd-daily-modes-default}

`None` (both modes if applicable)

---

#### `dwd_monthly_modes` {#config-dwd-monthly-modes}

DWD differentiates between _recent_ and _historical_ monthly data. This setting specifies which mode(s) to use when retrieving monthly data from DWD.

##### Data Type {#config-dwd-monthly-modes-type}

`Optional[List[str]]`

##### Default Value {#config-dwd-monthly-modes-default}

`None` (both modes if applicable)

---

#### `aviationweather_endpoint` {#config-noaa-aviationweather-endpoint}

The endpoint URL for NOAA's Aviation Weather Center API.

##### Data Type {#config-noaa-aviationweather-endpoint-type}

`str`

##### Default Value {#config-noaa-aviationweather-endpoint-default}

```
(
    "https://aviationweather.gov/api/data/metar?"
    "ids={station}&format=raw&taf=false&hours=24"
)
```

---

#### `aviationweather_user_agent` {#config-noaa-aviationweather-user-agent}

The use agent to send when accessing data from NOAA's Aviation Weather Center API.

##### Data Type {#config-noaa-aviationweather-user-agent-type}

`Optional[str]`

##### Default Value {#config-noaa-aviationweather-user-agent-default}

`None`

---

#### `metno_forecast_endpoint` {#config-metno-forecast-endpoint}

The endpoint URL for Met.no's weather forecast API.

##### Data Type {#config-metno-forecast-endpoint-type}

`str`

##### Default Value {#config-metno-forecast-endpoint-default}

```
(
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?"
    "lat={latitude}&lon={longitude}&altitude={elevation}"
)
```

---

#### `metno_user_agent` {#config-metno-user-agent}

The use agent to send when accessing data from Met.no's APIs.

:::warning
You must send a user agent containing your contact information (e.g. E-Mail address) as per Met.no's terms of service.
:::

##### Data Type {#config-metno-user-agent-type}

`Optional[str]`

##### Default Value {#config-metno-user-agent-default}

`None`

### Methods

#### `get_env_name` {#method-get-env-name}

Get the full name of the environment variable (including prefix) which can be used to set this configuration key.

##### Attributes {#method-get-env-name-attributes}

| **Attribute** | **Description**                                               | **Type** | **Default** |
| :------------ | :------------------------------------------------------------ | :------- | :---------- |
| `key`         | The key of the [configuration option](#configuration-options) | `str`    |             |

##### Return Value {#method-get-env-name-return}

`str`

---

#### `load_env` {#method-load-env}

Parse environment variables and update the configuration accordingly.

##### Return Value {#method-get-env-name-return}

`None`
