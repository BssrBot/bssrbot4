// Command List
/*
COMMAND LIST
Health Services:
health --> details of UNSW health services, dentist, optometrist, counsellor, Lifeline, duty tutor, and security

Dino:
breakfast --> get todays breakfast
lunch --> get todays lunch
dinner --> tonight ill be eating
dino --> get todays menu
dino times --> gives the times of dino breakfast lunch and dinner

College:
laundry --> get the link to the laundry portal
(Basser Only)
feedback --> write feedback for events or general college life
wildcat --> wildcat of the week nomination form
recap --> recappuccino
whats on? --> event scedule for the week
whats on today? --> todays events
whats on tomorrow? --> tomorrows events
(Basser Only)

Fun!:
crack a joke --> bssr bot will tell you a joke
!! Secret quotes exist !! --> input your friends and see if bssrbot has anything to say about them

*/
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//Emojis package, pretty self explanatory
const emoji = require('node-emoji');

export function getCommands() {
	return `COMMAND LIST\n\n` + health() + dino() + college() + fun();
}

function health() {
	const hospital = emoji.get('hospital');
	return `Health Services ${hospital}:\nhealth --> details of UNSW health services, dentist, optometrist, counsellor, Helpline, Lifeline, duty tutor, and security\n\n\n`;
}

function dino() {
	const dino = emoji.get('knife_fork_plate')
	return `Dino ${dino}:\nbreakfast --> get todays breakfast\n\nlunch --> get todays lunch\n\ndinner --> tonight ill be eating\n\ndino --> get todays menu\n\ndino times --> gives the times of dino breakfast lunch and dinner\n\n\n`
}

function college() {
	const college = emoji.get('heart') + emoji.get('blue_heart') + emoji.get('white_heart')
	return `College ${college}:\nlaundry --> get the link to the laundry portal\n\nfeedback --> write feedback for events or general college life\n\nwildcat --> wildcat of the week nomination form\n\nrecap --> recappuccino\n\nwhats on? --> event scedule for the week\n\nwhats on today? --> todays events\n\nwhats on tomorrow? --> tomorrows events\n\n\n`
}

function fun() {
	const fun = emoji.get('tada')
	return `Fun! ${fun}:\ncrack a joke --> bssr bot will tell you a joke\n\n!! Secret quotes exist !!--> input your friend's names and see if bssrbot has anything to say about them ;)\n`
}

