import { browser } from "protractor";
import { BeforeAll, After, AfterAll, Status, Before } from 'cucumber';
import { async } from "q";
import { Reporter } from "./reporter";
import { config } from "../runner/prot.conf";

BeforeAll({timeout: 100 * 1000}, async () =>
    {
        //Needed if page doesn't use Angular but still want to use framework to test
        await browser.waitForAngularEnabled(false);
        //await browser.get(config.baseURL);
    }
)

After(async function(scenario)
        {
            if (scenario.result.status === Status.FAILED)
            {
                
                const screenShot = await browser.takeScreenshot();
                this.attach(screenShot, "image/png");
            }
        }
    );

AfterAll({timeout: 100 * 1000}, async () =>
            {
                await browser.quit();
            }
        );