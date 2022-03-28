import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly mobileSearchBox: Locator;
  readonly mobile

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('id=sli_search_1');
    this.searchButton = page.locator('input[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://www.next.co.uk');
  }

  async enterSearchTerm(searchTerm) {
      await this.searchBox.type(searchTerm);
  }

  async clickSearchButton() {
      await this.searchButton.click();
  }

  async searchForProduct(product) {
      await this.searchBox.type(product);
      await this.searchButton.click();
  }
}