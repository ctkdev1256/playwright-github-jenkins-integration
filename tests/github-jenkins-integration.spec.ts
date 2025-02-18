import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get title", async ({ page }) => {
  await page.goto("https://www.google.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});

test("get title of page", async ({ page }) => {
  await page.goto("https://www.google.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("GoogleDo");
});
