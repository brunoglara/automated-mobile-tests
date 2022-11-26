Feature: Alarm


  Scenario: add a non-recurring alarm
    Given an user is on the scheduled alarms page
    When choice add an new alarm
    And choice non-recurring alarm
    Then a non-recurring alarm is scheduled
