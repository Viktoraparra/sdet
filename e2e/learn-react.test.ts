/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Vowel form", async ({ page }) => {});
