var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/tag-manager.spec.js'],
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10000,
        print: function () {}
    },

    onPrepare: function () {
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
    }
    //   ,multiCapabilities: [{
    //   browserName: 'firefox'
    // }, {
    //   browserName: 'chrome'
    // }]
};