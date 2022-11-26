const { I } = inject();

const getStartedView = {
    skipButton: "#com.amdroidalarmclock.amdroid:id/skip",
    welcomeLabel: "#com.amdroidalarmclock.amdroid:id/title",
    skipStartedView,
}

function skipStartedView() {
    I.waitForVisible(getStartedView.welcomeLabel, 10);
    I.seeElement(getStartedView.welcomeLabel);


    I.click(getStartedView.skipButton);
}

module.exports = getStartedView;
