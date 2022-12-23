import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const ical = require('node-ical');
const CALENDAR = 'https://calendar.google.com/calendar/ical/fed4287b9c43ffbee8f81e3d31b298f94b49389c7b82d63d849b98d8992b8a61%40group.calendar.google.com/public/basic.ics';

export async function getWhatsOn() {
    const events = await ical.async.fromURL(CALENDAR);
    let eventList = '';
    for (const event in events) {
        if (events[event].type === 'VEVENT') {
            console.log(events[event]);
            eventList += events[event].summary + '\n\n';
        }
    }
    return eventList;
}

export function getWhatsOnToday() {

}

export function getWhatsOnTomorrow() {
    
}