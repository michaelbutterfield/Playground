"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = __importStar(require("cucumber-html-reporter"));
var fs = __importStar(require("fs"));
var mkdirp = __importStar(require("mkdirp"));
var path = __importStar(require("path"));
var jsonReports = path.join(process.cwd(), "/reports/json");
var htmlReports = path.join(process.cwd(), "/reports/html");
var targetJson = jsonReports + "/cucumber_report.json";
var dateFormat = require('dateformat');
var currentDateTime = new Date();
var cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/Test Run " + dateFormat(currentDateTime, "dd-mm-yyyy HH.MM.ss") + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.createDirectory = function (dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    };
    Reporter.createHTMLReport = function () {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    };
    return Reporter;
}());
exports.Reporter = Reporter;
//# sourceMappingURL=reporter.js.map