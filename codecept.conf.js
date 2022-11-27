exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:/Users/Bruno/Cursos em andamento/Imersão Qualidade de Software - Projetos/TCC/Mobile/Alarm-Clock-for-Heavy-Sleepers.5.3.2.apk',
      platform: 'Android',
      device: 'emulator',
      desiredCapabilities: {
        appWaitActivity: '*'
      }
    }
  },
  include: {
    I: './steps_file.js',
    getStartedView: './views/getStarted-view.js',
    scheduledAlarmsView: './views/scheduledAlarms-view.js',
    newScheduleAlarmView: './views/newScheduleAlarm-view.js',
    offDaysView: './views/offDays-view.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  name: 'automated-mobile-tests'
}