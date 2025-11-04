---
sidebar_position: 7
---

# Contribute

Meteostat is an open initiative which does not operate on a primarily commercial basis. We believe that weather and climate data should be freely available to everyone. Therefore, Meteostat operates multiple interfaces which provide free access to meteorological data. Operating, maintaining and growing the project is only possible with the help of people like you.

This section contains information about how to contribute to Meteostat. It also defines general principles and concepts which serve as a foundation for the project and its architecture.

If you want to support Meteostat on its mission of making weather and climate data available to everyone, you have multiple options to choose from:

* Contribute to our open source repositories on [GitHub](https://github.com/meteostat)
* Spread the news about Meteostat on social media or your website
* Make a [donation](/contributing.html#donations)

Meteostat's goal is to publish the majority of its coding under the MIT license on [GitHub](https://github.com/meteostat). Feel free to open an issue if you run into a bug or create a pull request for new features and fixes.

## Weather Stations

Meteostat provides an open directory of weather stations everyone can edit, share and build upon. The list of weather stations is available on [GitHub](https://github.com/meteostat/weather-stations).

If you want to add a missing station, please create a new file in the `stations` folder according to the template described [here](https://github.com/meteostat/weather-stations#properties). If possible, please to also add the weather station to the CSV files in [this directory](https://github.com/meteostat/routines/tree/master/resources). Adding the corresponding identifier to the CSV files will make sure all available data is collected properly.

### Joining Stations

It can happen that the same weather station appears twice under different IDs. In this case, all duplicates should be unified in a single JSON file under a common identifier.

1. Pick one of the existing JSON files.
2. Add all identifiers and details available for this weather station. In case of inconsistencies, do some research or open an issue.
3. Delete all duplicates.
5. Create a pull request.

The following steps require access to the Meteostat database and can only be executed by admins:

::: details Show steps for admins

5. Merge the PR into `master`.
6. Run the station import on Banff.
7. Delete corresponding entries in the `stations_inventory` table
8. Clean the Bulk server by running the following Shell command inside the `bulk` directory:

```sh
find . -name '$duplicate.csv.gz' -delete
```

You'll have to replace `$duplicate` with the ID of a/the duplicate weather station. Repeat this for all duplicates.

10. Run the following SQL script for all duplicates:

Replace `$target` with the unique ID of the unified weather station and `$origin` with the ID of the duplicate. Please note that the table prefixes are required to avoid ambiguity in MariaDB. It might take a few minutes for the script to complete.

This will be moved to our data management repository in the future.

```sql
-- daily_ghcn
INSERT INTO
  `daily_ghcn` (
    `daily_ghcn`.`station`,
    `daily_ghcn`.`date`,
    `daily_ghcn`.`tavg`,
    `daily_ghcn`.`tmin`,
    `daily_ghcn`.`tmax`,
    `daily_ghcn`.`prcp`,
    `daily_ghcn`.`wdir`,
    `daily_ghcn`.`wspd`,
    `daily_ghcn`.`wpgt`,
    `daily_ghcn`.`snow`,
    `daily_ghcn`.`tsun`
  )
SELECT
  '$target',
  `d`.`date`,
  `d`.`tavg`,
  `d`.`tmin`,
  `d`.`tmax`,
  `d`.`prcp`,
  `d`.`wdir`,
  `d`.`wspd`,
  `d`.`wpgt`,
  `d`.`snow`,
  `d`.`tsun`
FROM
  `daily_ghcn` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `tavg` = COALESCE(`daily_ghcn`.`tavg`, VALUES(`daily_ghcn`.`tavg`)),
  `tmin` = COALESCE(`daily_ghcn`.`tmin`, VALUES(`daily_ghcn`.`tmin`)),
  `tmax` = COALESCE(`daily_ghcn`.`tmax`, VALUES(`daily_ghcn`.`tmax`)),
  `prcp` = COALESCE(`daily_ghcn`.`prcp`, VALUES(`daily_ghcn`.`prcp`)),
  `wdir` = COALESCE(`daily_ghcn`.`wdir`, VALUES(`daily_ghcn`.`wdir`)),
  `wspd` = COALESCE(`daily_ghcn`.`wspd`, VALUES(`daily_ghcn`.`wspd`)),
  `wpgt` = COALESCE(`daily_ghcn`.`wpgt`, VALUES(`daily_ghcn`.`wpgt`)),
  `snow` = COALESCE(`daily_ghcn`.`snow`, VALUES(`daily_ghcn`.`snow`)),
  `tsun` = COALESCE(`daily_ghcn`.`tsun`, VALUES(`daily_ghcn`.`tsun`));

DELETE FROM `daily_ghcn` WHERE `station` = '$origin';

  -- daily_national
  INSERT INTO
    `daily_national` (
      `daily_national`.`station`,
      `daily_national`.`date`,
      `daily_national`.`tavg`,
      `daily_national`.`tmin`,
      `daily_national`.`tmax`,
      `daily_national`.`prcp`,
      `daily_national`.`wspd`,
      `daily_national`.`wpgt`,
      `daily_national`.`pres`,
      `daily_national`.`rhum`,
      `daily_national`.`snow`,
      `daily_national`.`tsun`
    )
  SELECT
    '$target',
    `d`.`date`,
    `d`.`tavg`,
    `d`.`tmin`,
    `d`.`tmax`,
    `d`.`prcp`,
    `d`.`wspd`,
    `d`.`wpgt`,
    `d`.`pres`,
    `d`.`rhum`,
    `d`.`snow`,
    `d`.`tsun`
  FROM
    `daily_national` AS `d`
  WHERE
    `station` = '$origin'
  ON DUPLICATE KEY UPDATE
    `tavg` = COALESCE(`daily_national`.`tavg`, VALUES(`daily_national`.`tavg`)),
    `tmin` = COALESCE(`daily_national`.`tmin`, VALUES(`daily_national`.`tmin`)),
    `tmax` = COALESCE(`daily_national`.`tmax`, VALUES(`daily_national`.`tmax`)),
    `prcp` = COALESCE(`daily_national`.`prcp`, VALUES(`daily_national`.`prcp`)),
    `wspd` = COALESCE(`daily_national`.`wspd`, VALUES(`daily_national`.`wspd`)),
    `wpgt` = COALESCE(`daily_national`.`wpgt`, VALUES(`daily_national`.`wpgt`)),
    `pres` = COALESCE(`daily_national`.`pres`, VALUES(`daily_national`.`pres`)),
    `rhum` = COALESCE(`daily_national`.`rhum`, VALUES(`daily_national`.`rhum`)),
    `snow` = COALESCE(`daily_national`.`snow`, VALUES(`daily_national`.`snow`)),
    `tsun` = COALESCE(`daily_national`.`tsun`, VALUES(`daily_national`.`tsun`));

DELETE FROM `daily_national` WHERE `station` = '$origin';

-- hourly_isd
INSERT INTO
  `hourly_isd` (
    `hourly_isd`.`station`,
    `hourly_isd`.`time`,
    `hourly_isd`.`temp`,
    `hourly_isd`.`prcp`,
    `hourly_isd`.`wspd`,
    `hourly_isd`.`wdir`,
    `hourly_isd`.`pres`,
    `hourly_isd`.`rhum`
  )
SELECT
  '$target',
  `d`.`time`,
  `d`.`temp`,
  `d`.`prcp`,
  `d`.`wspd`,
  `d`.`wdir`,
  `d`.`pres`,
  `d`.`rhum`
FROM
  `hourly_isd` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `temp` = COALESCE(`hourly_isd`.`temp`, VALUES(`hourly_isd`.`temp`)),
  `prcp` = COALESCE(`hourly_isd`.`prcp`, VALUES(`hourly_isd`.`prcp`)),
  `wspd` = COALESCE(`hourly_isd`.`wspd`, VALUES(`hourly_isd`.`wspd`)),
  `wdir` = COALESCE(`hourly_isd`.`wdir`, VALUES(`hourly_isd`.`wdir`)),
  `pres` = COALESCE(`hourly_isd`.`pres`, VALUES(`hourly_isd`.`pres`)),
  `rhum` = COALESCE(`hourly_isd`.`rhum`, VALUES(`hourly_isd`.`rhum`));

DELETE FROM `hourly_isd` WHERE `station` = '$origin';

-- hourly_metar
INSERT INTO
  `hourly_metar` (
    `hourly_metar`.`station`,
    `hourly_metar`.`time`,
    `hourly_metar`.`temp`,
    `hourly_metar`.`wdir`,
    `hourly_metar`.`wspd`,
    `hourly_metar`.`pres`,
    `hourly_metar`.`rhum`,
    `hourly_metar`.`coco`
  )
SELECT
  '$target',
  `d`.`time`,
  `d`.`temp`,
  `d`.`wdir`,
  `d`.`wspd`,
  `d`.`pres`,
  `d`.`rhum`,
  `d`.`coco`
FROM
  `hourly_metar` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `temp` = COALESCE(`hourly_metar`.`temp`, VALUES(`hourly_metar`.`temp`)),
  `wdir` = COALESCE(`hourly_metar`.`wdir`, VALUES(`hourly_metar`.`wdir`)),
  `wspd` = COALESCE(`hourly_metar`.`wspd`, VALUES(`hourly_metar`.`wspd`)),
  `pres` = COALESCE(`hourly_metar`.`pres`, VALUES(`hourly_metar`.`pres`)),
  `rhum` = COALESCE(`hourly_metar`.`rhum`, VALUES(`hourly_metar`.`rhum`)),
  `coco` = COALESCE(`hourly_metar`.`coco`, VALUES(`hourly_metar`.`coco`));

DELETE FROM `hourly_metar` WHERE `station` = '$origin';

-- hourly_model
INSERT INTO
  `hourly_model` (
    `hourly_model`.`station`,
    `hourly_model`.`time`,
    `hourly_model`.`temp`,
    `hourly_model`.`prcp`,
    `hourly_model`.`wspd`,
    `hourly_model`.`wpgt`,
    `hourly_model`.`wdir`,
    `hourly_model`.`coco`,
    `hourly_model`.`pres`,
    `hourly_model`.`rhum`
  )
SELECT
  '$target',
  `d`.`time`,
  `d`.`temp`,
  `d`.`prcp`,
  `d`.`wspd`,
  `d`.`wpgt`,
  `d`.`wdir`,
  `d`.`coco`,
  `d`.`pres`,
  `d`.`rhum`
FROM
  `hourly_model` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `temp` = COALESCE(`hourly_model`.`temp`, VALUES(`hourly_model`.`temp`)),
  `prcp` = COALESCE(`hourly_model`.`prcp`, VALUES(`hourly_model`.`prcp`)),
  `wspd` = COALESCE(`hourly_model`.`wspd`, VALUES(`hourly_model`.`wspd`)),
  `wpgt` = COALESCE(`hourly_model`.`wpgt`, VALUES(`hourly_model`.`wpgt`)),
  `wdir` = COALESCE(`hourly_model`.`wdir`, VALUES(`hourly_model`.`wdir`)),
  `coco` = COALESCE(`hourly_model`.`coco`, VALUES(`hourly_model`.`coco`)),
  `pres` = COALESCE(`hourly_model`.`pres`, VALUES(`hourly_model`.`pres`)),
  `rhum` = COALESCE(`hourly_model`.`rhum`, VALUES(`hourly_model`.`rhum`));

DELETE FROM `hourly_model` WHERE `station` = '$origin';

-- hourly_national
INSERT INTO
  `hourly_national` (
    `hourly_national`.`station`,
    `hourly_national`.`time`,
    `hourly_national`.`temp`,
    `hourly_national`.`prcp`,
    `hourly_national`.`wspd`,
    `hourly_national`.`wdir`,
    `hourly_national`.`pres`,
    `hourly_national`.`rhum`,
    `hourly_national`.`tsun`
  )
SELECT
  '$target',
  `d`.`time`,
  `d`.`temp`,
  `d`.`prcp`,
  `d`.`wspd`,
  `d`.`wdir`,
  `d`.`pres`,
  `d`.`rhum`,
  `d`.`tsun`
FROM
  `hourly_national` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `temp` = COALESCE(`hourly_national`.`temp`, VALUES(`hourly_national`.`temp`)),
  `prcp` = COALESCE(`hourly_national`.`prcp`, VALUES(`hourly_national`.`prcp`)),
  `wspd` = COALESCE(`hourly_national`.`wspd`, VALUES(`hourly_national`.`wspd`)),
  `wdir` = COALESCE(`hourly_national`.`wdir`, VALUES(`hourly_national`.`wdir`)),
  `pres` = COALESCE(`hourly_national`.`pres`, VALUES(`hourly_national`.`pres`)),
  `rhum` = COALESCE(`hourly_national`.`rhum`, VALUES(`hourly_national`.`rhum`)),
  `tsun` = COALESCE(`hourly_national`.`tsun`, VALUES(`hourly_national`.`tsun`));

DELETE FROM `hourly_national` WHERE `station` = '$origin';

-- hourly_synop
INSERT INTO
  `hourly_synop` (
    `hourly_synop`.`station`,
    `hourly_synop`.`time`,
    `hourly_synop`.`temp`,
    `hourly_synop`.`prcp`,
    `hourly_synop`.`wspd`,
    `hourly_synop`.`wpgt`,
    `hourly_synop`.`wdir`,
    `hourly_synop`.`rhum`,
    `hourly_synop`.`pres`,
    `hourly_synop`.`snow`,
    `hourly_synop`.`tsun`,
    `hourly_synop`.`coco`
  )
SELECT
  '$target',
  `d`.`time`,
  `d`.`temp`,
  `d`.`prcp`,
  `d`.`wspd`,
  `d`.`wpgt`,
  `d`.`wdir`,
  `d`.`rhum`,
  `d`.`pres`,
  `d`.`snow`,
  `d`.`tsun`,
  `d`.`coco`
FROM
  `hourly_synop` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `temp` = COALESCE(`hourly_synop`.`temp`, VALUES(`hourly_synop`.`temp`)),
  `prcp` = COALESCE(`hourly_synop`.`prcp`, VALUES(`hourly_synop`.`prcp`)),
  `wspd` = COALESCE(`hourly_synop`.`wspd`, VALUES(`hourly_synop`.`wspd`)),
  `wpgt` = COALESCE(`hourly_synop`.`wpgt`, VALUES(`hourly_synop`.`wpgt`)),
  `wdir` = COALESCE(`hourly_synop`.`wdir`, VALUES(`hourly_synop`.`wdir`)),
  `rhum` = COALESCE(`hourly_synop`.`rhum`, VALUES(`hourly_synop`.`rhum`)),
  `pres` = COALESCE(`hourly_synop`.`pres`, VALUES(`hourly_synop`.`pres`)),
  `snow` = COALESCE(`hourly_synop`.`snow`, VALUES(`hourly_synop`.`snow`)),
  `tsun` = COALESCE(`hourly_synop`.`tsun`, VALUES(`hourly_synop`.`tsun`)),
  `coco` = COALESCE(`hourly_synop`.`coco`, VALUES(`hourly_synop`.`coco`));

DELETE FROM `hourly_synop` WHERE `station` = '$origin';

-- monthly_global
INSERT INTO
  `monthly_global` (
    `monthly_global`.`station`,
    `monthly_global`.`year`,
    `monthly_global`.`month`,
    `monthly_global`.`tavg`,
    `monthly_global`.`tmin`,
    `monthly_global`.`tmax`,
    `monthly_global`.`prcp`,
    `monthly_global`.`pres`,
    `monthly_global`.`tsun`
  )
SELECT
  '$target',
  `d`.`year`,
  `d`.`month`,
  `d`.`tavg`,
  `d`.`tmin`,
  `d`.`tmax`,
  `d`.`prcp`,
  `d`.`pres`,
  `d`.`tsun`
FROM
  `monthly_global` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `tavg` = COALESCE(`monthly_global`.`tavg`, VALUES(`monthly_global`.`tavg`)),
  `tmin` = COALESCE(`monthly_global`.`tmin`, VALUES(`monthly_global`.`tmin`)),
  `tmax` = COALESCE(`monthly_global`.`tmax`, VALUES(`monthly_global`.`tmax`)),
  `prcp` = COALESCE(`monthly_global`.`prcp`, VALUES(`monthly_global`.`prcp`)),
  `pres` = COALESCE(`monthly_global`.`pres`, VALUES(`monthly_global`.`pres`)),
  `tsun` = COALESCE(`monthly_global`.`tsun`, VALUES(`monthly_global`.`tsun`));


DELETE FROM `monthly_global` WHERE `station` = '$origin';

-- normals_global
INSERT INTO
  `normals_global` (
    `normals_global`.`station`,
    `normals_global`.`start`,
    `normals_global`.`end`,
    `normals_global`.`month`,
    `normals_global`.`tavg`,
    `normals_global`.`tmin`,
    `normals_global`.`tmax`,
    `normals_global`.`prcp`,
    `normals_global`.`tsun`,
    `normals_global`.`pres`
  )
SELECT
  '$target',
  `d`.`start`,
  `d`.`end`,
  `d`.`month`,
  `d`.`tavg`,
  `d`.`tmin`,
  `d`.`tmax`,
  `d`.`prcp`,
  `d`.`tsun`,
  `d`.`pres`
FROM
  `normals_global` AS `d`
WHERE
  `station` = '$origin'
ON DUPLICATE KEY UPDATE
  `tavg` = COALESCE(`normals_global`.`tavg`, VALUES(`normals_global`.`tavg`)),
  `tmin` = COALESCE(`normals_global`.`tmin`, VALUES(`normals_global`.`tmin`)),
  `tmax` = COALESCE(`normals_global`.`tmax`, VALUES(`normals_global`.`tmax`)),
  `prcp` = COALESCE(`normals_global`.`prcp`, VALUES(`normals_global`.`prcp`)),
  `tsun` = COALESCE(`normals_global`.`tsun`, VALUES(`normals_global`.`tsun`)),
  `pres` = COALESCE(`normals_global`.`pres`, VALUES(`normals_global`.`pres`));

DELETE FROM `normals_global` WHERE `station` = '$origin';
```
:::

## Data Routines

All automated routines, for both import & export of data, are available [here](https://github.com/meteostat/routines). By adding new data sources, you can help Meteostat improve its data coverage.

## Python Library

Please refer to [this page](/python/contributing).

## Documentation

Last but not least, this documentation is an [open source project](https://github.com/meteostat/dev), too. Keeping our docs up-to-date is crucial. If you are contributing to parts of our ecosystem, please make sure to add corresponding documentation. Also, if anything appears to be unclear or misleading in one of our articles, feel free to propose changes.

The Meteostat team will review all pull requests. Once a PR has been approved and merged into the `master` branch, Meteostat will automatically deploy changes into the productive environment.
