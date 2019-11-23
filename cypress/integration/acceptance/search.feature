Feature: ML search

  I want search for and item and see the description

  @focus
  Scenario: must search for and item
    Given search page
    Then Search for "iphone 8 plus"
    Then I am on page results page
    Then must show 4 results
    When click en first result
    Then I am on page item detail
    Then mush show item info

