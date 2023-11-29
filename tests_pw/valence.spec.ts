import { test, expect } from '@playwright/test';


test('can select Hydrogen to enable button', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('elementSelector').selectOption('Helium');
    await expect(page.getByTestId('submit-button')).toBeEnabled();
});

test('cannot clic button before selecting', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('submit-button')).toBeDisabled();
});