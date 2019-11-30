try {

    var expect = require('chai').expect;
    var assert = require('chai').assert;
    var yaml = require('js-yaml');
    var fs = require("fs");
    var yamlMerge = require('yaml-merge');
    var glob = require("glob");
    var objYaml = null;
    var objData = null;

    var World = function World() {

        this.assert = assert;
        this.expect = expect;
        this.client = browser;
        this.TIMEOUT_CONST = 60000;

        if (objYaml === null) {
            glob("tests/acceptance/wdio/locators/common/*.yml", function (er, files) {
                objYaml = yamlMerge.mergeFiles(files);
            });
        }
        function getSelector(field) {

            var dataSelector = objYaml[field];
            return dataSelector;
        }

        function getSelector(field) {
            var dataSelector = (field.indexOf(' ') > -1) ? '[data-selector*="' : '[data-selector="';

            if (config.lookups[field]) {
                dataSelector = config.lookup.s[field];
            }
            else if (objYaml[field]) {
                dataSelector = objYaml[field];
            }
            else {
                dataSelector = field;
            }
            return dataSelector;
        }

        this.getSelector = function (field) {
            return processSelector(field);
        };
    };

    exports.World = World;
}

catch (err) {
    console.log('Error found in world.js File');
    console.log(err);
}