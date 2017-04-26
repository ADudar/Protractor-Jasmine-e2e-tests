var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/tag-manager.spec.js'],
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {}
    },

    onPrepare: function () {
        require('jasmine2-custom-message');
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true
            },
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displaySuccessful: true,
                displayFailed: true,
                displayPending: true,
                displayDuration: true
            }
        }));
        browser.ignoreSynchronization = true;
        browser.driver.manage().timeouts().implicitlyWait(15000);
        browser.driver.manage().window().maximize();
    }
};