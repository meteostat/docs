---
sidebar_position: 4
---

# Data Quality

When working with weather and climate data, it is important to understand the quality standards used by providers and station operators. Some processes are standardized, while others vary by organization.

## Instruments & measurements

Meteostat aggregates data from many providers and does not operate weather stations. Consequently, we cannot always determine which instruments or local QA procedures were used for a given dataset. Think of Meteostat as an aggregation platform for meteorological observations: we collect and normalize data published by national weather services and other sources, but the original providers are ultimately responsible for instrumentation and local quality control.

All stations listed in the Meteostat directory adhere to international WMO standards when those standards apply.

## Observations vs model data

By default, Meteostat returns a combination of real observations and model-derived data. Models provide spatially complete coverage and near-real-time estimates, but they cannot replace on-site observations for certain events (for example, localized precipitation or thunderstorms). If you require observation-only data, you can opt out of model data using the settings described in each interface's documentation.

## Observation quality

We prioritize official observations from national weather services when available. If official data is not available, we use international historical databases, synoptic observations, and METAR reports. Model data is used only when no observation sources can be found.

Different sources may use different formats, units, and rounding conventions. For example, METAR measurements are often reported as rounded integers; the same raw observation may therefore produce slightly different numerical results across datasets.

## Aggregation methods

Aggregations (daily averages, monthly totals, etc.) depend on the underlying observation frequency and the provider's processing method. Some providers compute daily averages from hourly observations, while others use higher-frequency series (e.g. 5-minute data). For Meteostat's own daily aggregations we use 24 hourly data points.

If your application requires a specific aggregation method, verify the aggregation rules of your chosen data source or perform the aggregation locally using the raw observations.

## Summary

Most Meteostat data originates from official weather services and can be considered reliable for general use. Small inconsistencies are possible and usually do not affect typical applications. For high-precision scientific work, perform additional quality checks and validations on the raw observations.

You can help improve Meteostat's data quality by contributing corrections or metadata via the project repositories.
