Feature: Alarm


    Scenario: add a non-recurring alarm
        Given an user is on the scheduled alarms page
        When choice add an new alarm
        And choice non-recurring alarm
        Then a non-recurring alarm is scheduled

    Scenario Outline: Add a recurrent alarm
        Given an user is on the scheduled alarms page
        When choice add an new alarm
        And choice a type of recurrent alarm. type <type>
        Then a recurrent alarm is scheduled
        Examples:
            | type              |
            | 'Daily'           |
            | 'Advanced'        |
            | 'Date specific'   |
            | 'Countdown timer' |
            | 'On off days'     |
            | 'Hourly'          |




