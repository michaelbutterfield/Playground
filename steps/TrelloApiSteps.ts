import { Given, Then, Before } from "cucumber";
import { trello } from "../api/specificapi/trello";

const frisby = require('frisby');

Before(async () =>
{
    trello.ReadApiKeyToken();
});

Given('I try and get the board Id', function ()
{
    if (trello.GetApiBoardId("apitestboard"))
    {
        return true;
    }
    else
    {
        try
        {
            throw new Error("Board ID not retrieved properly");
        }
        catch(e)
        {
            console.log(e);
        }
    }
}
);

Given('I query Trello to create a new board', function ()
{
    //Assumes JSON and sends the header Content-Type: application/json by default.
    console.log('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + trello.GetApiKey() + '&token=' + trello.GetApiToken());
    frisby.post('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + trello.GetApiKey() + '&token=' + trello.GetApiToken())
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