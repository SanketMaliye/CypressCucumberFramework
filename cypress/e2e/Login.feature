Feature: Login Functionality.

Background: 
    Given user is on login page

Scenario: Login Check By Valid Username and Password.
    # When user provide 'student' and 'Password123'
    When user provide login details as follows
        | Username | Password    |
        | student  | Password123 |
    Then user should be logged in successfully.
    Then user verified the 'Logged In Successfully | Practice Test Automation'