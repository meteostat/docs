---
title: meteostat.config.load_env | API Reference | Python Library
sidebar_label: ms.config.load_env
sidebar_position: 25
---

# meteostat.config.load_env

Parse environment variables and update the configuration accordingly.

- **Type:** _Method_ of [`meteostat.config`](./meteostat.config.md)
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/core/config.py#L80)

## Parameters

This method does not accept any parameters.

## Returns

`None`

## Example

```python
import os
import meteostat as ms

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
