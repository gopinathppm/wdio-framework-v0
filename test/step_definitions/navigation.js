import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import * as helper from '../support/helper';

Given(/^I launch the application$/, () => {
    browser.url("http://www.google.com");
});

Then(/^I wait (\d+) seconds$/,(seconds) => {
    helper.waitFor(seconds);
});

Then(/^I verify the "([^"]*)" text as "([^"]*)"$/,(selector, expectedValue) => {
    selector = dataSelector[selector];
    helper.assertTextEqual(selector,expectedValue);
});