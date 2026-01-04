---
title: meteostat.config.load_env | API Reference | Python Library
sidebar_label: ms.config.load_env
sidebar_position: 23
---

# meteostat.config.load_env()

Parse environment variables and update the configuration accordingly.

## Parameters

This method does not accept any parameters.

## Returns

`None`

## Example

```python
import meteostat as ms
import os

# Set environment variables
os.environ['MS_CACHE_DIRECTORY'] = '/custom/cache'
os.environ['MS_CACHE_TTL'] = '86400'
os.environ['MS_BLOCK_LARGE_REQUESTS'] = 'false'

# Load configuration from environment
# highlight-next-line
ms.config.load_env()

# Configuration is now updated from environment variables
print(ms.config.cache_directory)      # Output: /custom/cache
print(ms.config.cache_ttl)            # Output: 86400
print(ms.config.block_large_requests) # Output: False
```

## Environment Variable Format

Environment variables follow the pattern `MS_{OPTION_NAME}` where:

- `MS` is the default prefix (configurable via `ms.config.prefix`)
- `{OPTION_NAME}` is the configuration option name in uppercase with underscores

### Example Environment Variables

```bash
# Caching
export MS_CACHE_ENABLE=true
export MS_CACHE_DIRECTORY=/tmp/meteostat
export MS_CACHE_TTL=86400

# Request handling
export MS_BLOCK_LARGE_REQUESTS=false

# Weather stations database
export MS_STATIONS_DB_FILE=/custom/path/stations.db

# Data providers
export MS_INCLUDE_MODEL_DATA=true

# User agents
export MS_METNO_USER_AGENT="MyApp/1.0 (contact@example.com)"
```

## Loading from Environment at Startup

This is useful for configuring the library from environment variables when your application starts:

```python
import meteostat as ms

# Load all configuration from environment variables
ms.config.load_env()

# Now use the library with environment-configured settings
from datetime import date

ts = ms.daily('10637', date(2018, 1, 1), date(2018, 12, 31))
df = ts.fetch()
```

## Docker and Containerized Environments

This method is particularly useful in containerized environments where configuration is typically passed via environment variables:

```python
# Dockerfile
FROM python:3.9
RUN pip install meteostat
ENV MS_CACHE_DIRECTORY=/app/cache
ENV MS_METNO_USER_AGENT=MyApp/1.0

# Python application
import meteostat as ms
ms.config.load_env()  # Load from Docker environment variables
```
