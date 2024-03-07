const { test, expect } = require("@playwright/test");

test.describe("Calculator Operations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8081");
  });

  test("should add two numbers correctly", async ({ page }) => {
    // Enter numbers into the input fields
    await page.fill('input[placeholder="Enter the first number"]', "5");
    await page.fill('input[placeholder="Enter the second number"]', "3");

    await page.click('button:has-text("Add")');
  });

  test("should subtract two numbers correctly", async ({ page }) => {
    await page.fill('input[placeholder="Enter the first number"]', "10");
    await page.fill('input[placeholder="Enter the second number"]', "4");

    await page.click('button:has-text("Subtract")');
  });
});
