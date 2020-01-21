# sunrise-data-importer

This module uses https://github.com/commercetools/commercetools-sunrise-data to test the import-api.

## Environment parameters

| ENV_VAR                    | Description                                 | Additional info                                       |
| -------------------------- | ------------------------------------------- | ----------------------------------------------------- |
| SUNRISE_DATA_CLIENT_ID     | the ctp project client id                   | needs scopes `manage_products`, `manage_import_sinks` |
| SUNRISE_DATA_CLIENT_SECRET | the ctp project client secret               |
| CTP_PROJECT_KEY            | the ctp project key                         |
| SUNRISE_DATA_PATH          | the path to the sunrise data project folder |
| IT_TEST_URL                | the import api url to run against           | defaults to `http://localhost:8080`                   |

## How to start the import

It is currently possible to import sunrise `categories`, `products`, `productVariants`, `productTypes` and `prices` . Separately or combined by adding them as arguments to the start script.

For example,

```sh
$ yarn start categories
```

or

```sh
$ yarn start categories products productVariants productTypes prices
```
