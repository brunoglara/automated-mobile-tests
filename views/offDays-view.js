const { I } = inject();

const assert = require('assert');

const offDaysView = {
    addOffDayButton: "#com.amdroidalarmclock.amdroid:id/fab",
    modalAddNewOffDayButton: "//*[@resource-id = 'com.amdroidalarmclock.amdroid:id/md_title' and @text='Add new Off Day']",
    inputNameOffDay: "#com.amdroidalarmclock.amdroid:id/edtTxtffDaysAddEditDialogName",
    modalOkOffDayButton: "#com.amdroidalarmclock.amdroid:id/md_buttonDefaultPositive",
    textNameOffDayAdded: "#com.amdroidalarmclock.amdroid:id/txtVwOffDaysName",
    isLoadOffDaysPage,
    addNewOffDay,
    checkAddOffDay,
}

const awaitTime = 10;

function isLoadOffDaysPage() {
    I.waitForVisible(offDaysView.addOffDayButton, awaitTime);
    I.seeElement(offDaysView.addOffDayButton)
}

function addNewOffDay(textTest) {
    I.click(offDaysView.addOffDayButton);

    I.waitForVisible(offDaysView.modalAddNewOffDayButton, awaitTime);
    I.click(offDaysView.modalAddNewOffDayButton);

    I.waitForVisible(offDaysView.inputNameOffDay, awaitTime);
    I.fillField(offDaysView.inputNameOffDay, textTest)

    I.click(offDaysView.modalOkOffDayButton);
}

async function checkAddOffDay(textTest) {
    const nameOffDay = await I.grabTextFrom(offDaysView.textNameOffDayAdded)


    assert.equal(textTest, nameOffDay)

}






module.exports = offDaysView;