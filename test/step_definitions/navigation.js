import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import content from '../locators/contentValidation';
import * as helper from '../support/helper';

Given(/^I launch the application$/, () => {
    browser.url("http://www.facebook.com");
});

Then(/^I wait (\d+) seconds$/,(seconds) => {
    helper.waitFor(seconds);
});

Then(/^I verify the "([^"]*)" text as "([^"]*)"$/,(selector, expectedValue) => {
    selector = dataSelector[selector];
    helper.assertTextEqual(selector,expectedValue);
});

Then(/^I enter "([^"]*)" in "([^"]*)"$/, (value, selector) => {
    selector = dataSelector[selector];
    helper.setValue(selector,value);
});

When (/^I click on "([^"]*)"$/, selector => {
    selector = dataSelector[selector];
    helper.click(selector);
});