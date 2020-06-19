Feature: Validate search in Etsy

  Background: It will run before each scenario
    Given the user goes to the Etsy

  Scenario Outline: Validation of Search in Etsy1
    When the user search it Etsy with "<searchValue>"
    Then the user validate the title "<title>" and url "<etsyUrl>"
    Examples:
      | searchValue    | title                  | etsyUrl |
      | winter hat     | Winter hat \| Etsy     | winter  |
      | hat            | Hat \| Etsy            | hat     |
      | winter soldier | Winter soldier \| Etsy | soldie  |
