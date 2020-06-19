Feature: Validate search in Etsy

  Background: It will run before each scenario
    Given the user goes to the Etsy

    @smoke
  Scenario: Validation of Search in Etsy1
    When the user search it Etsy with "winter hat"
    Then the user validate the title "Winter hat | Etsy" and url "winter"

      @smoke
  Scenario: Validation of Search in Etsy2
    When the user search it Etsy with "hat"
    Then the user validate the title "Hat | Etsy" and url "hat"

        @regression
  Scenario: Validation of Search in Etsy3
    When the user search it Etsy with "winter soldier"
    Then the user validate the title "Winter soldier | Etsy" and url "soldier"

