const {Given, When, Then} = require('cucumber');
import { browser } from 'protractor';
import { DesktopWebsite } from "../application/DesktopWebsite"
import { Before } from 'cucumber';

let website: DesktopWebsite;

Before(async () =>
{
    website = new DesktopWebsite();
});

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

Given('I am on the home page', async function ()
        {
            await browser.get("http://dictionary.apa.org/");
        }
    );

When('I search {string} in dictionary', async function (phrase: string)
        {
            await website.pdhomepage.searchTextBox.inputText(phrase);
            await website.pdhomepage.searchButton.click();
        }
    );

Then('the input search results will be displayed dictionary', async function ()
        {
            
        }
    );