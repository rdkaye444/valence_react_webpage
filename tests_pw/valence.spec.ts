import { test, expect } from '@playwright/test';


test('can select Hydrogen', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('elementSelector').selectOption('Helium');
    await expect(page.getByTestId('elementSelector')).toContainText('Hydrogen');
});
