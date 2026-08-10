Feature: Basic e-commerce purchase flow on native Android app
  As a mobile shopper
  I want to browse a product, add it to cart, and review cart totals
  So that I can validate a core shopping journey end to end

  @androidApp @e2e
  Scenario: Add Sauce Labs Backpack to cart and verify cart details
    Given the My Demo App is launched
    And the products catalog screen is displayed
    When I open the product "Sauce Labs Backpack"
    Then the product details screen should show title "Sauce Labs Backpack"
    And the product price should be "$ 29.99"
    When I select the product color "Blue"
    And I increase the product quantity
    And I tap Add to Cart
    Then the cart badge should show "2"
    When I open the cart
    Then the cart screen should be displayed
    And the cart should contain product "Sauce Labs Backpack"
    And the cart total price should be "$ 59.98"
    And the Proceed To Checkout button should be visible
