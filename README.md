# s-postgres

<a href="https://github.com/SebastianWesolowski/starter-npm-package"><img align="left" width="440" height="180" alt="s-postgres package" src="srcReadme/heroImageReposytory.png"></a>

## Important Links

- [![npm package][npm-img]][npm-url]
- [![Build Status][build-img]][build-url]
- [Author page](PLACEHOLDER_PAGE_AUTHOR)

---

<br/>

This NPM package provides a pre-configured Postgres setup for Docker. It allows customization through environment variables. Follow the instructions below to integrate this package into your project.

## Installation

To install the package, run the following command:

```bash
yarn add s-postgres
```

## Configuration

Create a `.env` file in your project with the following example configuration:

```env
DATABASE_URL="postgresql://username:password@localhost:5010/mydb?schema=public"
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

## Badges
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]


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
