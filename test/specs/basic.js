const assert = require('assert');

module.exports = function () {

    describe('webdriver.io page', () => {
        it('should have the right title', () => {
            browser.url('https://webdriver.io');
            const title = browser.getTitle();
            assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
        })
    });
}