@MenuNavigation
Feature: Menu Navigation

  Scenario: Submenu appears on hover over menu item
    Given I navigate to the homepage
    When I hover over the "Oblíbené nástroje" menu item
    Then I should see the submenu for "Oblíbené nástroje"
    When I hover over the "Změna doručení" menu item
    Then I should see the submenu for "Změna doručení"
    When I hover over the "Poslat zásilku" menu item
    Then I should see the submenu for "Poslat zásilku"
    When I hover over the "Služby pro firmy" menu item
    Then I should see the submenu for "Služby pro firmy"
    When I hover over the "eGovernment" menu item
    Then I should see the submenu for "eGovernment"
    When I hover over the "eShop" menu item
    Then I should see the submenu for "eShop"
    When I hover over the "Jiné služby" menu item
    Then I should see the submenu for "Jiné služby"

  Scenario: Clicking on menu items navigates correctly
    Given I navigate to the homepage
    When I click on the "Oblíbené nástroje" menu item
    Then I should be redirected to "https://www.postaonline.cz/oblibene-nastroje" page
    When I click on the "Změna doručení" menu item
    Then I should be redirected to "https://www.postaonline.cz/zmena-doruceni" page
    When I click on the "Poslat zásilku" menu item
    Then I should be redirected to "https://www.postaonline.cz/odvozy/mojeodvozy" page
    When I click on the "Služby pro firmy" menu item
    Then I should be redirected to "https://www.postaonline.cz/sluzby-pro-firmy" page
    When I click on the "eGovernment" menu item
    Then I should be redirected to "https://www.postaonline.cz/egovernment" page
    When I click on the "eShop" menu item
    Then I should be redirected to "https://www.postaonline.cz/e-shop" page
    When I click on the "Jiné služby" menu item
    Then I should be redirected to "https://www.postaonline.cz/jine-sluzby" page
    When I click on the "Můj účet" menu item
    Then I should be redirected to "https://www.postaonline.cz/rap/prihlaseni" page

  Scenario: Clicking on top bar menu items navigates correctly
    Given I navigate to the homepage
    When I click on the "Přihlásit" menu item
    Then I should be redirected to "https://www.postaonline.cz/rap/prihlaseni" page
    When I click on the "Registrovat" menu item
    Then I should be redirected to "https://www.postaonline.cz/rap/registrace-uzivatelskeho-uctu-rozcestnik" page

  Scenario: Clicking on "EN" top bar button changes page language correctly
    When I click on the "EN" menu item
    Then I should see the page in English language