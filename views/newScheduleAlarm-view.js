const { I } = inject();

const newScheduleAlarmView = {
    spinnerRecurrenceAlarm: "#com.amdroidalarmclock.amdroid:id/spnnrAlarmEditRecurrence",
    optionRecurrenceAlarm: (typeRecurrence) => `//*[@text = '${typeRecurrence}']`,
    saveAlarmButton: "#com.amdroidalarmclock.amdroid:id/alarmEditSave",
    inputTextNote: "#com.amdroidalarmclock.amdroid:id/edtTxtAlarmEditNote",
    textAdvancedRecurrence: "#com.amdroidalarmclock.amdroid:id/edtTxtAlarmEditAdvancedRecurrence",
    textStartHourlyRecurrence: "#com.amdroidalarmclock.amdroid:id/edtTxtAlarmEditFrom",
    modalOkButton: "#com.amdroidalarmclock.amdroid:id/done_button",
    tutorial: (tutorial) => `#com.amdroidalarmclock.amdroid:id/${tutorial}`,
    typeRecurrence,
    skipTutorials,
}

const awaitTime = 10;


function typeRecurrence(recurrence, textTest) {

    I.click(newScheduleAlarmView.spinnerRecurrenceAlarm)

    I.waitForVisible(newScheduleAlarmView.optionRecurrenceAlarm(recurrence), awaitTime);
    I.seeElement(newScheduleAlarmView.optionRecurrenceAlarm(recurrence))
    I.click(newScheduleAlarmView.optionRecurrenceAlarm(recurrence))

    if (recurrence === 'Advanced') {
        I.waitForVisible(newScheduleAlarmView.textAdvancedRecurrence, awaitTime);
        I.click(newScheduleAlarmView.textAdvancedRecurrence)

        I.waitForVisible(newScheduleAlarmView.modalOkButton, awaitTime);
        I.click(newScheduleAlarmView.modalOkButton)
    }

    I.fillField(newScheduleAlarmView.inputTextNote, textTest)

}

function skipTutorials() {
    I.waitForVisible(newScheduleAlarmView.tutorial("txtVwAlarmEditRecurrence"), 10)
    I.click(newScheduleAlarmView.tutorial("txtVwAlarmEditRecurrence"))

    I.click(newScheduleAlarmView.tutorial("scrllVwAlarmEdit"))

    I.click(newScheduleAlarmView.tutorial("txtVwProfileSelect"))
}





module.exports = newScheduleAlarmView;