package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src\\test\\resources\\com.duckduckgo\\SearchBoxText.feature",
        glue = "StepDefinitions",
        monochrome = false,
        dryRun = false
)
public class DuckDuckGoRunner {
}
