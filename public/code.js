const scriptProperties = PropertiesService.getScriptProperties();
const CALENDARID = scriptProperties.getProperty('calendarId');//カレンダーidの取得

/**
 * webpage側からのgoogleカレンダーを呼び出すことができる
 * @param {String} calendarId
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Array}
 */
function getCalendar(calendarId,startDate,endDate) {
    let calendar = CalendarApp.getCalendarById(calendarId);
    
    console.log(calendar.getName());
    let events = calendar.getEvents(startDate, endDate);
    let rdata = [];
    for (let i = 0; i < events.length; i++) {
        let event = events[i];
        rdata.push([
            event.getTitle(),
            event.getStartTime().getTime(),
            event.getEndTime().getTime()
        ]);
        rdata({
            title: event.getTitle(),
            start: event.getStartTime().getTime(),
            end: event.getEndTime().getTime()
        })
        // ここで予定情報を使用して何かを行います。
    }
    return rdata;
}

//テスト関数群

function _code_test0() {
    let today = new Date();
    let oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);//setするだけ

    console.log(getCalendar(CALENDARID, today, oneWeekLater));
}
