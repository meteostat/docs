---
title: Point Data | JSON API
sidebar_label: Point Data
id: api-point-overview
slug: /api/point
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';

# Point Data

While weather stations provide data that was measured at a specific location, point data is available for any geographic location. This interface reduces complexity for API users as it does not require knowledge about the available weather stations. Instead, data can be retrieved directly.

## Remarks

Point data **only returns data if there is at least one nearby weather station** that reported observations in the desired period. The model's quality is varying based on the number and proximity of nearby weather stations.

## Data Model

Point data provides more complete time series, as observations of multiple stations are joined together. The data output is being interpolated based on the geographical distance between the different weather stations and the reference point of the query. Additionally, Meteostat adjusts measurements based on environmental circumstances and differences in altitude.

Meteostat projects the existing observations which are provided by weather stations around the world to the location specified in the request. For more precise model output, please provide the elevation of your location using the `alt` parameter.

## 👀 Learn More {#learn-more}

<DocCardList />
