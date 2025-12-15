import { expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.thankYouMessage = page.locator('.complete-header');
  }

  async assertPageLoaded() {
    await expect(this.title).toHaveText('Checkout: Complete!');
  }

  async assertThankYouVisible() {
    await expect(this.thankYouMessage).toBeVisible();
  }
}
