import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Login" }).click();
  expect(await page.getByText("Alex Morgan").isVisible()).toBeTruthy();
  await page.getByRole("button", { name: "Logout" }).click();
  expect(await page.getByText("Alex Morgan").isVisible()).not.toBeTruthy();
});

test("snapshot test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveScreenshot();
});
