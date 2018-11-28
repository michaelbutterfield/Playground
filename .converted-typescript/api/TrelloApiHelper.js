"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var frisby = require('frisby');
var TrelloApiHelper = /** @class */ (function () {
    function TrelloApiHelper() {
    }
    TrelloApiHelper.GetApiKey = function () {
        return this.ApiKey;
    };
    TrelloApiHelper.GetApiToken = function () {
        return this.ApiToken;
    };
    TrelloApiHelper.ReadApiKeyToken = function () {
        console.log("Reading API key and token...");
        var keytoken = fs.readFileSync('C:/Users/michael.butterfield/Desktop/trello.txt', 'utf8');
        var dataValue = keytoken.split('\t');
        this.ApiKey = dataValue[0];
        this.ApiToken = dataValue[1];
    };
    /* ************************************************ */
    /* ************************************************ */
    //            Trello API Functions
    TrelloApiHelper.CreateBoard = function (boardName, boardDesc) {
        //Assumes JSON and sends the header Content-Type: application/json by default.
        frisby.post("https://api.trello.com/1/boards/?name={0}&desc={1}&key={2}&token={3}".format(boardName, boardDesc, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken()))
            .expect('status', 200);
    };
    TrelloApiHelper.DeleteBoard = function (boardId) {
        frisby.del("https://api.trello.com/1/boards/{0}?key={1}&token={2}".format(boardId, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken()))
            .expect('status', 200);
    };
    TrelloApiHelper.GetBoardId = function (boardName) {
        var key = TrelloApiHelper.GetApiKey();
        var token = TrelloApiHelper.GetApiToken();
        //let stringFormat = "https://api.trello.com/1/search?query={0}&key={1}&token={2}".format(boardName, TrelloApiHelper.GetApiKey(), TrelloApiHelper.GetApiToken());
        var idResponse;
        frisby.get('https://api.trello.com/1/search?query=${boardName}&key=${key}&token=${token}')
            .expect('status', 200).afterJSON(function (response) {
            console.log(response.body.boards.id);
            idResponse = response.body.boards.id;
        });
        console.log(idResponse);
        return idResponse;
    };
    return TrelloApiHelper;
}());
exports.TrelloApiHelper = TrelloApiHelper;
//# sourceMappingURL=TrelloApiHelper.js.map