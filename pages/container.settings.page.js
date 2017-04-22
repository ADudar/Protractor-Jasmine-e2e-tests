/**
 * Created by Артём Дударь on 4/22/2017.
 */

var ContainerSettings = function () {

    // var websiteButton = element(by.css('div[title=Веб-сайт]'));
    // var iosButton = element(by.css('div[title=iOS]'));
    // var androidButton = element(by.css('div[title=Android]'));
    // var ampButton = element(by.css('div[title=AMP]'));
    var accountContainerInput = element(by.model('form.container.data.name'));

    this.setAccountContainer = function (value) {
        accountContainerInput.clear().sendKeys(value);
    };

    this.checkIsAccountContainerEnabled = function () {
        return accountContainerInput.isEnabled();
    };

    this.checkIsAccountContainerIsDisplayed = function () {
        return accountContainerInput.isDisplayed();
    };

    this.getAccountContainerText = function () {
        return accountContainerInput.getAttribute('value');
    };
};

module.exports = new ContainerSettings();