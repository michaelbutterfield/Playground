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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var assertion = require('hamjest');
var Element = /** @class */ (function () {
    function Element(passedLocator, passedName, passedPageName) {
        this.makeElement(passedLocator, passedName, passedPageName, "");
    }
    Element.prototype.makeElement = function (passedLocator, passedName, passedPageName, passedFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.locator = passedLocator;
                this.name = passedName;
                this.pageName = passedPageName;
                this.frame = passedFrameName;
                return [2 /*return*/];
            });
        });
    };
    Element.prototype.AssertElementIsDisplayed = function () {
        var element;
        try {
            element = this.getElement(false, true);
        }
        catch (Error) {
        }
        finally {
            //assertion.assertThat(element, assertion.not(null))
            assertion.assertThat(element, assertion.not(null));
        }
    };
    Element.prototype.AssertElementIsEnabled = function () {
        var element;
        try {
            element = this.getElement(true, true);
        }
        catch (Error) {
        }
        finally {
            //assertion.assertThat(element, assertion.not(null))
            assertion.assertThat(element, assertion.not(null));
        }
    };
    Element.prototype.AssertElementIsNotDisplayed = function () {
        var element;
        try {
            element = this.getElement(false, true);
        }
        catch (Error) {
        }
        finally {
            //assertion.assertThat(element, assertion.not(null))
            assertion.assertThat(element, assertion.is(null));
        }
    };
    Element.prototype.click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clickElement, clickErr_1, jsErr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clickElement = this.getElement(true, false);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 8]);
                        return [4 /*yield*/, clickElement.click()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        clickErr_1 = _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.getElement(false, false).getDriver().executeScript('arguments[0].click();', this.getElement(true, false))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        jsErr_1 = _a.sent();
                        throw clickErr_1;
                    case 7: return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Element.prototype.getAttribute = function (attributeName) {
        return this.getElement(false, true).getAttribute(attributeName);
    };
    Element.prototype.getElement = function (waitUntilClickable, waitUntilVisible) {
        if (waitUntilClickable) {
            this.waitUntilElementIsClickable();
        }
        if (waitUntilVisible) {
            this.waitUntilElementIsVisible();
        }
        return protractor_1.browser.driver.findElement(this.locator);
    };
    Element.prototype.getText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getElement(false, true).getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Element.prototype.isDisabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getElement(false, false).getAttribute('disabled')];
                    case 1: return [2 /*return*/, (_a.sent()) === 'disabled'];
                    case 2:
                        ex_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Element.prototype.isDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getElement(false, true).isDisplayed()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        ex_2 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Element.prototype.waitUntilElementIsClickable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.wait(protractor_1.protractor.until.elementIsEnabled(protractor_1.browser.driver.findElement(this.locator)))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Element.prototype.waitUntilElementIsVisible = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.wait(protractor_1.protractor.until.elementIsVisible(protractor_1.browser.driver.findElement(this.locator)))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Element;
}());
exports.Element = Element;
//# sourceMappingURL=element.js.map