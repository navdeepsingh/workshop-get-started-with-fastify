# Starter application

## Setup

Before running any commands in this `README`, check that you are in the `starter`
directory in your terminal:

```bash
pwd
```

If you haven't already run `npm install` in the root directory of this project,
you will need to now:

```bash
npm install
```

## Running the server

Start the server with [nodemon](https://www.npmjs.com/package/nodemon):

```bash
npm run start:dev
```

## Building your application

If you get stuck at any point during the workshop, take a look at [the code
for the completed application](../completed).

## Testing your application

Follow the documentation for [Testing your API](../TESTING.md).

## Challenges to try after the workshop

### Make the options for the Fastify server configurable

- Create a `config.js` script which uses the [env-schema](https://www.npmjs.com/package/env-schema) library
  - Configure it to read configuration from a `.env` file in development
  - Add configuration for the Fastify logger `level` and `prettyPrint` options
  - Default the setting which you define for `level` to `info`
  - Default the setting which you define for `prettyPrint` to `false`
  - Override these settings in a local `.env` file
- Import your `config.js` module in `server.js` and pass it to the `buildApp()` function
- Update the `options` object in the `buildApp()` function in `app.js` to use the
configuration which has been passed to it

### Generate the recipes schema with fluent-json-schema

- Generate the recipes schema in `routes.js` with the
[fluent-json-schema](https://www.npmjs.com/package/fluent-json-schema)
library instead of defining a raw JSON schema object.
