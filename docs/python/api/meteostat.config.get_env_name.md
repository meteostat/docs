---
title: meteostat.config.get_env_name | API Reference | Python Library
sidebar_label: ms.config.get_env_name
sidebar_position: 26
---

# meteostat.config.get_env_name

Get the full name of an environment variable (including prefix) that can be used to set a configuration option.

- **Type:** _Method_ of [`meteostat.config`](./meteostat.config.md)
- **Source Code:** [GitHub](https://github.com/meteostat/meteostat/blob/main/meteostat/core/config.py#L70)

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
# highlight-next-line
env_var = ms.config.get_env_name('cache_directory')
print(env_var)  # Output: MS_CACHE_DIRECTORY
```
