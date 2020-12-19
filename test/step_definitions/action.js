import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import * as helper from '../support/helper';
import { Eyes, Target } from '@applitools/eyes-webdriverio5-service';


Then(/^I should take the screenshot$/,() => {
    // browser.debug();
    browser.eyesCheck('homepage')
});