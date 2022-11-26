const { I } = inject();

const newScheduleAlarmView = {
    spinnerRecurrenceAlarm: "#com.amdroidalarmclock.amdroid:id/spnnrAlarmEditRecurrence",
    optionRecurrenceAlarm: (typeRecurrence) => `//*[@text = '${typeRecurrence}']`,
    saveAlarmButton: "#com.amdroidalarmclock.amdroid:id/alarmEditSave",
    textTime: "#com.amdroidalarmclock.amdroid:id/edtTxtAlarmEditTime",
    mainView: "#com.amdroidalarmclock.amdroid:id/scrllVwAlarmEdit",
    tutorial: (tutorial) => `#com.amdroidalarmclock.amdroid:id/${tutorial}`,
    typeRecurrence,
    returnTime,
}

const awaitTime = 10;


function typeRecurrence(recurrence) {

    I.click(newScheduleAlarmView.spinnerRecurrenceAlarm)

    I.waitForVisible(newScheduleAlarmView.optionRecurrenceAlarm(recurrence), awaitTime);
    I.seeElement(newScheduleAlarmView.optionRecurrenceAlarm(recurrence))
    I.click(newScheduleAlarmView.optionRecurrenceAlarm(recurrence))

}

function returnTime() {
    const time = I.grabTextFrom(newScheduleAlarmView.textTime);

    return time

}



module.exports = newScheduleAlarmView;