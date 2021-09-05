import { expect } from "chai";

describe('Login page', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://ref2.eteam.work/');
    });
    it('Should verify Login input', () => {
        const loginName = 'tester61@tester.test';
        const element = "//input[@class='form-control']";
        expect($(element).setValue(loginName));
    });
    it('02/LP Should verify password IF accept valid data', () => {
        const password = 'JajsGpWZfI';
        const passElement = "//input[@class='form-control']";
        expect($$(passElement)[1].setValue(password));
    });
    it('03/LP Should verify password IF accept valid data', () => {
        const signInBtn = "//button[@class='btn btn-lg btn-primary btn-block']";
        $(signInBtn).click();
        browser.pause(3000);
        const homeBtn = '//a[@class="navbar-brand"]';
        expect($(homeBtn).getText()).to.equal('Home');
    });
});

