/**
 * Created by Артём Дударь on 4/22/2017.
 */

var AccountSettings = function () {

    var accountNameInput = element(by.name('form.account.data.name'));
    var anonymousDataCheckbox = element(by.model('ctrl.form.account.data.shareData'));
    var nextStepButton = element(by.css('[data-ng-click="stepperCtrl.nextStep()"]'));

    this.setAccountNameText = function (value) {
        accountNameInput.clear().sendKeys(value);
    };

    this.clickNextStepButton = function () {
        nextStepButton.click();
    };

    this.checkIsAccountNameEnabled = function () {
        return accountNameInput.isEnabled();
    };

    this.getAccountNameText = function () {
        return accountNameInput.getAttribute('value');
    };

    this.clickAnonymousDataCheckbox = function () {
        anonymousDataCheckbox.click();
    };

    this.expectAnonymousDataCheckboxSelected = function () {
        expect(anonymousDataCheckbox.getAttribute('class')).toMatch('material-checked');
    };
};

module.exports = new AccountSettings();