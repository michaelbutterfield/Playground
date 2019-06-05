const { Given, When, Then } = require('cucumber');
var assertion = require('hamjest');
import { browser } from 'protractor';
import { DesktopWebsite } from "../application/DesktopWebsite"
import { Before } from 'cucumber';
import { Assertions } from '../support/assertions'

let website: DesktopWebsite// = new DesktopWebsite();

Before(async () => 
{
    website = new DesktopWebsite();
});

async function delay(ms: number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('I go to the google search page', async function ()
{
    await browser.get("https://www.google.co.uk");
    await website.googlesearchpage.searchButton.AssertElementIsEnabled();
})

Given('I am on the Google website', async function ()
{
    browser.waitForAngularEnabled(false);
});

When('I search {string}', async function (phrase: string)
{
    await website.googlesearchpage.searchTextBox.inputText(phrase);
    await website.googlesearchpage.searchButton.click();
});

Then('the input search results will be displayed', async function ()
{
    //await AssertionHelper.AssertThat(website.google.searchButton.getText(), assertion.containsString("Angular"), "Test");
    //await assertion.assertThat(website.googlesearchedpage.searchTextBox.getAttribute("value"), assertion.equalTo("Angular"));
    
    await assertion.assertThat(website.googlesearchedpage.searchResult.getAttribute("innerText"), assertion.is("Angular(web framework) - Wikipedia"));
    //await website.googlesearchedpage.searchResult.AssertElementIsDisplayed();
    //await Assertions.assertThat()
}); 