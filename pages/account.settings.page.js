/**
 * Created by Артём Дударь on 4/22/2017.
 */

var AccountSettings = function () {

    var accountNameInput = element(by.css('input[name="form.account.data.name"]'));
    var anonymousDataCheckbox = element(by.model('ctrl.form.account.data.shareData'));
    var nextStepButton = element(by.css('button[data-ng-click="stepperCtrl.nextStep()"]'));

    this.setAccountNameText = function (value) {
        accountNameInput.clear().sendKeys(value);
    };

    this.clickSendAnonymousDataCheckbox = function () {
        sendAnonymousDataCheckbox.click();
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

    this.checkIsanonymousDataCheckboxSelected = function () {
        var hasClass = function (element, cls) {
            return element.getAttribute('class').then(function (classes) {
                return classes.split(' ').indexOf(cls) !== -1;
            });
        };
        return hasClass(anonymousDataCheckbox, 'material-checked')
    };

    this.clickNextStepButton = function () {
        nextStepButton.click();
    };
};

module.exports = new AccountSettings();