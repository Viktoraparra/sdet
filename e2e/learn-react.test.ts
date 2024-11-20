import { test, expect } from "@playwright/test";
let wizard1Instructions;
let wizard1Steps;
let wizard2Sinstructions;
let wizard2Steps;

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.reload();
});

test("Vowel form", async ({ page }) => {
  // Locate the wizard containers
  const wizard1Cont = page.locator('div[class="instructions"]');
  const wizard2Cont = page.locator('div[class="vowels"]');

  // Validate that both containers start at step 0
  validateContainerZero(wizard1Cont, "h1", "0");
  validateContainerZero(wizard2Cont, "h1", "0");

  // Validate instructions for Step 1 in Wizard 1
  validateContainerZero(wizard1Cont, "div div h2", "Step 1");
  validateContainerZero(wizard1Cont, "div div p", "Some instrucntions for step 1");

  // Advance to Step 2 and validate the step update
  await wizard1Cont.locator('button[data-action="next"]').click();
  validateContainerZero(wizard1Cont, "div div h2", "Step 2");

  // Validate container step update
  validateContainerZero(wizard1Cont, "h1", "1");

  // Extract text from Step 2 and fill in Wizard 2
  wizard1Instructions = await wizard1Cont.locator("div div p").textContent();
  const arrayText = wizard1Instructions.split("2.");
  wizard1Instructions = arrayText[1];
  await wizard2Cont.locator("input").fill(wizard1Instructions);

  // Submit and validate vowel count
  await wizard2Cont.locator('button[type="submit"]').click();
  const vowelCountLocator = page.locator("#vowel-count");
  await expect(vowelCountLocator).toBeVisible();
  expect(await vowelCountLocator.textContent()).toContain("86");

  // Click the "Next Step" button.
  await wizard2Cont.locator('button[data-action="next"]').click();
  validateContainerZero(wizard2Cont, "h1", "1");
  validateContainerZero(wizard2Cont, "div div h2", "Step 2");
  //

  // Validate GIF and Step 2 message
  await expect(await wizard2Cont.locator('[alt="loading"]')).toBeVisible();
  wizard2Sinstructions = await wizard2Cont.locator("div div p").textContent();
  await expect(wizard2Sinstructions).toContain("There is no Step 2");
});

/**
 * Helper function to validate that a container's title contains specific text
 *
 * @param {string} container - container locator
 * @param {string} titleSelector - second locator
 * @param {string} textToValidate - text to validate
 * @returns {void}  
 */
async function validateContainerZero(container, titleSelector, textToValidate) {
  const title = await container.locator(titleSelector).textContent();
  await expect(title).toContain(textToValidate);
}
