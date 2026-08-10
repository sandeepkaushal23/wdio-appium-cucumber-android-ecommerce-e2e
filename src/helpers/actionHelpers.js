class ActionHelper {

    static async launchBrowserUrl(urlToLaunch) {
        await browser.url(urlToLaunch);
    }

    static async getTitle() {
        return browser.getTitle();
    }

    static async launchApp() {
        // App launches automatically via appPackage/appActivity on session start (Appium 2+)
        await ActionHelper.switchToNativeContext();
    }

    static async switchToNativeContext() {
        await browser.switchContext('NATIVE_APP');
    }

    static async pause(seconds) {
        await browser.pause(seconds * 1000);
    }

    static async isVisible(locator) {
        try {
            const element = await $(locator);
            return await element.isDisplayed();
        } catch (error) {
            return false;
        }
    }

    static async click(locator) {
        const element = await $(locator);
        await element.click();
    }

    static async waitForElement(locator, waitTimeInSeconds) {
        const element = await $(locator);
        await element.waitForDisplayed({timeout: waitTimeInSeconds * 1000});
    }

    static async clearText(locator) {
        const element = await $(locator);
        await element.clearValue();
    }

    static async sendText(locator, inputText) {
        const element = await $(locator);
        await element.addValue(inputText);
    }

    static async getText(locator) {
        const element = await $(locator);
        return element.getText();
    }
}

module.exports = ActionHelper;
