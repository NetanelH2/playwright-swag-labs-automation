import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutStepOnePage } from '../pages/checkoutStepOne.page';
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwo.page';
import { CheckoutCompletePage } from '../pages/checkoutComplete.page';
import { USERS } from '../data/users';

test('Sanity test - full purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const stepOne = new CheckoutStepOnePage(page);
  const stepTwo = new CheckoutStepTwoPage(page);
  const completePage = new CheckoutCompletePage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login(USERS.standard.username, USERS.standard.password);
  await inventoryPage.assertPageLoaded();

  // Add products
  await inventoryPage.addTwoProducts();
  await inventoryPage.assertCartBadge(2);

  // Cart
  await inventoryPage.goToCart();
  await cartPage.assertPageLoaded();
  await cartPage.assertCartItemsCount(2);

  // Checkout step one
  await cartPage.checkout();
  await stepOne.assertPageLoaded();
  await stepOne.fillForm();

  // Checkout step two
  await stepTwo.assertPageLoaded();
  await stepTwo.finish();

  // Complete
  await completePage.assertPageLoaded();
  await completePage.assertThankYouVisible();
});
