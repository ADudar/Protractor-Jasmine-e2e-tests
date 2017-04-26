/**
 * Created by Артём Дударь on 4/22/2017.
 */

var ContainerSettings = function () {

    var accountContainerInput = element(by.model('form.container.data.name'));

    this.setAccountContainer = function (value) {
        accountContainerInput.clear().sendKeys(value);
    };

    this.checkIsAccountContainerEnabled = function () {
        return accountContainerInput.isEnabled();
    };

    this.checkIsAccountContainerDisplayed = function () {
        return accountContainerInput.isDisplayed();
    };

    this.getAccountContainerText = function () {
        return accountContainerInput.getAttribute('value');
    };
};

module.exports = new ContainerSettings();