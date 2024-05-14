# merge-coverage-unit-e2e-shard
Example for merging code coverage
- unit test with Jest
- e2e test with Playwright (shard)
    - `npx playwright test --shard=1/2`
    - `npx playwright test --shard=2/2`
- [merge coverage](merge-coverage.js)

## Github Actions
- [.github/workflows/main.yml](.github/workflows/main.yml)


## Preview Coverage Reports
- unit: https://cenfun.github.io/merge-coverage-unit-e2e-shard/unit/
- e2e (merged with shard1 or shard2): https://cenfun.github.io/merge-coverage-unit-e2e-shard/e2e/
- merged: https://cenfun.github.io/merge-coverage-unit-e2e-shard/merged/