# IlegraZen

A Cypress practice project I originally created for an interview exercise. The goal was to automate two behaviors of the search interface on [Blog do Agi](https://blogdoagi.com.br/): searching for a term and checking how the search UI behaves while scrolling.

## Existing test coverage

The spec in `cypress/components/SearchBarTests.js` uses two small page-object-style modules:

- `CoreFunctionality.js` searches for `apólice`, opens a result and checks text on the destination page.
- `ScrollVisibility.js` checks visibility and positioning of search controls while moving between the top and bottom of the page.

The tests depend on a third-party website. Its layout and content may have changed since this exercise was written, and I have not verified that the current tests pass. The existing project also uses an older Cypress structure.

## Local setup

1. Install Node.js and npm.
2. Clone this repository and run `npm ci`.
3. Run `npm run cypress:open` to inspect and run the two scenarios interactively.

The `npm test` script is currently a placeholder; do not use it as evidence of a passing test suite.

## Work to do

- Remove tracked `node_modules` files, then confirm the lockfile supports a clean `npm ci`.
- Add a useful headless test command for local and CI use.
- Update the spec layout and Cypress version after checking compatibility.
- Review selectors and assertions against the current site, and capture a genuine execution result.
- Remove generated downloads and review the Cypress Cloud project association before publishing recordings.

The aim is to improve this existing exercise incrementally while keeping its original scope and history visible.
