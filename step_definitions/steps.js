const { I, getStartedView, scheduledAlarmsView, newScheduleAlarmView } = inject();




Given('an user is on the scheduled alarms page', () => {
  getStartedView.skipStartedView();

  scheduledAlarmsView.isLoadScheduleAlarmPage();
});

When('choice add an new alarm', () => {
  scheduledAlarmsView.selectAddNewAlarm();
});

When('choice non-recurring alarm', () => {

  I.waitForVisible(newScheduleAlarmView.tutorial("txtVwAlarmEditRecurrence"), 10)
  I.click(newScheduleAlarmView.tutorial("txtVwAlarmEditRecurrence"))

  I.click(newScheduleAlarmView.tutorial("scrllVwAlarmEdit"))

  I.click(newScheduleAlarmView.tutorial("txtVwProfileSelect"))

  newScheduleAlarmView.typeRecurrence('No repeat')

});

Then('a non-recurring alarm is scheduled', async () => {

  const timeChosen = await newScheduleAlarmView.returnTime();

  I.click(newScheduleAlarmView.saveAlarmButton);

  scheduledAlarmsView.checkAddAlarm(timeChosen)

});
