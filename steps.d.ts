/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type getStartedView = typeof import('./views/getStarted-view.js');
type scheduledAlarmsView = typeof import('./views/scheduledAlarms-view.js');
type newScheduleAlarmView = typeof import('./views/newScheduleAlarm-view.js');
type offDaysView = typeof import('./views/offDays-view.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, getStartedView: getStartedView, scheduledAlarmsView: scheduledAlarmsView, newScheduleAlarmView: newScheduleAlarmView, offDaysView: offDaysView }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
