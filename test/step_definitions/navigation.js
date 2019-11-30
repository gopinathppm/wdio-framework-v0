import { Given, Then, When } from 'cucumber';
import { assert } from  'assert';
import { fs } from 'fs';
import { yaml } from 'js-yaml';
import world from '../support/world';
import dataSelector from '../locators/locators';

Given(/^I login to the application$/, () => {
    browser.url("http://www.google.com");
});

Given(/^I launch the application$/, () => {
    // browser.url("https://demo.applitools.com/hackathon.html");
    browser.url("http://www.google.com");
});

Then(/^I wait (\d+) seconds$/,(seconds) => {
    console.log("waiting...", seconds);
    browser.pause(5 * 1000);
});

