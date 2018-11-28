import { Reporter } from '../support/reporter'
import { browser, Config } from 'protractor';
const jsonReports = process.cwd() + "/reports/json";

export const config: Config =
{
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //baseURL: 'http://www.google.co.uk/',

    // Specify the patterns for test files
    // to include in the test run
    specs:
        [
            '../../features/*.feature'
        ],

    // Use this to exclude files from the test run.
    // In this case it's empty since we want all files
    // that are mentioned in the specs.
    exclude: [],

    // Use cucumber for the tests
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //resultJsonOutputFile: 'reports/json/report.json',

    onPrepare: () =>
    {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    onComplete: () =>
    {
        Reporter.createHTMLReport();
    },

    // Contains additional settings for cucumber-js
    cucumberOpts:
    {
        compiler: 'ts:ts-node/register',
        format: 'json:reports/json/cucumber_report.json',
        plugin: ["pretty"],
        require: ['../../.converted-typescript/steps/*.js', '../../.converted-typescript/support/*.js'],
        /* ************************* */
        /* Change this to change which scenario/tests to run */
        tags: '@GetBoardId'
        /* ************************* */
    },

    // These capabilities tell protractor about the browser
    // it should use for the tests. In this case chrome.
    capabilities:
    {
        'browserName': 'chrome',
        'chromeOptions':
        {

        }
    },
}