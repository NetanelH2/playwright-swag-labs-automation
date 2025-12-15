import { expect } from '@playwright/test';

export class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.finishButton = page.locator('#finish');
  }

  async finish() {
    await this.finishButton.click();
  }

  async assertPageLoaded() {
    await expect(this.title).toHaveText('Checkout: Overview');
  }
}
