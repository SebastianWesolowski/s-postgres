---
Remove after first publish [Set up your repository](docs/HowToAutoDeploy.md)
---

# s-postgres

set up your postgres url in ENV:
DATABASE_URL="postgresql://test:test@localhost:5432/mydb?schema=public"

## Install

```bash
npm install s-postgres
```

## Usage

```ts
import { myPackage } from "s-postgres";

myPackage("hello");
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]: https://github.com/SebastianWesolowski/s-postgres/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/SebastianWesolowski/s-postgres/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/s-postgres
[downloads-url]: https://www.npmtrends.com/s-postgres
[npm-img]: https://img.shields.io/npm/v/s-postgres
[npm-url]: https://www.npmjs.com/package/s-postgres
[issues-img]: https://img.shields.io/github/issues/SebastianWesolowski/s-postgres
[issues-url]: https://github.com/SebastianWesolowski/s-postgres/issues
[codecov-img]: https://codecov.io/gh/SebastianWesolowski/s-postgres/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/SebastianWesolowski/s-postgres
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
