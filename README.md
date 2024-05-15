# merge-code-coverage
Example for merging code coverage
- unit test with Jest
- e2e test with Playwright (shard)
    - `npx playwright test --shard=1/2`
    - `npx playwright test --shard=2/2`
- [merge coverage](merge-coverage.js)

## Github Actions
- [.github/workflows/main.yml](.github/workflows/main.yml)


## Preview V8 Coverage Reports
- unit: https://cenfun.github.io/merge-code-coverage/unit/
- e2e (merge-multiple): https://cenfun.github.io/merge-code-coverage/e2e/
- merged: https://cenfun.github.io/merge-code-coverage/merged/