$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.Etsy/EtsySearch.feature");
formatter.feature({
  "name": "Validate search in Etsy",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "It will run before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the Etsy",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_goes_to_the_Etsy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in Etsy1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user search it Etsy with \"winter hat\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_search_it_Etsy_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the title \"Winter hat | Etsy\" and url \"winter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_validate_the_title_and_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "It will run before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the Etsy",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_goes_to_the_Etsy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in Etsy2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user search it Etsy with \"hat\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_search_it_Etsy_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the title \"Hat | Etsy\" and url \"hat\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_validate_the_title_and_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "It will run before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the Etsy",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_goes_to_the_Etsy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in Etsy3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "the user search it Etsy with \"winter soldier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_search_it_Etsy_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the title \"Winter soldier | Etsy\" and url \"soldier\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_validate_the_title_and_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.Etsy/ScenarioOutlineEtsy.feature");
formatter.feature({
  "name": "Validate search in Etsy",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validation of Search in Etsy1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user search it Etsy with \"\u003csearchValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user validate the title \"\u003ctitle\u003e\" and url \"\u003cetsyUrl\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchValue",
        "title",
        "etsyUrl"
      ]
    },
    {
      "cells": [
        "winter hat",
        "Winter hat | Etsy",
        "winter"
      ]
    },
    {
      "cells": [
        "hat",
        "Hat | Etsy",
        "hat"
      ]
    },
    {
      "cells": [
        "winter soldier",
        "Winter soldier | Etsy",
        "soldie"
      ]
    }
  ]
});
formatter.background({
  "name": "It will run before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the Etsy",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_goes_to_the_Etsy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in Etsy1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user search it Etsy with \"winter hat\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_search_it_Etsy_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the title \"Winter hat | Etsy\" and url \"winter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_validate_the_title_and_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "It will run before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the Etsy",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_goes_to_the_Etsy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in Etsy1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user search it Etsy with \"hat\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_search_it_Etsy_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the title \"Hat | Etsy\" and url \"hat\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_validate_the_title_and_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "It will run before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the Etsy",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_goes_to_the_Etsy()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in Etsy1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user search it Etsy with \"winter soldier\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_search_it_Etsy_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the title \"Winter soldier | Etsy\" and url \"soldie\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.etsy.EtsySteps.the_user_validate_the_title_and_url(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.duckduckgo/SearchBoxText.feature");
formatter.feature({
  "name": "DuckDuckGo search testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validation of Search in DuckDuckGo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user goes to the duckduckgo",
  "keyword": "Given "
});
formatter.step({
  "name": "the user send the \"\u003cSearchValue\u003e\" keyword",
  "keyword": "When "
});
formatter.step({
  "name": "the user click search button",
  "keyword": "Then "
});
formatter.step({
  "name": "the user validate title contains the \"\u003ctitle\u003e\" keyword",
  "keyword": "And "
});
formatter.step({
  "name": "the user validate url contains the \"\u003curl\u003e\" keyword",
  "keyword": "And "
});
formatter.step({
  "name": "the user validate all results contain the \"\u003cSearchResult\u003e\" keyword",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SearchValue",
        "title",
        "url",
        "SearchResult"
      ]
    },
    {
      "cells": [
        "selenium",
        "selenium",
        "selenium",
        "Selenium"
      ]
    },
    {
      "cells": [
        "TestNG",
        "TestNG",
        "Test",
        "Test"
      ]
    },
    {
      "cells": [
        "Java",
        "Java",
        "Java",
        "Java"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of Search in DuckDuckGo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the duckduckgo",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_goes_to_the_duckduckgo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user send the \"selenium\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_send_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate title contains the \"selenium\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_title_contains_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate url contains the \"selenium\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_url_contains_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate all results contain the \"Selenium\" keyword",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_all_results_contain_the_keyword(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_all_results_contain_the_keyword(SearchBox.java:47)\r\n\tat ✽.the user validate all results contain the \"Selenium\" keyword(file:///C:/Users/12242/IdeaProjects/CucumberBatch4Again/src/test/resources/com.duckduckgo/SearchBoxText.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in DuckDuckGo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the duckduckgo",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_goes_to_the_duckduckgo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user send the \"TestNG\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_send_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate title contains the \"TestNG\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_title_contains_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate url contains the \"Test\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_url_contains_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate all results contain the \"Test\" keyword",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_all_results_contain_the_keyword(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_all_results_contain_the_keyword(SearchBox.java:47)\r\n\tat ✽.the user validate all results contain the \"Test\" keyword(file:///C:/Users/12242/IdeaProjects/CucumberBatch4Again/src/test/resources/com.duckduckgo/SearchBoxText.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Search in DuckDuckGo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the duckduckgo",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_goes_to_the_duckduckgo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user send the \"Java\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_send_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate title contains the \"Java\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_title_contains_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate url contains the \"Java\" keyword",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_url_contains_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate all results contain the \"Java\" keyword",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.DuckDuckGo.SearchBox.the_user_validate_all_results_contain_the_keyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});