import { Page, Locator } from "@playwright/test";

export enum MenuItems {
  FindOutlet = "Vyhledávání poboček",
}

export class FindOutletPage {
  private readonly defaultTimeout: number;
  private readonly page: Page;
  private readonly url: string;
  private readonly redirectUrl: string;
  private readonly findOutletMenuItem: Locator;
  public readonly subNavigationBar: Locator;
  public readonly form: Locator;
  public readonly map: Locator;

  private getInputSelector(fieldName: string): string {
    const inputSelectors: Record<string, string> = {
      "postcodeInput": "#obecPSC",
    };

    const selector = inputSelectors[fieldName];
    if (!selector) {
      throw new Error(`No selector found for input field with name: ${fieldName}`);
    }
    return selector;
  }

  private getButtonSelector(buttonName: string): string {
    const buttonSelectors: Record<string, string> = {
      "Vyhledat": "#vyhledatButtonMain",
    };

    const selector = buttonSelectors[buttonName];
    if (!selector) {
      throw new Error(`No selector found for button with name: ${buttonName}`);
    }
    return selector;
  }

  public getPageElementSelector(elementName: string): string {
    const elementSelectors: Record<string, string> = {
      "Detail pobočky": "h1:has-text('Detail pobočky')",
      "Adresa": "div[class*='infoCardContent']:has(h2:has-text('Adresa'))",
      "Otevírací doba": "div[class*='infoCardContent']:has(h2:has-text('Otevírací doba'))",
      "Balíkovna": "div[class*='infoCardContent']:has(h2:has-text('Balíkovna'))",
      "Kontakt": "div[class*='infoCardContent']:has(h2:has-text('Kontakt'))",
      "Parametry pobočky": "div[class*='infoCardContent']:has(h2:has-text('Parametry pobočky'))",
      "Informace o službách": "div[class*='infoCardContent']:has(h2:has-text('Informace o službách'))",
      "Hodnocení pobočky": "div[class*='infoCardContent']:has(h2:has-text('Hodnocení pobočky'))",
      "Doplňkové služby": "div[class*='infoCardContent']:has(h2:has-text('Doplňkové služby'))",
      "No results": "div:has(p[class*='noResult'])",
    };

    const selector = elementSelectors[elementName];
    if (!selector) {
      throw new Error(`No selector found for button with name: ${elementName}`);
    }
    return selector;
  }

  constructor(page: Page) {
    this.defaultTimeout = 20000;
    this.page = page;
    this.url = "https://www.postaonline.cz/oblibene-nastroje";
    this.subNavigationBar = this.page.locator('#subnav');

    this.findOutletMenuItem = this.subNavigationBar.locator(
      `li a:has-text("${MenuItems.FindOutlet}")`
    );

    this.form = this.page.locator('#form1');
    this.map = this.page.locator('#map');
  }

  async navigateToFavouriteToolsPage(): Promise<void> {
    await this.page.goto(this.url);
  }

  async clickOnMenuItem(menuItem: MenuItems) {
    if (menuItem === MenuItems.FindOutlet) {
      await this.findOutletMenuItem.click();
    }
  }

  async elementIsVisible(element: Locator): Promise<boolean> {
    try {
      return await element.isVisible();
    } catch (error) {
      console.error(`Error checking visibility of the element: ${error.message}`);
      return false;
    }
  }

  async redirectToPage(expectedUrl: string): Promise<boolean> {
    try {
      await this.page.waitForURL(expectedUrl, { waitUntil: 'domcontentloaded', timeout: this.defaultTimeout });
      return true;
    } catch (error) {
      console.error(`URL mismatch or error: Expected ${expectedUrl} but got different URL`);
      return false;
    }
  }

  async typeIntoInput(field: string, text: string): Promise<void> {
    const inputSelector = this.getInputSelector(field);
    const inputField = this.page.locator(inputSelector);
    await inputField.click();
    await this.page.keyboard.press('Meta+A');
    await this.page.keyboard.press('Backspace');
    await inputField.fill(text, { timeout: this.defaultTimeout });
  }

  async clickButton(buttonName: string): Promise<void> {
    const buttonSelector = this.getButtonSelector(buttonName);
    await this.page.click(buttonSelector, { timeout: this.defaultTimeout });
  }
}