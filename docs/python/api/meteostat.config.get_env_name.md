---
title: meteostat.config.get_env_name | API Reference | Python Library
sidebar_label: ms.config.get_env_name
sidebar_position: 23
---

# meteostat.config.get_env_name()

Get the full name of an environment variable (including prefix) that can be used to set a configuration option.

## Parameters

| Parameter | Description              | Type  |
| --------- | ------------------------ | ----- |
| `key`     | Configuration option key | `str` |

## Returns

`str`

The full environment variable name with the prefix included.

## Example

```python
import meteostat as ms

# Get environment variable name for cache directory
env_var = ms.config.get_env_name('cache_directory')
print(env_var)  # Output: MS_CACHE_DIRECTORY

# Get environment variable name for cache TTL
env_var = ms.config.get_env_name('cache_ttl')
print(env_var)  # Output: MS_CACHE_TTL

# Get environment variable name for DWD FTP host
env_var = ms.config.get_env_name('dwd_ftp_host')
print(env_var)  # Output: MS_DWD_FTP_HOST
```

## Use Cases

This method is useful for programmatically determining the environment variable name to set when configuring the library through environment variables:

```python
import meteostat as ms
import os

# Determine the environment variable name
env_name = ms.config.get_env_name('cache_directory')

# Set the environment variable
os.environ[env_name] = '/custom/cache/path'

# Load configuration from environment
ms.config.load_env()
```
