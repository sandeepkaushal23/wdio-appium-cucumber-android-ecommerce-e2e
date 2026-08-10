const {Given, When, Then} = require('cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Given(/^the Celsius Fahrenheit Converter app is launched$/, async () => {
    await celsiusToFahrenheitConvertorPage.launchApp();
});

Given(/^the app home screen is displayed$/, async () => {
    await celsiusToFahrenheitConvertorPage.verifyHomeScreenDisplayed();
});

When(/^I enter "([^"]*)" in the Celsius field$/, async (celsius) => {
    await celsiusToFahrenheitConvertorPage.enterCelsiusValue(celsius);
});

When(/^I tap the Convert Celsius to Fahrenheit button$/, async () => {
    await celsiusToFahrenheitConvertorPage.tapConvertCelsiusToFahrenheit();
});

When(/^I reset the temperature fields$/, async () => {
    await celsiusToFahrenheitConvertorPage.resetTemperatureFields();
});

Then(/^the Fahrenheit field should display "([^"]*)"$/, async (fahrenheit) => {
    await celsiusToFahrenheitConvertorPage.verifyFahrenheitValue(fahrenheit);
});
