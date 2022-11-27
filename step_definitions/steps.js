const { I, getStartedView, scheduledAlarmsView, newScheduleAlarmView, offDaysView } = inject();

let typeRecurrence;
const textTestEntry = "Automated Test Entry";


Given('an user is on the scheduled alarms page', () => {
  getStartedView.skipStartedView();

  scheduledAlarmsView.isLoadScheduleAlarmPage();
});

When('choice add an new alarm', () => {
  scheduledAlarmsView.selectAddNewAlarm();
});

When('choice non-recurring alarm', () => {

  newScheduleAlarmView.skipTutorials();

  newScheduleAlarmView.typeRecurrence('No repeat', textTestEntry)

});

Then('a non-recurring alarm is scheduled', async () => {


  I.click(newScheduleAlarmView.saveAlarmButton);

  scheduledAlarmsView.checkAddAlarm(textTestEntry)

});


// ---------------------------------------------------------------//
When('choice a type of recurrent alarm. type {string}', (type) => {
  newScheduleAlarmView.skipTutorials();

  newScheduleAlarmView.typeRecurrence(type, textTestEntry)

  typeRecurrence = type
});

Then('a recurrent alarm is scheduled', async () => {

  I.click(newScheduleAlarmView.saveAlarmButton);

  scheduledAlarmsView.checkAddAlarm(textTestEntry)
});


// ------------------------------------------------------------------------- //

Given('an user is on Off days page', () => {
  getStartedView.skipStartedView();

  scheduledAlarmsView.isLoadScheduleAlarmPage();
  scheduledAlarmsView.goToOffDays();

  offDaysView.isLoadOffDaysPage();

});

When('choice add an new off day', () => {
  offDaysView.addNewOffDay(textTestEntry);

});

Then('an off day is created', () => {
  offDaysView.isLoadOffDaysPage();

  offDaysView.checkAddOffDay(textTestEntry)
});
