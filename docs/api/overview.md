---
title: Overview
id: api-overview
slug: /api
sidebar_position: 1
---

# JSON API

The Meteostat JSON API provides simple access to a large archive of historical weather and climate data. The records are queried by weather station or geo location and can be filtered by specifying a date range and other optional parameters.

Meteostat uses [RapidAPI](https://rapidapi.com/meteostat/api/meteostat/), an API marketplace which makes it easy for developers to use thousands of APIs through a common platform.

This is the base URL for all endpoints:

```
https://meteostat.p.rapidapi.com
```

Access to the API requires users to send their RapidAPI key along with every request. All API endpoints return a JSON object that contains two properties: `meta` and `data`. The `meta` object provides general information about the data output and debugging information. The `data` property is either an object or an array that contains the actual data output.

All API endpoints are accessible using HTTP Get requests. For debugging, please utilize the HTTP status code of the response.

## Sign Up

Please sign up on [RapidAPI](https://rapidapi.com/signup) to get an API key. Before you can call the Meteostat JSON API, you'll need to subscribe to one of [our plans](https://rapidapi.com/meteostat/api/meteostat/pricing). But don't worry - you'll get 500 monthly calls for free.

## Quick Start

Once you have your API key, head over to your terminal, replace the `{key}` parameter with your personal API key and execute the following command:

```sh
curl --request GET \
	--url 'https://meteostat.p.rapidapi.com/stations/meta?id=10637' \
	--header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
	--header 'x-rapidapi-key: {key}'
```

You should see meta information for the weather station _Frankfurt Airport_ in JSON format.

## Plans & Quota

Meteostat uses a freemium model for its API. We offer a free plan with a hard limit of 500 requests per month. If you need a higher quota, please choose any of our [paid plans](https://rapidapi.com/meteostat/api/meteostat/pricing).

## Authentication

When retrieving data from Meteostat API endpoints make sure to send the `X-RapidAPI-Key` header along with every request. RapidAPI also supports passing the API Key via query parameter. You can do this by including the `rapidapi-key` parameter in your request.

## Status Codes

All Meteostat API endpoints return one of the following status codes. You can utilize them for debugging.

| **Code** | **Description**                                              |
| :------- | :----------------------------------------------------------- |
| 200      | _Success_: Alls is fine                                      |
| 400      | _Bad Request_: Please check the query parameters             |
| 401      | _Unauthorized_: Make sure to send a valid RapidAPI key       |
| 403      | _Forbidden_: You're not allowed to access this endpoint      |
| 404      | _Not Found_: This endpoint doesn't exist                     |
| 429      | _Too Many Requests_: You've exceeded the quota               |
| 503      | _Service Temporarily Unavailable_: The API is currently down |
