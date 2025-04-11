# s-postgres

<a href="https://github.com/SebastianWesolowski/starter-npm-package"><img
align="left" width="440" height="180" alt="s-postgres package" src=".github/
assets/heroImageReposytory-SNP.png"></a>

Simple tool for running PostgreSQL in a Docker container.

## Installation

```bash
npm install s-postgres
```

## Usage

The tool can be used in two ways:

### 1. Using the DATABASE_URL variable

```bash
DATABASE_URL=postgresql://test:test@localhost:5432/mydb CONTAINER_NAME=s-postgres-mydb npx s-postgres
```

### 2. Using individual environment variables

```bash
DATABASE_USER=test \
DATABASE_PASSWORD=test \
DATABASE_HOST=localhost \
DATABASE_PORT=5432 \
DATABASE_NAME=mydb \
CONTAINER_NAME=s-postgres-mydb \
npx s-postgres
```

## Environment Variables

The tool uses the following environment variables:

| Variable          | Description           | Default value                              |
| ----------------- | --------------------- | ------------------------------------------ |
| DATABASE_URL      | Full database URL     | postgresql://test:test@localhost:5432/mydb |
| DATABASE_USER     | Database username     | test                                       |
| DATABASE_PASSWORD | Database password     | test                                       |
| DATABASE_HOST     | Database host         | localhost                                  |
| DATABASE_PORT     | Database port         | 5432                                       |
| DATABASE_NAME     | Database name         | mydb                                       |
| CONTAINER_NAME    | Docker container name | s-postgres                                 |

## Features

The tool:

1. Starts a Docker container with PostgreSQL
2. Waits for the server to start
3. Checks if the database exists
4. Creates the database if it doesn't exist
5. Reports success

## Example .env file

You can use an `.env` file containing the required environment variables in your project. An example file is available in the repository as `.env.example`.

## Important Links

- [![npm package][npm-img]][npm-url]
- [![Build Status][build-img]][build-url]
- [![GitHub Contributors][github-contributors-badge]][github-contributors-badge-link]
- [Author page](www.wesolowski.dev)
- [Git Hooks Documentation](.husky/README.md)

<br/><br/>

---

<br/>

This NPM package provides a pre-configured Postgres setup for Docker.

This NPM package provides a pre-configured Postgres setup for Docker. It allows customization through environment variables. Follow the instructions below to integrate this package into your project.

## Installation

To install the package, run the following command:

```bash
yarn add s-postgres
```

## Configuration

Create a `.env` file in your project with the following example configuration:

```env
DATABASE_URL="postgresql://test:test@localhost:5432/mydb"
CONTAINER_NAME="s-postgres"
```

Adjust the values accordingly based on your requirements. If you do not add your file here, the values presented will be added automatically.

## Usage

After installing the package, add the following script to your `package.json` file:

```json
"scripts": {
  "start": "s-postgres"
}
```

Now, you can run the package by executing:

```bash
yarn start
```

This will initialize the Postgres container with the specified configuration.

Make sure to customize the `DATABASE_URL` and `CONTAINER_NAME` variables in your `.env` file to match your project's needs.

## Important Note

Ensure that Docker is installed and running on your machine before using this package.

Feel free to reach out if you encounter any issues or have further questions.

### Integrated features

Don't worry, with this template you will anyways get all the awesomeness you need:

- 📦 **[s-update-manager](https://github.com/SebastianWesolowski/s-update-manager)** - Manage your dependencies with centralized repozystory
- 🎨 **[s-customize](https://github.com/SebastianWesolowski/s-template/tools/customize)** - Customize your repozytory with one command
- 🌐 **[ngrok](https://ngrok.com/)** - For local development with remote services
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code
- 🛠️ **[Extremely strict TypeScript](https://www.typescriptlang.org/)** - With [`ts-reset`](https://github.com/total-typescript/ts-reset) library for ultimate type safety
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows, including Bundle Size and performance stats
- **[Jest](https://jestjs.io/)** - For rock-solid unit and integration tests
- **Smoke Testing** and **Acceptance Tests** - For confidence in your deployments
- **[Conventional commits git hook](https://www.conventionalcommits.org/)** - Keep your commit history neat and tidy
- **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - No more spaghetti imports
- **[Patch-package](https://www.npmjs.com/package/patch-package)** - Fix external dependencies without losing your mind
- **Components coupling and cohesion graph** - A tool for managing component relationships
- **[Semantic Release](https://github.com/semantic-release/semantic-release)** - for automatic changelog
- **[Husky](https://typicode.github.io/husky/)** - Git hooks made easy (see [Git Hooks Documentation](.husky/README.md))

## Badges

[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]
[![GitHub License][github-license-badge]][github-license-badge-link]

[build-img]: https://github.com/SebastianWesolowski/s-postgres/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/SebastianWesolowski/s-postgres/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/s-postgres
[downloads-url]: https://www.npmtrends.com/s-postgres
[npm-img]: https://img.shields.io/npm/v/s-postgres
[npm-url]: https://www.npmjs.com/package/s-postgres
[issues-img]: https://img.shields.io/github/issues/SebastianWesolowski/s-postgres
[issues-url]: https://github.com/SebastianWesolowski/s-postgres/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[github-license-badge]: https://img.shields.io/github/license/SebastianWesolowski/s-postgres
[github-license-badge-link]: https://github.com/SebastianWesolowski/s-postgres/blob/main/LICENSE
[github-contributors-badge]: https://img.shields.io/github/contributors/SebastianWesolowski/s-postgres
[github-contributors-badge-link]: https://github.com/SebastianWesolowski/s-postgres/graphs/contributors
