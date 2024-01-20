### Set up your repository

Replace `FULL_NAME`, `GITHUB_USER`, `NODE_VERSION` and `REPO_NAME` in the `./customize.sh` script with your own details to personalize your new package:

```bash
FULL_NAME="John Smith"
GITHUB_USER="johnsmith"
REPO_NAME="my-cool-package"
NODE_VERSION="18.17.1"
NPM_USER="johnsmith"
```

Add permission to edit `chmod +x ./customize.sh` and rund it `./customize.sh`

### Add Tokens for NPM(**Automation**), Github, CodeCov

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`, `GH_TOKEN` and `CODECOV_TOKEN`

- Set `GH_TOKEN` - https://github.com/settings/tokens/new

Add it on https://github.com/SebastianWesolowski/s-postgres/settings/secrets/actions as new repo secret

- Set `NPM_TOKEN`, set automation type - https://www.npmjs.com/settings/sebastian.wesolowski.sw/tokens/new
  ![npm.png](npm.png)

- Add it on https://github.com/SebastianWesolowski/s-postgres/settings/secrets/actions as new repo secret

### Setup repository

go to
https://github.com/SebastianWesolowski/s-postgres/settings/actions - > Workflow permissions -> check
Read and write permissions

![gh.png](gh.png)

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).
