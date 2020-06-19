Feature: DuckDuckGo search testing

  Scenario Outline: Validation of Search in DuckDuckGo
    Given the user goes to the duckduckgo
    When the user send the "<SearchValue>" keyword
    Then the user click search button
    And the user validate title contains the "<title>" keyword
    And the user validate url contains the "<url>" keyword
    * the user validate all results contain the "<SearchResult>" keyword
    Examples:
      | SearchValue | title    | url      | SearchResult |
      | selenium    | selenium | selenium | Selenium     |
      | TestNG      | TestNG   | Test     | Test         |
      | Java        | Java     | Java     | Java         |