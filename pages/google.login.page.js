/**
 * Created by Артём Дударь on 4/21/2017.
 */

var LoginPage = function () {

    var emailInput = element(by.id('Email'));
    var passwordInput = element(by.id('Passwd'));
    var nextButton = element(by.id('next'));
    var signInButton = element(by.id('signIn'));

    this.login = function (email, password) {
        emailInput.sendKeys(email);
        nextButton.click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(passwordInput));
        passwordInput.sendKeys(password);
        signInButton.click();
    };
};

module.exports = new LoginPage();