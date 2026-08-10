const ActionHelper = require('./../helpers/actionHelpers');
const {expect} = require('chai');
const EcommerceScreen = require('./../screens/native/android/ecommerce.screen.js');

class EcommercePage {
    get screen() {
        return EcommerceScreen;
    }

    async launchApp() {
        await ActionHelper.launchApp();
        await ActionHelper.pause(3);
    }

    async verifyProductsCatalogDisplayed() {
        await ActionHelper.waitForElement(this.screen.productsTitle, 20);
        await ActionHelper.waitForElement(this.screen.productRecycler, 10);
        expect(await ActionHelper.isVisible(this.screen.productsTitle)).to.equal(true);
    }

    async openProduct(productTitle) {
        const imageLocator = this.screen.productImageByTitle(productTitle);
        const titleLocator = this.screen.productByTitle(productTitle);

        if (await ActionHelper.isVisible(imageLocator)) {
            await ActionHelper.click(imageLocator);
        } else {
            await ActionHelper.waitForElement(titleLocator, 10);
            await ActionHelper.click(titleLocator);
        }
        await ActionHelper.pause(2);
    }

    async verifyProductDetails(productTitle) {
        await ActionHelper.waitForElement(this.screen.productDetailTitle(productTitle), 15);
        expect(await ActionHelper.isVisible(this.screen.productDetailTitle(productTitle))).to.equal(true);
    }

    async increaseQuantity() {
        if (!(await ActionHelper.isVisible(this.screen.increaseQtyButton))) {
            await this.scrollDown();
        }
        await ActionHelper.waitForElement(this.screen.increaseQtyButton, 10);
        await ActionHelper.click(this.screen.increaseQtyButton);
    }

    async scrollDown() {
        // Tablet viewport needs a larger swipe; try scrollGesture then touch swipe
        try {
            await browser.execute('mobile: scrollGesture', {
                left: 400, top: 400, width: 1600, height: 900,
                direction: 'down', percent: 1.0
            });
        } catch (error) {
            // ignore and use fallback
        }
        try {
            await browser.touchAction([
                {action: 'press', x: 1280, y: 1300},
                {action: 'wait', ms: 300},
                {action: 'moveTo', x: 1280, y: 300},
                'release'
            ]);
        } catch (error) {
            await browser.execute('mobile: swipeGesture', {
                left: 400, top: 400, width: 1600, height: 900,
                direction: 'up', percent: 0.75
            });
        }
        await ActionHelper.pause(1);
    }

    async verifyProductPrice(expectedPrice) {
        if (!(await ActionHelper.isVisible(this.screen.productDetailPrice))) {
            await this.scrollDown();
        }
        await ActionHelper.waitForElement(this.screen.productDetailPrice, 10);
        const actual = await ActionHelper.getText(this.screen.productDetailPrice);
        expect(actual).to.equal(expectedPrice);
    }

    async selectColor(colorName) {
        if (!(await ActionHelper.isVisible(this.screen.colorByName(colorName)))) {
            await this.scrollDown();
        }
        await ActionHelper.waitForElement(this.screen.colorByName(colorName), 10);
        await ActionHelper.click(this.screen.colorByName(colorName));
    }

    async tapAddToCart() {
        if (!(await ActionHelper.isVisible(this.screen.addToCartButton))) {
            await this.scrollDown();
        }
        await ActionHelper.waitForElement(this.screen.addToCartButton, 10);
        await ActionHelper.click(this.screen.addToCartButton);
        await ActionHelper.pause(1);
    }

    async verifyCartBadge(expectedCount) {
        await ActionHelper.waitForElement(this.screen.cartBadge, 10);
        const actual = await ActionHelper.getText(this.screen.cartBadge);
        expect(actual).to.equal(expectedCount);
    }

    async openCart() {
        await ActionHelper.waitForElement(this.screen.cartIcon, 10);
        await ActionHelper.click(this.screen.cartIcon);
        await ActionHelper.pause(2);
    }

    async verifyCartScreenDisplayed() {
        await ActionHelper.waitForElement(this.screen.myCartTitle, 15);
        expect(await ActionHelper.isVisible(this.screen.myCartTitle)).to.equal(true);
    }

    async verifyCartContainsProduct(productTitle) {
        await ActionHelper.waitForElement(this.screen.cartProductTitle(productTitle), 10);
        expect(await ActionHelper.isVisible(this.screen.cartProductTitle(productTitle))).to.equal(true);
    }

    async verifyCartTotalPrice(expectedPrice) {
        await ActionHelper.waitForElement(this.screen.cartTotalPrice, 10);
        const actual = await ActionHelper.getText(this.screen.cartTotalPrice);
        expect(actual).to.equal(expectedPrice);
    }

    async verifyProceedToCheckoutVisible() {
        await ActionHelper.waitForElement(this.screen.proceedToCheckoutButton, 10);
        expect(await ActionHelper.isVisible(this.screen.proceedToCheckoutButton)).to.equal(true);
    }
}

module.exports = EcommercePage;
