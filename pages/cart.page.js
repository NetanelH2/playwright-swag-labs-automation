import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async assertPageLoaded() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async assertCartItemsCount(count) {
    await expect(this.cartItems).toHaveCount(count);
  }
}
