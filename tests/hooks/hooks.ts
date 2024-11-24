import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;

BeforeAll(async function () {
  console.log("Starting");
  browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async function () {
  await pageFixture.page.close();
  await browser.close();
  console.log("Closing");
});
