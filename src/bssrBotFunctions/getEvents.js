import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const ical = require('node-ical');
const CALENDAR = 'https://calendar.google.com/calendar/ical/fed4287b9c43ffbee8f81e3d31b298f94b49389c7b82d63d849b98d8992b8a61%40group.calendar.google.com/public/basic.ics';
const events = await ical.async.fromURL(CALENDAR);

export function getWhatsOn() {
    console.log('events', events)
    let eventList = '';
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            eventList += events[event].summary + '\t' + events[event].start + '\n\n';
        }
    }
    WhatsOn = eventList;
}

export function getWhatsOnToday() {

}

export function getWhatsOnTomorrow() {
    
}