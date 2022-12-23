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
endOfWeek.setDate(endOfWeek.getDate() - endDays[endOfWeek.getDay()]); 

export function getWhatsOn() {
    let eventList = 'Upcoming Events:\n';
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            console.log('Start:', startOfWeek, 'End:', endOfWeek);
            console.log(new Date(events[event].summary) >= startOfWeek, new Date(events[event].summary));
            if (new Date(events[event].summary) >= startOfWeek && new Date(events[event].summary) <= endOfWeek)
            eventList += events[event].summary + '\t' + events[event].start + '\n\n';
        }
    }
    return eventList;
}

export function getWhatsOnToday() {

}

export function getWhatsOnTomorrow() {
    
}