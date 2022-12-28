import { createRequire } from 'module';
import { start } from 'repl';
const require = createRequire(import.meta.url);

const ical = require('node-ical');
const CALENDAR = 'https://calendar.google.com/calendar/ical/fed4287b9c43ffbee8f81e3d31b298f94b49389c7b82d63d849b98d8992b8a61%40group.calendar.google.com/public/basic.ics';
const events = await ical.async.fromURL(CALENDAR);

let endOfWeek = new Date();
endOfWeek.setDate(endOfWeek.getDate() + 7); 

export function getWhatsOn() {
    let eventList = [];
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            const d = new Date(events[event].start)
            if (d < endOfWeek)
            eventList.unshift(dayAndTime(d) + '\n' + events[event].summary  + '\n\n');
        }
    }
    if (eventList.length === 0) {
        eventList.unshift('No Upcoming Events :(\n');
    } else {
        eventList.unshift('Upcoming Events:\n');
    }
    return eventList.join('');
}

export function getWhatsOnToday() {
    let eventList = [];
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            const d = new Date(events[event].start)
            if (d === new Date())
            eventList.unshift(events[event].summary  + '\n\n');
        }
    }
    if (eventList.length === 0) {
        eventList.unshift('No Events Today :(\n');
    } else {
        eventList.unshift('Events Today, ' + dayAndTime(d) + ':\n');
    }
    return eventList.join('');
}

export function getWhatsOnTomorrow() {
    let eventList = [];
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            const d = new Date(events[event].start)
            
            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)

            if (d === tomorrow)
            eventList.unshift(events[event].summary  + '\n\n');
        }
    }
    if (eventList.length === 0) {
        eventList.unshift('No Events Tomorrow :(\n');
    } else {
        eventList.unshift('Events Tomorrow, ' + dayAndTime(d) + ':\n');
    }
    return eventList.join('');
}

function dayAndTime(d) {    
    const weekday = ["Sun ","Mon ","Tue ","Wed ","Thu ","Fri ","Sat "];
    const day = weekday[d.getDay()];
    
    const date = d.getDate();

    const months = [" Jan"," Feb"," Mar"," Apr"," May"," Jun"," Jul"," Aug"," Sep"," Oct"," Nov"," Dec"];
    const month = months[d.getMonth()];

    return day + date + month
}