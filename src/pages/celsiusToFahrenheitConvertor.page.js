const ActionHelper = require('./../helpers/actionHelpers');
const {expect} = require('chai');

class CelsiusToFahrenhietConvertorPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/celsiusToFahrenheitConvertor.screen.js`);
    }

    async dismissAppRatingIfPresent() {
        // Dialog can appear slightly after launch; retry briefly
        for (let attempt = 0; attempt < 3; attempt++) {
            if (await ActionHelper.isVisible(this.getObjectLocator().rateAppMessage)) {
                await ActionHelper.click(this.getObjectLocator().laterButton);
                await ActionHelper.pause(1);
                return;
            }
            await ActionHelper.pause(1);
        }
    }

    async dismissPermissionDialogIfPresent() {
        if (await ActionHelper.isVisible(this.getObjectLocator().permissionContinueButton)) {
            await ActionHelper.click(this.getObjectLocator().permissionContinueButton);
            await ActionHelper.pause(1);
        }
    }

    async launchApp() {
        await ActionHelper.launchApp();
        await this.dismissPermissionDialogIfPresent();
        await this.dismissAppRatingIfPresent();
        await ActionHelper.pause(1);
    }

    async verifyHomeScreenDisplayed() {
        await this.dismissPermissionDialogIfPresent();
        await this.dismissAppRatingIfPresent();
        await ActionHelper.waitForElement(this.getObjectLocator().celsiusTextField, 15);
        await ActionHelper.waitForElement(this.getObjectLocator().fahrenheitTextField, 4);
        await ActionHelper.waitForElement(this.getObjectLocator().submitButton, 4);
        expect(await ActionHelper.isVisible(this.getObjectLocator().celsiusTextField)).to.equal(true);
        expect(await ActionHelper.isVisible(this.getObjectLocator().submitButton)).to.equal(true);
    }

    async enterCelsiusValue(celsiusValue) {
        await this.dismissAppRatingIfPresent();
        await ActionHelper.waitForElement(this.getObjectLocator().celsiusTextField, 4);
        await ActionHelper.clearText(this.getObjectLocator().celsiusTextField);
        await ActionHelper.sendText(this.getObjectLocator().celsiusTextField, celsiusValue);
    }

    async tapConvertCelsiusToFahrenheit() {
        await ActionHelper.waitForElement(this.getObjectLocator().submitButton, 4);
        await ActionHelper.click(this.getObjectLocator().submitButton);
    }

    async resetTemperatureFields() {
        await ActionHelper.waitForElement(this.getObjectLocator().resetButton, 4);
        await ActionHelper.click(this.getObjectLocator().resetButton);
        await ActionHelper.pause(1);
    }

    // Kept for existing sample scenario compatibility
    async enterCelsius(celsiusValue) {
        await this.enterCelsiusValue(celsiusValue);
        await this.tapConvertCelsiusToFahrenheit();
    }

    async verifyFahrenheitValue(fahrenheitValue) {
        await ActionHelper.waitForElement(this.getObjectLocator().fahrenheitTextField, 4);
        const actualValue = await ActionHelper.getText(this.getObjectLocator().fahrenheitTextField);
        expect(actualValue).to.equal(fahrenheitValue);
    }
}

module.exports = CelsiusToFahrenhietConvertorPage;
