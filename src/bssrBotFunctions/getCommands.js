// Command List
/*
COMMAND LIST
Health Services:
health --> details of UNSW health services, dentist, optometrist, counsellor, Lifeline, duty tutor, and security

Dino:
breakfast --> get todays breakfast
lunch --> get todays lunch
dinner --> tonight ill be eating
dino --> get the closest meal timewise sent to you
dino times --> gives the times of dino breakfast brunch, lunch and dinner

College:
laundry --> get the link to the laundry portal
(Basser Only)
feedback --> write feedback for events or general college life
events --> event schedule for the week
whats on today --> see what events are on today
whats on tomorrow --> see whats events are on tomorrow
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
	return `Dino ${dino}:\nbreakfast --> get todays breakfast\n\nlunch --> get todays lunch\n\ndinner --> tonight ill be eating\n\ndino --> get the closest meal timewise sent to you\n\ndino times --> gives the times of dino breakfast, brunch, lunch and dinner\n\n\n`
}

function college() {
	const college = emoji.get('heart') + emoji.get('blue_heart') + emoji.get('white_heart')
	return `College ${college}:\nlaundry --> get the link to the laundry portal\n\nfeedback --> write feedback for events or general college life\n\nevents --> event schedule for the week\n\nwhats on today --> see what events are on today\n\nwhats on tomorrow --> see whats events are on tomorrow\n\n`
}

function fun() {
	const fun = emoji.get('tada')
	return `Fun! ${fun}:\ncrack a joke --> bssr bot will tell you a joke\n\n!! Secret quotes exist !!--> input your friend's names and see if bssrbot has anything to say about them ;)\n`
}

