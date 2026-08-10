const {Given, When, Then} = require('cucumber');
const EcommercePage = require('./../pages/ecommerce.page');

const ecommercePage = new EcommercePage();

Given(/^the My Demo App is launched$/, async () => {
    await ecommercePage.launchApp();
});

Given(/^the products catalog screen is displayed$/, async () => {
    await ecommercePage.verifyProductsCatalogDisplayed();
});

When(/^I open the product "([^"]*)"$/, async (productTitle) => {
    await ecommercePage.openProduct(productTitle);
});

Then(/^the product details screen should show title "([^"]*)"$/, async (productTitle) => {
    await ecommercePage.verifyProductDetails(productTitle);
});

Then(/^the product price should be "([^"]*)"$/, async (price) => {
    await ecommercePage.verifyProductPrice(price);
});

When(/^I select the product color "([^"]*)"$/, async (color) => {
    await ecommercePage.selectColor(color);
});

When(/^I increase the product quantity$/, async () => {
    await ecommercePage.increaseQuantity();
});

When(/^I tap Add to Cart$/, async () => {
    await ecommercePage.tapAddToCart();
});

Then(/^the cart badge should show "([^"]*)"$/, async (count) => {
    await ecommercePage.verifyCartBadge(count);
});

When(/^I open the cart$/, async () => {
    await ecommercePage.openCart();
});

Then(/^the cart screen should be displayed$/, async () => {
    await ecommercePage.verifyCartScreenDisplayed();
});

Then(/^the cart should contain product "([^"]*)"$/, async (productTitle) => {
    await ecommercePage.verifyCartContainsProduct(productTitle);
});

Then(/^the cart total price should be "([^"]*)"$/, async (price) => {
    await ecommercePage.verifyCartTotalPrice(price);
});

Then(/^the Proceed To Checkout button should be visible$/, async () => {
    await ecommercePage.verifyProceedToCheckoutVisible();
});
