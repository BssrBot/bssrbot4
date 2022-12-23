import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const ical = require('node-ical');
const CALENDAR = 'https://calendar.google.com/calendar/ical/fed4287b9c43ffbee8f81e3d31b298f94b49389c7b82d63d849b98d8992b8a61%40group.calendar.google.com/public/basic.ics';

export function getWhatsOn() {
    return ical.async.fromURL(CALENDAR, function(err, data) { console.log(data); });
}

export function getWhatsOnToday() {

}

export function getWhatsOnTomorrow() {
    
}