"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoogleSearchPage_1 = require("./pages/GoogleSearchPage");
exports.GoogleSearchPage = GoogleSearchPage_1.GoogleSearchPage;
var PDHomePage_1 = require("./pages/PDHomePage");
exports.PDHomePage = PDHomePage_1.PDHomePage;
var GoogleSearchedPage_1 = require("./pages/GoogleSearchedPage");
var DesktopWebsite = /** @class */ (function () {
    function DesktopWebsite() {
        this.googlesearchpage = new GoogleSearchPage_1.GoogleSearchPage();
        this.googlesearchedpage = new GoogleSearchedPage_1.GoogleSearchedPage();
        this.pdhomepage = new PDHomePage_1.PDHomePage();
    }
    return DesktopWebsite;
}());
exports.DesktopWebsite = DesktopWebsite;
//# sourceMappingURL=DesktopWebsite.js.map