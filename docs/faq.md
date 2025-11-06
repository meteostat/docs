---
sidebar_position: 9
---

# FAQ

Some of the most frequent questions are answered below.

## Data

<details>
<summary>Why do some time series contain future data?</summary>

Meteostat substitutes missing observations with model data, by default. Model data also includes weather forecasts to improve the user experience when working with real-time data. You can always opt-out of model data.
</details>

<details>
<summary>Why do hourly and daily data not always match?</summary>

Meteostat provides weather observations in three different frequencies: _hourly_, _daily_ and _monthly_. Let's say you want to know how the weather was like at a particular day in the past. You can either aggregate a day's hourly records or use the daily record right away. It is probably confusing that the results do not always match. That is because daily data is not always calculated the same way. For example, the daily temperature average can be calculated from 24 hourly or 240 10-minutely observations. The results might be a little different. [Click here](/quality#aggregation-methods) to learn more about how data is aggregated.
</details>

<details>
<summary>How accurate is Meteostat data?</summary>

As Meteostat does not operate weather stations itself, it is hard to give a definitive answer. We use real observation data whenever possible. Therefore, Meteostat data should be very accurate in most cases. Keep in mind that model data, which is used as a substitute for missing observations by default, can be inaccurate in certain situations (e.g. local precipitation events). [Click here](/quality) to learn more about our data quality.
</details>

## Meteostat

<details>
<summary>Is Meteostat a public or governmental service?</summary>

Meteostat is not a public or governmental service. Furthermore, we are not associated with _Meteosat_. We collect data from national weather service like NOAA and DWD. However, Meteostat is an independent initiative which relies on donations, sponsoring and other sources of income.
</details>

<details>
<summary>Under which license is Meteostat data distributed?</summary>

Meteostat data is distributed under the terms of the CC BY-NC 4.0 license. [Click here](/terms) for details.
</details>

<details>
<summary>Can I support Meteostat?</summary>

We are very thankful for all kinds of support. Learn more about [contributing](/contribute) and [donating](/donate) to Meteostat.
</details>
