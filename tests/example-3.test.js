const { describe, it, expect } = require('@playwright/test');

describe("set 3", () => {
    it('should verify title of the page', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
    });

    it('should verify title of the page - bis', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
    });
});