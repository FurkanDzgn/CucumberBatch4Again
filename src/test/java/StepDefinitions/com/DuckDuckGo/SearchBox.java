package StepDefinitions.com.DuckDuckGo;

import Pages.DuckDuckGo.SearchPackage;
import Utils.ConfigReader;
import Utils.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchBox {
    WebDriver driver= Driver.getDriver();
    SearchPackage searchPackage=new SearchPackage(driver);

    @Given("the user goes to the duckduckgo")
    public void the_user_goes_to_the_duckduckgo() {
        driver.get(ConfigReader.getProperty("url"));
    }
    @When("the user send the {string} keyword")
    public void the_user_send_the_keyword(String serachWord) {
        searchPackage.searchBox.sendKeys(serachWord);
    }


    @Then("the user click search button")
    public void the_user_click_search_button() {

        searchPackage.searchButton.click();
    }

    @Then("the user validate title contains the {string} keyword")
    public void the_user_validate_title_contains_the_keyword(String title) {
       Assert.assertTrue(driver.getTitle().contains(title));
    }


    @Then("the user validate url contains the {string} keyword")
    public void the_user_validate_url_contains_the_keyword(String url) {
       Assert.assertTrue(driver.getCurrentUrl().contains(url));
    }

    @Then("the user validate all results contain the {string} keyword")
    public void the_user_validate_all_results_contain_the_keyword(String expected) {
       for (WebElement ss:searchPackage.searchResult){
           Assert.assertTrue(ss.getText().contains(expected));
       }
    }



}
