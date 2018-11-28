"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var TrelloApiHelper_1 = require("../api/TrelloApiHelper");
var frisby = require('frisby');
cucumber_1.Before(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        TrelloApiHelper_1.TrelloApiHelper.ReadApiKeyToken();
        return [2 /*return*/];
    });
}); });
cucumber_1.Given('I try and get the board Id', function () {
    var response = TrelloApiHelper_1.TrelloApiHelper.GetBoardId("dgfasr");
    console.log(response);
});
cucumber_1.Given('I query Trello to create a new board', function () {
    //Assumes JSON and sends the header Content-Type: application/json by default.
    console.log('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + TrelloApiHelper_1.TrelloApiHelper.GetApiKey() + '&token=' + TrelloApiHelper_1.TrelloApiHelper.GetApiToken());
    frisby.post('https://api.trello.com/1/boards/?name=Javascript Test Board' + '&key=' + TrelloApiHelper_1.TrelloApiHelper.GetApiKey() + '&token=' + TrelloApiHelper_1.TrelloApiHelper.GetApiToken())
        .expect('status', 200);
});
cucumber_1.Given('I query Trello to delete the board', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('the status response will be {string}', function (input) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
//# sourceMappingURL=TrelloApiSteps.js.map