const fs = require('fs');
const frisby = require('frisby');

export class TrelloApiHelper
{
    /* ************************************************ */
    //            Reading Key and Token In

    private static ApiKey;
    private static ApiToken;

    public static GetApiKey()
    {
        return this.ApiKey;
    }

    public static GetApiToken()
    {
        return this.ApiToken;
    }

    public static ReadApiKeyToken(): void
    {
        console.log("Reading API key and token...");

        let keytoken: String = fs.readFileSync('C:/Users/michael.butterfield/Desktop/trello.txt', 'utf8');

        let dataValue: String[] = keytoken.split('\t');

        this.ApiKey = dataValue[0];
        this.ApiToken = dataValue[1];
    }

    /* ************************************************ */

    /* ************************************************ */
    //            Trello API Functions

    public static CreateBoard(boardName, boardDesc)
    {
        //Assumes JSON and sends the header Content-Type: application/json by default.
        frisby.post("https://api.trello.com/1/boards/?name={0}&desc={1}&key={2}&token={3}".format(boardName, boardDesc, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken()))
            .expect('status', 200);
    }

    public static DeleteBoard(boardId: string)
    {
        frisby.del("https://api.trello.com/1/boards/{0}?key={1}&token={2}".format(boardId, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken()))
            .expect('status', 200);
    }

    public static GetBoardId(boardName: string): string
    {
        //let stringFormat = "https://api.trello.com/1/search?query={0}&key={1}&token={2}".format(boardName, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken());
        let idResponse;
        frisby.get('https://api.trello.com/1/search?query=' + boardName + '&key=' + TrelloApiHelper.GetApiKey() + '&token=' + TrelloApiHelper.GetApiToken())
            .expect('status', 200).afterJSON(function (response)
            {
                console.log(response.body.boards.id);
                idResponse = response.body.boards.id;
            });

        console.log(idResponse);
        
        return idResponse;
    }
}