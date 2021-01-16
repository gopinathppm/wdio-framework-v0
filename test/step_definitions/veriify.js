import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import content from '../locators/contentValidation';
import * as helper from '../support/helper';


    Then(/^I validate the title of the page as "([^"]*)"$/, value => {
        let val = content[value];
        helper.verifyTitle(val);
    });

    Given(/^I validate windows$/, () => {
        let win = browser.getWindowHandles();
        console.log("win--->", win)
    });
