# {{PLACEHOLDER_REPO_NAME}}

<a href="https://github.com/SebastianWesolowski/starter-npm-package"><img align="left" width="440" height="180" alt="{{PLACEHOLDER_REPO_NAME}} package" src=".github/assets/heroImageReposytory-SNP.png"></a>

## Important Links

- [![npm package][npm-img]][npm-url]
- [![Build Status][build-img]][build-url]
- [![GitHub Contributors][github-contributors-badge]][github-contributors-badge-link]
- [Author page]({{PLACEHOLDER_PAGE_AUTHOR}})
- [Git Hooks Documentation](.husky/README.md)

<br/><br/>

**Remove before final release**

- [Set up your repository](docs/HowToAutoDeploy.md)
- [Way to work](docs/WayToWrok.md)
- [Known issues](docs/knowProblems.md)

---

<br/>

{{A template for creating ...}}

## Install

```bash
npm install PLACEHOLDER_REPO_NAME
```

## Usage

```ts
import { myPackage } from '{{PLACEHOLDER_REPO_NAME}}';

// Default value is 'Watermelon 🍉'
getFavoriteFruit();
//=> 'My favorite fruit is Watermelon 🍉'

getFavoriteFruit('Apple 🍎');
//=> 'My favorite fruit is Apple 🍎'
```
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

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Install the dependencies:

```bash
yarn install
```

2. Run the update witch s-update-manager:

```bash
yarn s-update-manager
```

3. Set up your repository

Replace variable in the `./tools/customize/customize.config.ts` script with your own details to personalize your new package:

```bash
export const config: CustomizeConfig = {
  replacements: [
    {
      placeholder: "{{PLACEHOLDER_FULL_NAME_EXAMPLE}}",
      value: "Sebastian Wesolowski",
      files: [
        "package.json",
        "README.md",
        "./docs/HowToAutoDeploy.md",
        ".github/FUNDING.yml",
      ],
    },
    {
      placeholder: "{{PLACEHOLDER_PAGE_AUTHOR_EXAMPLE}}",
      value: "www.wesolowski.dev",
      files: [".github/FUNDING.yml", "package.json", "LICENSE"],
    },
    ...
```

You can look on example in `./tools/customize/customize.example.config.ts`

Run script with:

```bash
yarn customize
```

or

```bash
tsx tools/customize/customize.ts
```

4. Optional

- 4.1. Add ngrok token in .env file for local development

  ```bash
   NGROK_AUTH_TOKEN=your_ngrok_token
  ```

  after that you can run ngrok to expose your local server to the internet:

  ```bash
    yarn dev:tunnel
  ```

  [![ngrok](./.github/assets/ngrok.png)](https://dashboard.ngrok.com/get-started/setup/macos)

5. Run the development server:

```bash
yarn dev
```


## 🔗 Coupling Graph

The `coupling-graph` script is a useful tool that helps visualize the coupling and connections between your project's internal modules. It's built using the [Madge](https://github.com/pahen/madge) library. To generate the graph, simply run the following command:

```bash
yarn coupling-graph
```

This will create a `graph.svg` file, which contains a graphical representation of the connections between your components. You can open the file with any SVG-compatible viewer.

![graph](.github/assets/couplingGraph-node.png)

## Badges

[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]
[![GitHub License][github-license-badge]][github-license-badge-link]

[build-img]: https://github.com/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/{{PLACEHOLDER_REPO_NAME}}
[downloads-url]: https://www.npmtrends.com/{{PLACEHOLDER_REPO_NAME}}
[npm-img]: https://img.shields.io/npm/v/{{PLACEHOLDER_REPO_NAME}}
[npm-url]: https://www.npmjs.com/package/{{PLACEHOLDER_REPO_NAME}}
[issues-img]: https://img.shields.io/github/issues/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}
[issues-url]: https://github.com/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[github-license-badge]: https://img.shields.io/github/license/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}
[github-license-badge-link]: https://github.com/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}/blob/main/LICENSE
[github-contributors-badge]: https://img.shields.io/github/contributors/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}
[github-contributors-badge-link]: https://github.com/{{PLACEHOLDER_GITHUB_USER}}/{{PLACEHOLDER_REPO_NAME}}/graphs/contributors
