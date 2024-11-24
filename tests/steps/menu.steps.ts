import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { HomePage, MenuItems } from "../pages/menu.page";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(2 * 1000);
let homePage: HomePage;

Given("I navigate to the homepage", async function () {
  homePage = new HomePage(pageFixture.page);
  await homePage.navigateToHomePage();
});

When("I hover over the {string} menu item", async function (menuItem: string) {
  await homePage.hoverOverMenuItem(menuItem as MenuItems);
});

Then(
  "I should see the submenu for {string}",
  async function (menuItem: string) {
    const isVisible = await homePage.isSubMenuVisible(menuItem as MenuItems);
    expect(isVisible).toBeTruthy();
  }
);

When("I click on the {string} menu item", async function (menuItem: string) {
  await homePage.clickOnMenuItem(menuItem as MenuItems);
});

Then(
  "I should be redirected to {string} page",
  async function (expectedUrl: string) {
    const isRedirected = await homePage.redirectToPage(expectedUrl);
    const currentUrl = pageFixture.page.url();
    console.log(currentUrl);
    expect(isRedirected).toBeTruthy();
    expect(currentUrl).toBe(expectedUrl);
  }
);

Then(
  "I should see the page in English language",
  async function () {
    const currentUrl = pageFixture.page.url();
    const isEnglishLanguage = currentUrl.includes('/en/');
    expect(isEnglishLanguage).toBeTruthy();
  }
);

