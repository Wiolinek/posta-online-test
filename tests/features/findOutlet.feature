@FindOutlet
Feature: Find outlet

  Scenario Outline: Validate search for outlets with correct postcodes
    Given I navigate to the Oblíbené nástroje page
    Then I should see the "subnavigation" on the page
    When I click on the "Vyhledávání poboček" menu item in the Find Outlet page
    Then I should be redirected to "https://www.postaonline.cz/vyhledat-pobocku" page from Oblíbené nástroje page
    Then I should see the "form" on the page
    Then I should see the "map" on the page
    When I type "<postcode>" into the "postcodeInput" field
    And I click the "Vyhledat" button
    Then I should be redirected to "<result>" page from Oblíbené nástroje page
    Then I should see the "Detail pobočky" element on the page
    And I should see the "Adresa" element on the page
    And I should see the "Otevírací doba" element on the page
    And I should see the "Balíkovna" element on the page
    And I should see the "Kontakt" element on the page
    And I should see the "Parametry pobočky" element on the page
    And I should see the "Informace o službách" element on the page
    And I should see the "Hodnocení pobočky" element on the page
    And I should see the "Doplňkové služby" element on the page

    Examples:
      | postcode | result                                                           |
      | 11000    | https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/11000 |
      | 15000    | https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/15000 |
      | 17000    | https://www.postaonline.cz/detail-pobocky/-/pobocky/detail/17000 |

  Scenario Outline: Validate search for outlets with incorrect postcodes
    Given I navigate to the Oblíbené nástroje page
    Then I should see the "subnavigation" on the page
    When I click on the "Vyhledávání poboček" menu item in the Find Outlet page
    Then I should be redirected to "https://www.postaonline.cz/vyhledat-pobocku" page from Oblíbené nástroje page
    Then I should see the "form" on the page
    Then I should see the "map" on the page
    When I type "<incorrectpostcode>" into the "postcodeInput" field
    And I click the "Vyhledat" button
    Then I should be redirected to "<noresult>" page from Oblíbené nástroje page
    Then I should see the "No results" element on the page

    Examples:
      | incorrectpostcode | noresult                                                         |
      | 00000             | https://www.postaonline.cz/vyhledat-pobocku?p_p_id=findpostoffice_WAR_findpostportlet&p_p_lifecycle=0&_findpostoffice_WAR_findpostportlet_action=findPostView&_findpostoffice_WAR_findpostportlet_implicitModel=true |