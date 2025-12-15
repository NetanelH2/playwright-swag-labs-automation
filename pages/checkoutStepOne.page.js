import { expect } from '@playwright/test';

export class CheckoutStepOnePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
  }

  async fillForm() {
    await this.firstName.fill('Test');
    await this.lastName.fill('User');
    await this.postalCode.fill('12345');
    await this.continueButton.click();
  }

  async assertPageLoaded() {
    await expect(this.title).toHaveText('Checkout: Your Information');
  }
}
