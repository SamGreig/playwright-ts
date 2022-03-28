import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/next-home-page'

test.beforeEach(async ({ page }) => {

});

test.describe('Device Home Page Tests', () => {

  /* Single test */
  test(`Given I am on the home page using a device`, async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.goto()
      await expect(page).toHaveTitle(/Next/);
  });
});