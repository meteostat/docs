---
title: Configuration | Python Library
sidebar_label: Configuration
sidebar_position: 9
---

# Configuration

The Meteostat Python library allows you to customize its behavior through a configuration system. You can set various options that affect how data is retrieved, cached, and processed. The configuration can be modified at runtime using the [`meteostat.config`](./api/meteostat.config.md) module.

## 🚀 Example {#example}

```python
import meteostat as ms

# Set the cache directory
ms.config.cache_directory = '/path/to/cache'

# Now all data will be cached in the specified directory
# Your code here
```

## 🔍 API {#api}

[`meteostat.config`](./api/meteostat.config.md)
