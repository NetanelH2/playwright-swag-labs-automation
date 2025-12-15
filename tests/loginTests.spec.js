import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import {
  USERS,
  POSITIVE_LOGIN_USERS,
  NEGATIVE_LOGIN_USERS,
} from '../data/users';

test.describe('Login Tests', () => {

  // ---------- Positive Login Tests ----------
  for (const userKey of POSITIVE_LOGIN_USERS) {
    test(`Positive login - ${userKey}_user`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      const user = USERS[userKey];

      await loginPage.navigate();
      await loginPage.login(user.username, user.password);

      await inventoryPage.assertPageLoaded();
    });
  }

  // ---------- Negative Login Tests ----------
  test('Negative login - locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(USERS.locked.username, USERS.locked.password);

    await loginPage.assertErrorMessage(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

  // ---------- Negative Login Tests (Data-driven) ----------
  for (const testData of NEGATIVE_LOGIN_USERS) {
    test(`Negative login - ${testData.description}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigate();
      await loginPage.login(testData.username, testData.password);

      await loginPage.assertErrorMessageVisible();
    });
  }

});
