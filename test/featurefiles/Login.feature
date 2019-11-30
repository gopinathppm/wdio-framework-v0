Feature: To check the login function

  Scenario: verify the page is logging without any error

    Given I launch the application
    And I wait 5 seconds
    Then I verify the "privacy_link" text as "Privacy"
#    And I enter "username" in "u_name"
#    And I enter "password" in "pwd"
#    When I click on "submit"
#    Then I should see "header" value as "expectedValue"

