import { CustomizeConfig } from './type';

export const config: CustomizeConfig = {
  replacements: [
    {
      placeholder: '{{PLACEHOLDER_FULL_NAME}}',
      value: 'Sebastian Wesolowski',
      files: ['package.json'],
    },
    {
      placeholder: '{{PLACEHOLDER_PAGE_AUTHOR}}',
      value: 'www.wesolowski.dev',
      files: ['.github/FUNDING.yml', 'LICENSE'],
    },
    {
      placeholder: '{{PLACEHOLDER_GITHUB_USER}}',
      value: 'SebastianWesolowski',
      files: ['package.json', 'README.md', './docs/HowToAutoDeploy.md'],
    },
    {
      placeholder: '{{PLACEHOLDER_NODE_VERSION}}',
      value: '20.17.0',
      files: ['.nvmrc'],
    },
    {
      placeholder: '>=0.0.0',
      value: '>=20.17.0',
      files: ['package.json'],
    },
    {
      placeholder: 'placeholder-repo-name',
      value: 's-postgres',
      files: ['package.json'],
    },
    {
      placeholder: '{{PLACEHOLDER_REPO_NAME}}',
      value: 's-postgres',
      files: ['package.json', 'tools/addDependency.js', 'README.md', './docs/HowToAutoDeploy.md'],
    },
    {
      placeholder: '{{PLACEHOLDER_NPM_USER}}',
      value: 'sebastian.wesolowski.sw',
      files: ['./docs/HowToAutoDeploy.md'],
    },
    {
      placeholder: '{{PLACEHOLDER_CURRENT_YEAR}}',
      value: new Date().getFullYear().toString(),
      files: ['LICENSE'],
    },
    {
      placeholder: '{{A template for creating ...}}',
      value: 'This NPM package provides a pre-configured Postgres setup for Docker.',
      files: ['README.md', 'package.json'],
    },
  ],
  cleanupExtensions: ['.mybak'],
};
