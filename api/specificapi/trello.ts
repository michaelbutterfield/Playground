const fs = require('fs');
const frisby = require('frisby');
import { String, StringBuilder } from 'typescript-string-operations'
import * as rm from 'typed-rest-client'
import { apihelper } from "../apihelper";

export class trello extends apihelper
{
     /* ************************************************ */
    //            Reading Key and Token In

    private static ApiKey;
    private static ApiToken;
    static boardId: String;


    public static GetApiKey()
    {
        return this.ApiKey;
    }

    public static GetApiToken()
    {
        return this.ApiToken;
    }

    public static GetBoardId()
    {
        return this.boardId;
    }

    public static SetBoardId(passedBoardId: string)
    {
        this.boardId = passedBoardId;
    }

    public static ReadApiKeyToken(): void
    {
        console.log("Reading API key and token...");

        let keytoken = fs.readFileSync('C:/Users/michael.butterfield/Desktop/trello.txt', 'utf8');

        let dataValue: String[] = keytoken.split('\t');

        this.ApiKey = dataValue[0];
        this.ApiToken = dataValue[1];
    }

    /* ************************************************ */

    /* ************************************************ */
    //            Trello API Functions

    public static CreateBoard(boardName, boardDesc)
    {
        let createString: String = String.Format("https://api.trello.com/1/boards/?name={0}&desc={1}&key={2}&token={3}", boardName, boardDesc, this.GetApiKey(), this.GetApiToken()); 

        //Assumes JSON and sends the header Content-Type: application/json by default.
        frisby.post(createString).expect('status', 200);
    }







    public static DeleteBoard(boardId: string)
    {
        let deleteString: String = String.Format("https://api.trello.com/1/boards/{0}?key={1}&token={2}", boardId, this.GetApiKey(), this.GetApiToken());

        frisby.del(deleteString).expect('status', 200);
    }






    public static GetApiBoardId(boardName: string): boolean
    {
        // /* Rest */
        // //https://www.npmjs.com/package/typed-rest-client
        // //give user agent (NOT ABSOLUTELY REQUIRED) and base url
        // let rest: rm.RestClient = new rm.RestClient("","https://api.trello.com/");

        // let res: rm.IRestResponse<TrelloBoardData.BoardRootObject> = await rest.get<TrelloBoardData.BoardRootObject>(String.Format("/1/search?query={0}&key={1}&token={2}", boardName, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken());

        // res.result.boards[0].id


        
        let queryString: String = String.Format("https://api.trello.com/1/search?query={0}&key={1}&token={2}", boardName, this.GetApiKey(), this.GetApiToken());

        frisby.get(queryString).expect('status', 200).then(res =>
        {
            let id: string = res.json.boards[0].id;
            console.log(id);
            this.SetBoardId(id)
            return true;
        })

        return false;
    }
}