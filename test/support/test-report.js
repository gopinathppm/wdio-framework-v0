// import { generate } from 'multiple-cucumber-html-reporter';
// import fs from 'fs-extra';

const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');
const { CucumberJsJsonReporter } = require('wdio-cucumberjs-json-reporter');
var _path = require("path");

module.exports = function () {
    const htmlReporter = () => {

        const json_path = 'test/support/output/json_reports';
        const html_path = 'test/support/output/html_report';

        generate({
            // Required
            // This part needs to be the same path where you store the JSON files
            // default = '.tmp/json/'
            jsonFolder: '.tmp/json',
            reportPath: 'test/support/output/html_report',
            launchReport: true,
            // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
        });
        reporter.generate(options);
    };
};

