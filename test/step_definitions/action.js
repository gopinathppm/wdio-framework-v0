import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import * as helper from '../support/helper';


Then(/^I should take the screenshot$/,() => {
    browser.takeSnapshot('main page');
});