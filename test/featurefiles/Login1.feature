Feature: To check the login function

  Scenario: verify the page is logging without any error

    Given I launch the application
     When I click on "agree_popup"
     Then I validate the title of the page as "title"
      And I enter "xxx" in "uname"
      And I enter "yyy" in "pwd"
#     Then I click on "login"
