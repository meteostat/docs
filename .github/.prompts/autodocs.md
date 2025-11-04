---
mode: 'agent'
description: 'Generate documentation automatically from Meteostat Python package.'
---

# Auto-Generate Documentation

Your objective is the generation of documentation for the Meteostat Python package.

1. Clone the [project's repository](https://github.com/meteostat/meteostat-python).
2. Checkout the `next` branch.
3. Generate documentation for all properties listed under `__all__` in the package's `__init__.py` file.
4. Generate documentation for all classes which are returned from properties listed under `__all__`. E.g. `hourly` returns a `TimeSeries`. Therefore, a documentation file for the `TimeSeries` class should be generated, too.

Place the documentation in this repository under `docs/python/api`. Generate one file per feature/class.

Use a technical documentation style and make use of doc strings which are already part of the code.
