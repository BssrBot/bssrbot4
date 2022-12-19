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
dino feedback --> leave feedback on your scrumptious meal!

College:
laundry --> get the link to the laundry portal
(Basser Only)
college feedback --> write feedback for events or general college life
wildcat --> wildcat of the week nomination form
recap --> recappuccino
coffee night --> submit photos or quotes for coffee night
whats on? --> event scedule for the week
whats on today? --> todays events
whats on tomorrow? --> tomorrows events
(Basser Only)

Fun!:
crack a joke --> bssr bot will tell you a joke
!! Secret quotes exist !! --> input your friends and see if bssrbot has anything to say about them

*/

export function getCommands() {
	return `COMMAND LIST\n\n` + health() + dino(); + college() + fun();
}

function health() {
	return `Health Services:\nhealth --> details of UNSW health services, dentist, optometrist, counsellor, Helpline, Lifeline, duty tutor, and security\n\n`;
}

function dino() {
	return `Dino:\nbreakfast --> get todays breakfast\nlunch --> get todays lunch\ndinner --> tonight ill be eating\ndino --> get todays menu\ndino times --> gives the times of dino breakfast lunch and dinner\ndino feedback --> leave feedback on your scrumptious meal!\n\n`
}

function college() {
	return `College:\nlaundry --> get the link to the laundry portal\ncollege feedback --> write feedback for events or general college life\nwildcat --> wildcat of the week nomination form\nrecap --> recappuccino\ncoffee night --> submit photos or quotes for coffee night\nwhats on? --> event scedule for the week\nwhats on today? --> todays events\nwhats on tomorrow? --> tomorrows events\n\n`
}

function fun() {
	return `Fun!:\ncrack a joke --> bssr bot will tell you a joke\n!! Secret quotes exist !!--> input your friend's names and see if bssrbot has anything to say about them ;)\n`
}