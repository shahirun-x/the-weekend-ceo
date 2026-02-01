// @ts-check
import { test, expect } from '@playwright/test';

// Collect console errors during tests
let consoleErrors = [];

test.beforeEach(async ({ page }) => {
    consoleErrors = [];
    page.on('console', (msg) => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });
});

test.afterEach(async () => {
    // Check for console errors after each test
    const severeErrors = consoleErrors.filter(
        (err) => !err.includes('favicon') && !err.includes('404')
    );
    if (severeErrors.length > 0) {
        console.log('Console errors detected:', severeErrors);
    }
});

test.describe('Homepage', () => {
    test('loads without crash', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('body')).toBeVisible();
        await expect(page.locator('.home-page')).toBeVisible();
    });

    test('displays hero content', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.hero')).toBeVisible();
    });
});

test.describe('Mobile Layout', () => {
    test('no horizontal scrolling on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto('/');

        const scrollInfo = await page.evaluate(() => {
            return {
                scrollWidth: document.documentElement.scrollWidth,
                clientWidth: document.documentElement.clientWidth,
            };
        });

        expect(scrollInfo.scrollWidth).toBeLessThanOrEqual(scrollInfo.clientWidth);
    });
});

test.describe('Navigation', () => {
    test('navigates to Brand page', async ({ page }) => {
        await page.goto('/');
        await page.click('a[href="/brand"]');
        await expect(page).toHaveURL(/.*brand/);
        await expect(page.locator('.brand-page')).toBeVisible();
    });

    test('navigates to Services page', async ({ page }) => {
        await page.goto('/');
        await page.click('a[href="/services"]');
        await expect(page).toHaveURL(/.*services/);
        await expect(page.locator('.services-page')).toBeVisible();
    });

    test('navigates to Areas page', async ({ page }) => {
        await page.goto('/');
        await page.click('a[href="/areas"]');
        await expect(page).toHaveURL(/.*areas/);
        await expect(page.locator('.areas-page')).toBeVisible();
    });
});

test.describe('All Main Pages Render', () => {
    test('Home page renders', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.home-page')).toBeVisible();
    });

    test('Brand page renders', async ({ page }) => {
        await page.goto('/brand');
        await expect(page.locator('.brand-page')).toBeVisible();
    });

    test('Services page renders', async ({ page }) => {
        await page.goto('/services');
        await expect(page.locator('.services-page')).toBeVisible();
    });

    test('Areas page renders', async ({ page }) => {
        await page.goto('/areas');
        await expect(page.locator('.areas-page')).toBeVisible();
    });

    test('Gallery page renders', async ({ page }) => {
        await page.goto('/gallery');
        await expect(page.locator('.gallery-page')).toBeVisible();
    });

    test('Appointment page renders', async ({ page }) => {
        await page.goto('/appointment');
        await expect(page.locator('.appointment-page')).toBeVisible();
    });
});

test.describe('Console Errors', () => {
    test('no severe console errors on Home page', async ({ page }) => {
        const errors = [];
        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        await page.goto('/');
        await page.waitForTimeout(1000);

        const severeErrors = errors.filter(
            (err) => !err.includes('favicon') && !err.includes('404')
        );
        expect(severeErrors.length).toBe(0);
    });
});
