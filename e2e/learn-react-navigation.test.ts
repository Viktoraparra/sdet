import { test, expect } from "@playwright/test";

test("Navigation by hyperlink", async ({ browser }) => {
  // Create a new browser context to isolate this test's session
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:3000/");

  //Locators
  const reactLink = page.locator('a[class="App-link"]');
  
  // Wait for the new page to open after clicking the hyperlink.
  // Use Promise.all to ensure the click and page load are coordinated.
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    reactLink.click(),

  ]);
  const mainTitle = newPage.locator(
    'div div p[class="text-4xl font-display max-w-lg md:max-w-full py-1 text-center text-secondary dark:text-primary-dark leading-snug self-center"]'
  );
  // Validate the title of the newly opened page
  expect(await newPage.title()).toContain("React");
  
  // Validate the content of the main title element on the new page.
  await expect(await mainTitle.textContent()).toContain("library for web and native");
});
