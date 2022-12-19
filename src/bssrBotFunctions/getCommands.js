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
	return `
	Health Services:\n
	<u>health</u> --> details of UNSW health services, dentist, optometrist, counsellor, Helpline, Lifeline, duty tutor, and security\n\n
	`;
}

function dino() {
	return `
	Dino:\n
	<u>breakfast</u> --> get todays breakfast\n
	<u>lunch</u> --> get todays lunch\n
	<u>dinner</u> --> tonight ill be eating\n
	<u>dino</u> --> get todays menu\n
	<u>dino times</u> --> gives the times of dino breakfast lunch and dinner\n
	<u>dino feedback</u> --> leave feedback on your scrumptious meal!\n\n
	`
}

function college() {
	return `
	College:\n
	<u>laundry</u> --> get the link to the laundry portal\n
	<u>college</u> feedback --> write feedback for events or general college life\n
	<u>wildcat</u> --> wildcat of the week nomination form\n
	<u>recap</u> --> recappuccino\n
	<u>coffee night</u> --> submit photos or quotes for coffee night\n
	<u>whats on?</u> --> event scedule for the week\n
	<u>whats on today?</u> --> todays events\n
	<u>whats on tomorrow?</u> --> tomorrows events\n\n
	`
}

function fun() {
	return `
	Fun!:\n
	<u>crack a joke</u> --> bssr bot will tell you a joke\n
	<u>!! Secret quotes exist !!</u>--> input your friend's names and see if bssrbot has anything to say about them ;)\n\
	`
}