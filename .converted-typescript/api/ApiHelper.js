"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var ApiHelper = /** @class */ (function () {
    function ApiHelper() {
    }
    ApiHelper.GetApiKey = function () {
        return this.ApiKey;
    };
    ApiHelper.GetApiToken = function () {
        return this.ApiToken;
    };
    ApiHelper.ReadApiKeyToken = function () {
        var keytoken = fs.readFileSync('C:/Users/michael.butterfield/Desktop/trello.txt', 'utf8');
        console.log(keytoken);
        var dataValue = keytoken.split('\t');
        console.log(dataValue[0]);
        console.log(dataValue[1]);
        this.ApiKey = dataValue[0];
        this.ApiToken = dataValue[1];
    };
    return ApiHelper;
}());
exports.ApiHelper = ApiHelper;
//# sourceMappingURL=ApiHelper.js.map