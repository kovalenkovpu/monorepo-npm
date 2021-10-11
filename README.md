# `npm` workspaces monorepository example

### Usage:
- checkout the project
- `npm install` on this repo root level. This will install common dependencies on a root level (common dependencies), also will install specific dependencies inside each package level
- `npm run <command_name> -w @monorepo-npm/<repository_name>` to run the command for a `<repository_name>` repo. For that, the `<command_name>` should exist in the `package.json` for the targeted workspace
- `npm run <command_name> -ws` to run the command for all workspaces. E.g. `npm run test -ws`

### More details on the usage is [here](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Important! `npm` v.7.x is required
