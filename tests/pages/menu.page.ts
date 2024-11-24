import { Page, Locator } from "@playwright/test";

export enum MenuItems {
  FavouriteTools = "Oblíbené nástroje",
  ChangeDelivery = "Změna doručení",
  ParcelPosting = "Poslat zásilku",
  ForBusinesses = "Služby pro firmy",
  EGovernment = "eGovernment",
  EShop = "eShop",
  OtherServices = "Jiné služby",
  MyAccount = "Můj účet",
  LogIn = "Přihlásit",
  Register = "Registrovat",
  Language = "EN"
}

export class HomePage {
  private readonly defaultTimeout: number;
  private readonly page: Page;
  private readonly url: string;
  private readonly redirectUrl: string;
  private readonly topBarMenuList: Locator;
  private readonly menuList: Locator;

  private readonly loginMenuItem: Locator;
  private readonly registerMenuItem: Locator;
  private readonly languageMenuItem: Locator;

  private readonly favouriteToolsMenuItem: Locator;
  private readonly favouriteToolsSubMenu: Locator;
  private readonly changeDeliveryMenuItem: Locator;
  private readonly changeDeliverySubMenu: Locator;
  private readonly parcelPostingMenuItem: Locator;
  private readonly parcelPostingSubMenu: Locator;
  private readonly forBusinessesMenuItem: Locator;
  private readonly forBusinessesSubMenu: Locator;
  private readonly eGovernmentMenuItem: Locator;
  private readonly eGovernmentSubMenu: Locator;
  private readonly eShopMenuItem: Locator;
  private readonly eShopSubMenu: Locator;
  private readonly otherServicesMenuItem: Locator;
  private readonly otherServicesSubMenu: Locator;

  private readonly myAccountMenuItem: Locator;

  constructor(page: Page) {
    this.defaultTimeout = 20000;
    this.page = page;
    this.url = "https://www.postaonline.cz/index";
    this.redirectUrl = "https://www.postaonline.cz/rap/prihlaseni";
    this.topBarMenuList = page.locator('ul[class="links"]');
    this.menuList = page.locator("#menu");

    this.loginMenuItem = this.topBarMenuList.locator(
      `a:has-text("${MenuItems.LogIn}")`
    );

    this.registerMenuItem = this.topBarMenuList.locator(
      `a:has-text("${MenuItems.Register}")`
    );

    this.languageMenuItem = this.topBarMenuList.locator(
      `li:has(a:has-text("${MenuItems.Language}"))`
    );

    this.favouriteToolsMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.FavouriteTools}"))`
    );
    this.favouriteToolsSubMenu = this.favouriteToolsMenuItem.locator("ul");

    this.changeDeliveryMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.ChangeDelivery}"))`
    );
    this.changeDeliverySubMenu = this.changeDeliveryMenuItem.locator("ul");

    this.parcelPostingMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.ParcelPosting}"))`
    );
    this.parcelPostingSubMenu = this.parcelPostingMenuItem.locator("ul");

    this.forBusinessesMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.ForBusinesses}"))`
    );
    this.forBusinessesSubMenu = this.forBusinessesMenuItem.locator("ul");

    this.eGovernmentMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.EGovernment}"))`
    );
    this.eGovernmentSubMenu = this.eGovernmentMenuItem.locator("ul");

    this.eShopMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.EShop}"))`
    );
    this.eShopSubMenu = this.eShopMenuItem.locator("ul");

    this.otherServicesMenuItem = this.menuList.locator(
      `li:has(a span:has-text("${MenuItems.OtherServices}"))`
    );
    this.otherServicesSubMenu = this.otherServicesMenuItem.locator("ul");

    this.myAccountMenuItem = this.menuList.locator(
      `li:has(a:has-text("${MenuItems.MyAccount}"))`
    );
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto(this.url);
  }

  async hoverOverMenuItem(menuItem: MenuItems) {
    if (menuItem === MenuItems.FavouriteTools) {
      await this.favouriteToolsMenuItem.hover();
    } else if (menuItem === MenuItems.ChangeDelivery) {
      await this.changeDeliveryMenuItem.hover();
    } else if (menuItem === MenuItems.ParcelPosting) {
      await this.parcelPostingMenuItem.hover();
    } else if (menuItem === MenuItems.ForBusinesses) {
      await this.forBusinessesMenuItem.hover();
    } else if (menuItem === MenuItems.EGovernment) {
      await this.eGovernmentMenuItem.hover();
    } else if (menuItem === MenuItems.EShop) {
      await this.eShopMenuItem.hover();
    } else if (menuItem === MenuItems.OtherServices) {
      await this.otherServicesMenuItem.hover();
    }
  }

  async clickOnMenuItem(menuItem: MenuItems) {
    if (menuItem === MenuItems.LogIn) {
      await this.loginMenuItem.click();
    } else if (menuItem === MenuItems.Register) {
      await this.registerMenuItem.click();
    } else if (menuItem === MenuItems.Language) {
      await this.languageMenuItem.click();
    } else if (menuItem === MenuItems.FavouriteTools) {
      await this.favouriteToolsMenuItem.click();
    } else if (menuItem === MenuItems.ChangeDelivery) {
      await this.changeDeliveryMenuItem.click();
    } else if (menuItem === MenuItems.ParcelPosting) {
      await this.parcelPostingMenuItem.click();
    } else if (menuItem === MenuItems.ForBusinesses) {
      await this.forBusinessesMenuItem.click();
    } else if (menuItem === MenuItems.EGovernment) {
      await this.eGovernmentMenuItem.click();
    } else if (menuItem === MenuItems.EShop) {
      await this.eShopMenuItem.click();
    } else if (menuItem === MenuItems.OtherServices) {
      await this.otherServicesMenuItem.click();
    } else if (menuItem === MenuItems.MyAccount) {
      await this.myAccountMenuItem.click();
    }
  }

  async isSubMenuVisible(menuItem: MenuItems): Promise<boolean> {
    if (menuItem === MenuItems.FavouriteTools) {
      return await this.favouriteToolsSubMenu.isVisible();
    } else if (menuItem === MenuItems.ChangeDelivery) {
      return await this.changeDeliverySubMenu.isVisible();
    } else if (menuItem === MenuItems.ParcelPosting) {
      return await this.parcelPostingSubMenu.isVisible();
    } else if (menuItem === MenuItems.ForBusinesses) {
      return await this.forBusinessesSubMenu.isVisible();
    } else if (menuItem === MenuItems.EGovernment) {
      return await this.eGovernmentSubMenu.isVisible();
    } else if (menuItem === MenuItems.EShop) {
      return await this.eShopSubMenu.isVisible();
    } else if (menuItem === MenuItems.OtherServices) {
      return await this.otherServicesSubMenu.isVisible();
    }
    return false;
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
}