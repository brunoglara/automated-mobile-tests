const { I } = inject();

const assert = require('assert');


const scheduledAlarmsView = {
    feedbackGotItButton: "#com.amdroidalarmclock.amdroid:id/bttnInfoGotIt",
    titleScheduledAlarms: "#com.amdroidalarmclock.amdroid:id/txtVwExpandedTitle",
    addAlarmButton: "#com.amdroidalarmclock.amdroid:id/fab",
    textAlarmTime: "#com.amdroidalarmclock.amdroid:id/txtVwAlarmTime",
    isLoadScheduleAlarmPage,
    selectAddNewAlarm,
    checkAddAlarm
}

const awaitTime = 10;


function isLoadScheduleAlarmPage() {
    I.waitForVisible(scheduledAlarmsView.feedbackGotItButton, awaitTime);
    I.seeElement(scheduledAlarmsView.feedbackGotItButton)
    I.click(scheduledAlarmsView.feedbackGotItButton)

    I.waitForVisible(scheduledAlarmsView.titleScheduledAlarms, awaitTime);
    I.seeElement(scheduledAlarmsView.titleScheduledAlarms)
}

function selectAddNewAlarm() {
    I.click(scheduledAlarmsView.addAlarmButton)
}

async function checkAddAlarm(timeChosen) {

    I.waitForVisible(scheduledAlarmsView.titleScheduledAlarms, awaitTime);
    const timeScheduled = await I.grabTextFrom(scheduledAlarmsView.textAlarmTime)

    assert.equal(timeChosen, timeScheduled)

}




module.exports = scheduledAlarmsView;
