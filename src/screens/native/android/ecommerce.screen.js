class EcommerceScreen {
    constructor() {
        const pkg = 'com.saucelabs.mydemoapp.android:id';

        // Catalog
        this.productsTitle = `//*[@resource-id="${pkg}/productTV" and @text="Products"]`;
        this.productRecycler = `//*[@resource-id="${pkg}/productRV"]`;
        this.productByTitle = (title) =>
            `//*[@resource-id="${pkg}/titleTV" and @text="${title}"]`;
        this.productImageByTitle = (title) =>
            `//*[@resource-id="${pkg}/titleTV" and @text="${title}"]/preceding-sibling::*[@resource-id="${pkg}/productIV"]`;

        // Product details
        this.productDetailTitle = (title) =>
            `//*[@resource-id="${pkg}/productTV" and @text="${title}"]`;
        this.productDetailPrice = `//*[@resource-id="${pkg}/priceTV"]`;
        this.colorByName = (color) => `//*[@content-desc="${color} color"]`;
        this.increaseQtyButton = `//*[@resource-id="${pkg}/plusIV"]`;
        this.addToCartButton = `//*[@resource-id="${pkg}/cartBt" and @text="Add to cart"]`;

        // Cart header / badge
        this.cartIcon = `//*[@content-desc="View cart"]`;
        this.cartBadge = `//*[@resource-id="${pkg}/cartTV"]`;

        // Cart screen
        this.myCartTitle = `//*[@resource-id="${pkg}/productTV" and @text="My Cart"]`;
        this.cartProductTitle = (title) =>
            `//*[@resource-id="${pkg}/titleTV" and @text="${title}"]`;
        this.cartTotalPrice = `//*[@resource-id="${pkg}/totalPriceTV"]`;
        this.proceedToCheckoutButton =
            `//*[@resource-id="${pkg}/cartBt" and @text="Proceed To Checkout"]`;
    }
}

module.exports = new EcommerceScreen();
