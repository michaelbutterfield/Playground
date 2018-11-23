"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../common/element");
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(passedLocator, passedName, passedPageName) {
        return _super.call(this, passedLocator, passedName, passedPageName) || this;
    }
    TextInput.prototype.inputText = function (text) {
        try {
            return this.getElement(true, true).sendKeys(text);
            //return this.element.sendKeys(text);
        }
        catch (Error) {
            console.log(Error);
        }
    };
    return TextInput;
}(element_1.Element));
exports.TextInput = TextInput;
//# sourceMappingURL=textinput.js.map