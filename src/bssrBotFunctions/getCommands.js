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
	return 'COMMAND LIST\n\
	Health Services:\n\
	health --> details of UNSW health services, dentist, optometrist, counsellor, Helpline, Lifeline, duty tutor, and security\n\n\
	Dino:\n\
	breakfast --> get todays breakfast\n\
	lunch --> get todays lunch\n\
	dinner --> tonight ill be eating\n\
	dino --> get todays menu\n\
	dino times --> gives the times of dino breakfast lunch and dinner\n\
	dino feedback --> leave feedback on your scrumptious meal!\n\n\
	College:\n\
	laundry --> get the link to the laundry portal\n\
	college feedback --> write feedback for events or general college life\n\
	wildcat --> wildcat of the week nomination form\n\
	recap --> recappuccino\n\
	coffee night --> submit photos or quotes for coffee night\n\
	whats on? --> event scedule for the week\n\
	whats on today? --> todays events\n\
	whats on tomorrow? --> tomorrows events\n\n\
	Fun!:\n\
	crack a joke --> bssr bot will tell you a joke\n\
	!! Secret quotes exist !! --> input your friends and see if bssrbot has anything to say about them\n\
	'
}