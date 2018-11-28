import { Given, Then, Before } from "cucumber";
import { ApiHelper } from "../api/ApiHelper";

const frisby = require('frisby');

Before(async () =>
{
    ApiHelper.ReadApiKeyToken();
});

Given('I query Trello to create a new board', function ()
        {
            console.log('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + ApiHelper.GetApiKey() + '&token=' + ApiHelper.GetApiToken());
            frisby.post('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + ApiHelper.GetApiKey() + '&token=' + ApiHelper.GetApiToken())
            .expect('status', 200);
        }
     );

Given('I query Trello to delete the board', function ()
        {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        }
     );

Then('the status response will be {string}', function (input: string)
        {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        }
    );