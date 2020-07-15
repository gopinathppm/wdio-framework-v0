Feature: To check the login function

  Scenario: verify the page is logging without any error

    Given I launch the application
     And I wait 5 seconds
    Then I verify the "privacy_link" text as "Privacy"
     And I enter "hello" in "search_box"
