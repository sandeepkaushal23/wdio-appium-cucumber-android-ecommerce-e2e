Feature: Temperature conversion end-to-end workflow on native Android app
  As a mobile user
  I want to convert Celsius values to Fahrenheit
  So that I can validate temperature conversions across normal and edge cases

  @androidApp @temperature
  Scenario: Complete Celsius to Fahrenheit conversion workflow with validations
    Given the Celsius Fahrenheit Converter app is launched
    And the app home screen is displayed
    When I enter "0" in the Celsius field
    And I tap the Convert Celsius to Fahrenheit button
    Then the Fahrenheit field should display "32.0"
    When I reset the temperature fields
    And I enter "100" in the Celsius field
    And I tap the Convert Celsius to Fahrenheit button
    Then the Fahrenheit field should display "212.0"
    When I enter "-40" in the Celsius field
    And I tap the Convert Celsius to Fahrenheit button
    Then the Fahrenheit field should display "-40.0"
