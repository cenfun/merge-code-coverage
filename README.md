# merge-code-coverage
Example for merging code coverage
- Unit test with [Jest](https://github.com/jestjs/jest/) + [jest-monocart-coverage](https://github.com/cenfun/jest-monocart-coverage)
- E2E test with [Playwright](https://playwright.dev/) + [Sharding](https://playwright.dev/docs/test-sharding)
    - `npx playwright test --shard=1/2`
    - `npx playwright test --shard=2/2`
- [merge coverage](merge-coverage.js)

## Github Actions
- [.github/workflows/main.yml](.github/workflows/main.yml)


## Preview V8 Coverage Reports
- unit: https://cenfun.github.io/merge-code-coverage/unit/
- e2e (merge-multiple): https://cenfun.github.io/merge-code-coverage/e2e/
- merged: https://cenfun.github.io/merge-code-coverage/merged/