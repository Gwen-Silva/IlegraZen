# IlegraZen

A Cypress practice project I originally created for an interview exercise. The goal was to automate two behaviors of the search interface on [Blog do Agi](https://blogdoagi.com.br/): searching for a term and checking how the search UI behaves while scrolling.

## Existing test coverage

The spec in `cypress/components/SearchBarTests.js` uses two page-object-style modules:

- `CoreFunctionality.js` searches for `apólice`, opens a result and checks text on the destination page.
- `ScrollVisibility.js` checks visibility and positioning of search controls while moving between the top and bottom of the page.

These tests target a third-party website. The layout or content might have changed since the exercise was written. The current execution result has **not** been verified.

## Local setup

1. Install Node.js and npm.
2. Clone the repository and run `npm ci`.
3. Run `npm run cypress:open` to inspect the tests interactively, or `npm test` to run Cypress headlessly.

`npm test` now invokes `cypress run`; adding the command does not mean the tests pass. A clean-install check and a full run still need to be recorded.

## Changes in the portfolio review branch

- Added a `.gitignore` for installed dependencies and generated Cypress files.
- Removed the previously committed `node_modules` directory from version control, without changing the lockfile.
- Replaced the placeholder test script with a headless Cypress command.

## Work to do

- Confirm a clean `npm ci` and capture actual test results.
- Modernize the spec layout and Cypress version after checking compatibility.
- Review selectors and assertions against the current site.
- Remove committed generated downloads and review the Cypress Cloud project association before publishing recordings.

This remains the original interview exercise. Improvements are incremental and should be described as verified only after execution.
