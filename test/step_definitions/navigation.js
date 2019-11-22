var myStepDefinitionsWrapper = function () {

    this.Given(/^I login to the application$/, function (callback) {
        browser.url("http://www.google.com");
        let title = browser.getTitle();
        console.log("Browser is launched and the title is:", title);
    });
};
module.exports = myStepDefinitionsWrapper;