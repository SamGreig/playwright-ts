require('dotenv').config();
import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pageObjects/next-home-page';

let preprodRun = process.env.PREPROD
let runPreProdTests = preprodRun ? 'false' : 'true';

test.beforeEach(async ({ page }) => {

});

test.describe('Home Page Search Tests', () => {

  /* Parameterized test */
  const searchTerms = ['top', 'skirt', 'shirt']
  for (const searchTerm of searchTerms) {
    test(`Given I search for a ${searchTerm}`, async ({ page }) => {
      const homePage = new HomePage(page)
      const searchTermRegex = new RegExp(searchTerm);
      await homePage.goto()
      await expect(page).toHaveTitle(/Next/);
      await homePage.searchForProduct(searchTerm);
      await expect(page).toHaveURL(searchTermRegex)
    });
  }

    /* Conditional test */
    test(`Given this test is conditional`, async ({ page }) => {
      test.skip(runPreProdTests === 'false'); 
      const homePage = new HomePage(page)
      await homePage.goto()
      await expect(page).toHaveTitle(/Next/);
      await homePage.searchForProduct('shorts');
      await expect(page).toHaveURL(/shorts/)
    });

    /* Annotation will check for failure*/
    test(`Given this test should fail`, async ({ page }) => {
      test.fail()
      const homePage = new HomePage(page)
      await homePage.goto()
      await expect(page).toHaveTitle(/Next/);
      await homePage.searchForProduct('shirt');
      await expect(page).toHaveURL('foobar')
    });
});