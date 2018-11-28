import { Given, Then, Before } from "cucumber";
import { TrelloApiHelper } from "../api/TrelloApiHelper";

const frisby = require('frisby');

Before(async () =>
{
    TrelloApiHelper.ReadApiKeyToken();
});

Given('I try and get the board Id', function ()
        {
            let response = TrelloApiHelper.GetBoardId("dgfasr");
            console.log(response);
        }
     );

Given('I query Trello to create a new board', function ()
        {
            //Assumes JSON and sends the header Content-Type: application/json by default.
            console.log('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + TrelloApiHelper.GetApiKey() + '&token=' + TrelloApiHelper.GetApiToken());
            frisby.post('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + TrelloApiHelper.GetApiKey() + '&token=' + TrelloApiHelper.GetApiToken())
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