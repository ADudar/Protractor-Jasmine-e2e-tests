/**
 * Created by Артём Дударь on 4/21/2017.
 */

describe('scenario test', function () {
    var administrationPage = require('../pages/administration.page');
    var loginPage = require('../pages/login.page');
    var accountSettingsPage = require('../pages/account.settings.page');
    var containerSettingsPage = require('../pages/container.settings.page');

    beforeAll(function () {
        administrationPage.open();
        loginPage.login('p1792127p1792127@gmail.com', 'testuser1p1792127');
    });

    it('should enabled account name field', function () {
            browser.ignoreSynchronization = false;
            since('account name enabled').expect(accountSettingsPage.checkIsAccountNameEnabled()).toBeTruthy();
    });

    it('should set account name', function () {
        var accountName = 'my company';
        accountSettingsPage.setAccountNameText(accountName);
        expect(accountSettingsPage.getAccountNameText()).toEqual(accountName);
    });

    it('should check checkbox "send anonymous data"', function () {
        accountSettingsPage.clickAnonymousDataCheckbox();
        accountSettingsPage.expectAnonymousDataCheckboxSelected();
    });

    it('should display container name field', function () {
        accountSettingsPage.clickNextStepButton();
        expect(containerSettingsPage.checkIsAccountContainerEnabled()).toBeTruthy();
    });

    it('should set container name', function () {
        var containerName = 'container1';
        containerSettingsPage.setAccountContainer(containerName);
        expect(containerSettingsPage.getAccountContainerText()).toEqual(containerName);
    });

    it('should reset form', function () {
        administrationPage.clickCancel();
        expect(accountSettingsPage.getAccountNameText()).toEqual('');
        expect(containerSettingsPage.checkIsAccountContainerDisplayed()).toBeFalsy();
    });

    afterEach(function () {
        expect(administrationPage.checkIsCreateButtonEnabled()).toBeFalsy();
    });

});