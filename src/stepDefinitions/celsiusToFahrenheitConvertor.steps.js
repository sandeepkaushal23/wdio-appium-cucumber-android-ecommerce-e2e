const {Given, When, Then} = require('cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Given(/^I launch the app$/, async () => {
    await celsiusToFahrenheitConvertorPage.launchApp();
});

When(/^I enter celsius of (.*)$/, async (celsius) => {
    await celsiusToFahrenheitConvertorPage.enterCelsius(celsius);
});

Then(/^I should see fahrenheit of (.*)$/, async (fahrenheit) => {
    await celsiusToFahrenheitConvertorPage.verifyFahrenheitValue(fahrenheit);
});
