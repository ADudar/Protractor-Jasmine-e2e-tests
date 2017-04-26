/**
 * Created by Артём Дударь on 4/21/2017.
 */

var LoginPage = function () {

    var emailInput = element(by.id('Email'));
    var passwordInput = element(by.id('Passwd'));
    var nextButton = element(by.id('next'));
    var signInButton = element(by.id('signIn'));

    this.login = function (email, password) {
        var EC = protractor.ExpectedConditions;
        emailInput.clear().sendKeys(email);
        nextButton.click();
        browser.wait(EC.visibilityOf(passwordInput));
        passwordInput.clear().sendKeys(password);
        signInButton.click();
        browser.sleep(3000);
    };
};

module.exports = new LoginPage();