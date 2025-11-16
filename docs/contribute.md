---
sidebar_position: 7
---

# Contribute

Meteostat is an open initiative which does not operate on a primarily commercial basis. We believe that weather and climate data should be freely available to everyone. Therefore, Meteostat operates multiple interfaces which provide free access to meteorological data. Operating, maintaining and growing the project is only possible with the help of people like you.

This section contains information about how to contribute to Meteostat. It also defines general principles and concepts which serve as a foundation for the project and its architecture.

If you want to support Meteostat's mission of making weather and climate data freely available, you can help in several ways:

- **Contribute code or documentation** on our open-source repositories on [GitHub](https://github.com/meteostat).
- **Share Meteostat** on social media, blogs, or other channels to raise awareness.
- **Donate** to support ongoing development and infrastructure costs.

We aim to publish most project code under the MIT license on [GitHub](https://github.com/meteostat). Please open issues for bugs or feature requests and submit pull requests for fixes and improvements.

## Weather Stations

Meteostat provides an open directory of weather stations everyone can edit, share and build upon. The list of weather stations is available on [GitHub](https://github.com/meteostat/weather-stations).

If you want to add a missing station, create a new file in the `stations` folder following the template described [here](https://github.com/meteostat/weather-stations#properties). If possible, also add the station identifier to the CSV files in [this directory](https://github.com/meteostat/routines/tree/master/resources). Including identifiers in the CSV files helps ensure the data collection routines discover and process the station correctly.

### Joining stations

Sometimes the same station exists under multiple identifiers. In that case, unify duplicates into a single JSON file under a single, canonical identifier:

1. Choose one existing JSON file to be the canonical record.
2. Add all available identifiers and details to that file. If you find conflicting information, research or open an issue for clarification.
3. Remove the duplicate files from the repository.
4. Create a pull request describing the change and listing the removed duplicates.

The following steps require database access and must be performed by project admins.

::: details Admin steps

1. Merge the pull request into `master`.
2. Run the station import on the deployment host.
3. Remove corresponding entries in the `stations_inventory` table.
4. Clean the Bulk server by deleting duplicate files inside the `bulk` directory:

```sh
find . -name '$duplicate.csv.gz' -delete
```

Replace `$duplicate` with the duplicate station ID and repeat the command for each duplicate.

5. Run the SQL scripts below for each duplicate to merge observational records into the canonical station ID. Replace `$target` with the canonical ID and `$origin` with the duplicate ID. Table prefixes avoid ambiguity in MariaDB; scripts may take several minutes to complete.

-- daily_ghcn

```sql
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

-- (Other hourly/monthly/normal merge scripts are maintained in the data-management repository.)

:::
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
