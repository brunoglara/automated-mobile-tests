const { I } = inject();

const assert = require('assert');


const scheduledAlarmsView = {
    feedbackGotItButton: "#com.amdroidalarmclock.amdroid:id/bttnInfoGotIt",
    titleScheduledAlarms: "#com.amdroidalarmclock.amdroid:id/txtVwExpandedTitle",
    menuButton: "//*[@class = 'android.widget.ImageButton' and not(@resource-id)]",
    menuOffDays: "//*[@resource-id='com.amdroidalarmclock.amdroid:id/design_menu_item_text' and @text='Off days']",
    addAlarmButton: "#com.amdroidalarmclock.amdroid:id/fab",
    textAlarmNote: "#com.amdroidalarmclock.amdroid:id/txtVwAlarmNote",
    isLoadScheduleAlarmPage,
    selectAddNewAlarm,
    checkAddAlarm,
    goToOffDays
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

async function checkAddAlarm(textTest) {

    I.waitForVisible(scheduledAlarmsView.titleScheduledAlarms, awaitTime);
    const textNote = await I.grabTextFrom(scheduledAlarmsView.textAlarmNote)

    assert.equal(textTest, textNote)
}

function goToOffDays() {
    I.click(scheduledAlarmsView.menuButton);

    I.waitForVisible(scheduledAlarmsView.menuOffDays, awaitTime);
    I.click(scheduledAlarmsView.menuOffDays);
}




module.exports = scheduledAlarmsView;
