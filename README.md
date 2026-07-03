# SauceDemo Playwright Tests

Automated tests for https://www.saucedemo.com/ using Playwright + TypeScript.

## Setup
npm install
npx playwright install

## Run tests
npx playwright test --headed

## Run a single test file
npx playwright test tests/valid-login.spec.ts --headed

## View report
npx playwright show-report