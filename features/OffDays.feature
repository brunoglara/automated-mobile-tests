Feature: Off Days

    Scenario: Create an off day
        Given an user is on Off days page
        When choice add an new off day
        Then an off day is created
