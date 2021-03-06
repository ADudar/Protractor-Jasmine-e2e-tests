/**
 * Created by Артём Дударь on 4/21/2017.
 */

var AdministrationPage = function () {

    var createButton = element(by.css('button[text=Create]'));
    var cancelButton = element(by.css('[data-ng-click="$event.preventDefault(); ctrl.cancel()"]'));

    this.open = function () {
        browser.get('https://tagmanager.google.com/#/admin/accounts/create');
    };

    this.create = function () {
        createButton.click();
    };

    this.clickCancel = function () {
        cancelButton.click();
    };

    this.checkIsCreateButtonEnabled = function () {
        return createButton.isEnabled();
    };

    this.checkIsCancelButtonEnabled = function () {
        return cancelButton.isEnabled();
    }
};

module.exports = new AdministrationPage();