import { createRequire } from 'module';
import { start } from 'repl';
const require = createRequire(import.meta.url);

const ical = require('node-ical');
const CALENDAR = 'https://calendar.google.com/calendar/ical/fed4287b9c43ffbee8f81e3d31b298f94b49389c7b82d63d849b98d8992b8a61%40group.calendar.google.com/public/basic.ics';
const events = await ical.async.fromURL(CALENDAR);

let startDays = [6,0,1,2,3,4,5];
let startOfWeek = new Date(2023, 2, 13);
startOfWeek.setDate(startOfWeek.getDate() - startDays[startOfWeek.getDay()]);

let endDays = [0,6,5,4,3,2,1];
let endOfWeek = new Date(2023, 2, 13);
endOfWeek.setDate(endOfWeek.getDate() + endDays[endOfWeek.getDay()]); 

export function getWhatsOn() {
    let eventList = 'Upcoming Events:\n';
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            const d = new Date(events[event].start)
            if (d >= startOfWeek && d <= endOfWeek)
            eventList += events[event].summary + '\n' + dayAndTime(d) + '\n\n';
        }
    }
    return eventList;
}

export function getWhatsOnToday() {

}

export function getWhatsOnTomorrow() {
    
}

function dayAndTime(d) {    
    const weekday = ["Sun ","Mon ","Tue ","Wed ","Thu ","Fri ","Sat "];
    const day = weekday[d.getDay()];
    
    const date = d.getDate();

    const months = [" Jan"," Feb"," Mar"," Apr"," May"," Jun"," Jul"," Aug"," Sep"," Oct"," Nov"," Dec"];
    const month = months[d.getMonth()];

    return day + date + month
}