import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test course");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("Description for test course");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("Test courseDescription for test courseУдалить"),
  ).toBeVisible();
  await page
    .locator("div")
    .filter({ hasText: /^Test courseDescription for test courseУдалить$/ })
    .getByRole("button")
    .click();
  await expect(
    page.getByText("Test courseDescription for test courseУдалить"),
  ).not.toBeVisible();
});
