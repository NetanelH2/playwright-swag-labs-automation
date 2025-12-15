import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.firstItemAddBtn = page.locator('[data-test^="add-to-cart"]').first();
    this.secondItemAddBtn = page.locator('[data-test^="add-to-cart"]').nth(1);
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addTwoProducts() {
    await this.firstItemAddBtn.click();
    await this.secondItemAddBtn.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async assertPageLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async assertCartBadge(count) {
    await expect(this.cartBadge).toHaveText(count.toString());
  }
}
