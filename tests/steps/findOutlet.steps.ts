import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { FindOutletPage, MenuItems } from "../pages/findOutlet.page";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(20000);
let findOutletPage: FindOutletPage;

Given("I navigate to the Oblíbené nástroje page", async function () {
  findOutletPage = new FindOutletPage(pageFixture.page);
  await findOutletPage.navigateToFavouriteToolsPage();
});

Then("I should see the {string} on the page", async function (element: string) {
  let locator;

  if (element === "subnavigation") {
    locator = findOutletPage.subNavigationBar;
  } else if (element === "form") {
    locator = findOutletPage.form;
  } else if (element === "map") {
    locator = findOutletPage.map;
  } else {
    throw new Error(`Unknown element: ${element}`);
  }

  const isVisible = await findOutletPage.elementIsVisible(locator);
  expect(isVisible).toBeTruthy();
});

Then("I should see the {string} element on the page", async function (element: string) {
  const isVisible = findOutletPage.getPageElementSelector(element);
  expect(isVisible).toBeTruthy();
});

When("I click on the {string} menu item in the Find Outlet page", async function (menuItem: string) {
  await findOutletPage.clickOnMenuItem(menuItem as MenuItems);
});

Then(
  "I should be redirected to {string} page from Oblíbené nástroje page",
  async function (expectedUrl: string) {
    try {
      const isRedirected = await findOutletPage.redirectToPage(expectedUrl);
      const currentUrl = pageFixture.page.url();
      console.log(`Current URL: ${currentUrl}`);
      expect(isRedirected).toBeTruthy();
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      console.error(`Redirection failed: Expected URL ${expectedUrl}, but got ${pageFixture.page.url()}`);
      throw error;
    }
  }
);

When("I type {string} into the {string} field", async function (text: string, field: string) {
  await findOutletPage.typeIntoInput(field, text);
});

When("I click the {string} button", async function (button: string) {
  await findOutletPage.clickButton(button);
});