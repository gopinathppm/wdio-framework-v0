**********************************************************************************************************
Welcome to the WDIO - CUCUMBER framework
**********************************************************************************************************

A Behavioral driven automation framework with **webdriverio** and **cucumber-js**.


## Pre-requisites
Stable node version greater than or equal to `12.18.3`
A package manager. Either `npm` or 'yarn'


npm config set registry https://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/ --global
npm config set strict-ssl false
npm config set strict-ssl false --global

Access to gitlabs & home insurance space `https://github.com/gopinathppm/wdio-framework-v0.git`

## Framework Installation
* clone the repository from github
    Using SSH
        `git@github.com:gopinathppm/wdio-framework-v0.git`
    Using HTTPS along with your sandbox credentials
        `git clone `git clone https://github.com/gopinathppm/wdio-framework-v0.git``
* Move to the folder 'test' from the root of the repository
* Install the dependencies using the commands `npm install`

### Browser driver configurations
For running the automated test cases through any browsers [eg: Chrome or firefox], you need suitable drivers relevant to your browser versions installed

## Automation Execution

* Mention the feature file you want to run in the wdio.conf-cucumber
* execute the command  `npm test` or `npm run test-cucumber`

## Mocha

Mocha has been added with basic test

* Mention the feature file you want to run in the wdio.conf-mocha
* execute the command  `npm run test-mocha`

Reports

Multiple html cucumber report has been added

https://github.com/wswebcreation/wdio-cucumberjs-json-reporter/tree/v5

Feature file:

An example feature has been created to launch chrome and go to facebook.com, then log in
