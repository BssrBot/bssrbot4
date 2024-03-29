import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const XLSX = require("xlsx");
const workbook = XLSX.readFile("./src/bssrBotFunctions/menu/menu.xlsx");
const emoji = require('node-emoji');

const workbookWeek1 = workbook.Sheets["Week 1"];
const workbookWeek2 = workbook.Sheets["Week 2"];
const workbookWeek3 = workbook.Sheets["Week 3"];

// Testing outputs
const week1Data = XLSX.utils.sheet_to_json(workbookWeek1);
const week2Data = XLSX.utils.sheet_to_json(workbookWeek2);
const week3Data = XLSX.utils.sheet_to_json(workbookWeek3);
// Match this to current week every time you deploy to bssrbot
const WEEKADJUSTFACTOR = 1;

export function setMenuWeek(text) {
	let newText = text.replace("set menu week", "");
	CURRENT_WEEK = parseInt(newText);
}

function getCurrentWeek() {

	// Calculate current week number
	let currentDate = new Date();
	let startDate = new Date(currentDate.getFullYear(), 0, 1);
	let days = Math.floor((currentDate - startDate) /
		(24 * 60 * 60 * 1000));

	let weekNumber = Math.ceil(days / 7);

	//console.log(weekNumber);
	let dinoWeekNumber = (weekNumber + WEEKADJUSTFACTOR) % 3 + 1;
	let dinoNumber2024 = 0;
	switch (dinoWeekNumber) {
		case 1:
			dinoNumber2024 = 3;
			break;
		case 2:
			dinoNumber2024 = 1;
			break;
		case 3:
			dinoNumber2024 = 2;
			break;
		default:
			dinoNumber2024 = 0;
	}

	console.log("dino week number is", dinoWeekNumber)
	console.log("dino 2024 week number is", dinoNumber2024)
	return dinoNumber2024; // yeah fuck you this is enough

}
/*
getCurrentWeek();
console.log(Breakfast(getCurrentWeek()));
console.log('\n\n');
console.log(Lunch(getCurrentWeek()));
console.log('\n\n');
console.log(Dinner(getCurrentWeek()));
*/

export function isDinoMeal(text) {
	if (text === 'dino' || text === 'breakfast' || text === 'lunch' || text === 'dinner') {
		return true;
	} else {
		return false;
	}
}

//DINO TIMES
export function getDinoTimes() {
	const dinoString = "Breakfast: 7:30-10:00am\nBrunch(Weekends Only): 10:00am-12:00pm\nLunch: 12:00-2:15pm\nDinner: 5:00-7:30pm\nSeconds are last 15 minutes of each meal";
	return dinoString;
}

export function getDino() {
	let text = "";
	const timeNow = new Date();
	let hours = timeNow.getHours();
	let week = getCurrentWeek();
	if (hours < 10 || hours >= 20) {
		text = Breakfast(week);
	}
	if (hours >= 10 && hours < 15) {
		text = Lunch(week);
	}
	if (hours >= 15 && hours < 20) {
		text = Dinner(week);
	}
	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": text,
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}
////////////////////////////////////////////////////////////////////////////////////////////////////

export function getBreakfast() {

	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": Breakfast(getCurrentWeek()),
			//Might need to update these urls(ask Dean/Ops n Comms perhaps)
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

function Breakfast(week) {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let textString = "";
	let tempCurrentWeek = week;
	if (hours >= 12) {
		day = (day + 1) % 7;
		flag = true;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		if (tempCurrentWeek === 0) {
			tempCurrentWeek = 3;
		}
	}
	const dino = emoji.get('knife_fork_plate')
	if (tempCurrentWeek === 1) {
		if (day === 0) {
			textString = week1Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Sunday
		}
		if (day === 1) {
			textString = week1Data[0].Monday
		}
		if (day === 2) {
			textString = week1Data[0].Tuesday
		}
		if (day === 3) {
			textString = week1Data[0].Wednesday
		}
		if (day === 4) {
			textString = week1Data[0].Thursday
		}
		if (day === 5) {
			textString = week1Data[0].Friday
		}
		if (day === 6) {
			textString = week1Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Saturday
		}
	}
	if (tempCurrentWeek === 2) {
		if (day === 0) {
			textString = week2Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week2Data[1].Sunday
		}
		if (day === 1) {
			textString = week2Data[0].Monday
		}
		if (day === 2) {
			textString = week2Data[0].Tuesday
		}
		if (day === 3) {
			textString = week2Data[0].Wednesday
		}
		if (day === 4) {
			textString = week2Data[0].Thursday
		}
		if (day === 5) {
			textString = week2Data[0].Friday
		}
		if (day === 6) {
			textString = week2Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week2Data[1].Saturday
		}
	}
	if (tempCurrentWeek === 3) {
		if (day === 0) {
			textString = week3Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week3Data[1].Sunday
		}
		if (day === 1) {
			textString = week3Data[0].Monday
		}
		if (day === 2) {
			textString = week3Data[0].Tuesday
		}
		if (day === 3) {
			textString = week3Data[0].Wednesday
		}
		if (day === 4) {
			textString = week3Data[0].Thursday
		}
		if (day === 5) {
			textString = week3Data[0].Friday
		}
		if (day === 6) {
			textString = week3Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week3Data[1].Saturday
		}


	}
	if (flag === false) {
		textString = "Breakfast\n\n" + textString;
	}
	if (flag === true) {
		textString = "Breakfast Tomorrow\n\n" + textString;
	}
	return textString;

}
////////////////////////////////////////////////////////////////////////////////////////////////////

export function getLunch() {
	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": Lunch(getCurrentWeek()),
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}
function Lunch(week) {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = week;
	let textString = "";
	if (hours >= 15) {
		day = (day + 1) % 7;
		flag = true;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		if (tempCurrentWeek === 0) {
			tempCurrentWeek = 3;
		}
	}
	if (tempCurrentWeek === 1) {
		if (day === 0) {
			textString = week1Data[2].Sunday
		}
		if (day === 1) {
			textString = week1Data[2].Monday
		}
		if (day === 2) {
			textString = week1Data[2].Tuesday
		}
		if (day === 3) {
			textString = week1Data[2].Wednesday
		}
		if (day === 4) {
			textString = week1Data[2].Thursday
		}
		if (day === 5) {
			textString = week1Data[2].Friday
		}
		if (day === 6) {
			textString = week1Data[2].Saturday
		}
	}
	if (tempCurrentWeek === 2) {
		if (day === 0) {
			textString = week2Data[2].Sunday
		}
		if (day === 1) {
			textString = week2Data[2].Monday
		}
		if (day === 2) {
			textString = week2Data[2].Tuesday
		}
		if (day === 3) {
			textString = week2Data[2].Wednesday
		}
		if (day === 4) {
			textString = week2Data[2].Thursday
		}
		if (day === 5) {
			textString = week2Data[2].Friday
		}
		if (day === 6) {
			textString = week2Data[2].Saturday
		}
	}
	if (tempCurrentWeek === 3) {
		if (day === 0) {
			textString = week3Data[2].Sunday
		}
		if (day === 1) {
			textString = week3Data[2].Monday
		}
		if (day === 2) {
			textString = week3Data[2].Tuesday
		}
		if (day === 3) {
			textString = week3Data[2].Wednesday
		}
		if (day === 4) {
			textString = week3Data[2].Thursday
		}
		if (day === 5) {
			textString = week3Data[2].Friday
		}
		if (day === 6) {
			textString = week3Data[2].Saturday
		}

	}
	if (flag === false) {
		textString = "Lunch\n\n" + textString;
	}
	if (flag === true) {
		textString = "Lunch Tomorrow\n\n" + textString;
	}
	return textString;
}
////////////////////////////////////////////////////////////////////////////////////////////////////

export function getDinner() {
	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": Dinner(getCurrentWeek()),
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}
// placeholder function
function Dinner(week) {
	const timeNow = new Date()
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = week;
	let textString = "";
	if (hours >= 20) {
		day = (day + 1) % 7;
		flag = true;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		if (tempCurrentWeek === 0) {
			tempCurrentWeek = 3;
		}
	}
	//WEEK 1
	if (tempCurrentWeek === 1) {
		if (day === 0) {
			textString = week1Data[3].Sunday
		}
		if (day === 1) {
			textString = week1Data[3].Monday
		}
		if (day === 2) {
			textString = week1Data[3].Tuesday
		}
		if (day === 3) {
			textString = week1Data[3].Wednesday
		}
		if (day === 4) {
			textString = week1Data[3].Thursday
		}
		if (day === 5) {
			textString = week1Data[3].Friday
		}
		if (day === 6) {
			textString = week1Data[3].Saturday
		}
	}
	//WEEK 2
	if (tempCurrentWeek === 2) {
		if (day === 0) {
			textString = week2Data[3].Sunday
		}
		if (day === 1) {
			textString = week2Data[3].Monday
		}
		if (day === 2) {
			textString = week2Data[3].Tuesday
		}
		if (day === 3) {
			textString = week2Data[3].Wednesday
		}
		if (day === 4) {
			textString = week2Data[3].Thursday
		}
		if (day === 5) {
			textString = week2Data[3].Friday
		}
		if (day === 6) {
			textString = week2Data[3].Saturday
		}
	}
	//WEEK 3
	if (tempCurrentWeek === 3) {
		if (day === 0) {
			textString = week3Data[3].Sunday
		}
		if (day === 1) {
			textString = week3Data[3].Monday
		}
		if (day === 2) {
			textString = week3Data[3].Tuesday
		}
		if (day === 3) {
			textString = week3Data[3].Wednesday
		}
		if (day === 4) {
			textString = week3Data[3].Thursday
		}
		if (day === 5) {
			textString = week3Data[3].Friday
		}
		if (day === 6) {
			textString = week3Data[3].Saturday
		}
	}
	if (flag === false) {
		textString = "Tonight I'll be eating\n\n" + textString;
	}
	if (flag === true) {
		textString = "Tomorrow night I'll be eating\n\n" + textString;
	}
	return textString;
}
////////////////////////////////////////////////////////////////////////////////////////////////////

// Get dino stuff on another day. Couldn't be bothered to change above functions. inefficient but oh well

export function getBreakfastAnotherDay(text) {
	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": BreakfastDiffDay(getCurrentWeek(), text),
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}
//console.log(BreakfastDiffDay(getCurrentWeek(), 'breakfasttomorrow'));

function BreakfastDiffDay(week, text) {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = week;
	let newText = text.replace("breakfast", "");
	if (newText === 'tomorrow') {
		day++;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		if (day === 7) {
			day = 0;
		}
		if (tempCurrentWeek === 0) {
			tempCurrentWeek = 3;
		}
	} else if (newText === 'monday') {
		if (day === 0 || day > 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 1;
	} else if (newText === 'tuesday') {
		if (day === 0 || day > 2) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 2;
	} else if (newText === 'wednesday') {
		if (day === 0 || day > 3) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 3;
	} else if (newText === 'thursday') {
		if (day === 0 || day > 4) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 4;
	} else if (newText === 'friday') {
		if (day === 0 || day > 5) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 5;
	} else if (newText === 'saturday') {
		if (day === 0) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 6;
	} else if (newText === 'sunday') {
		day = 0;
	}
	if (tempCurrentWeek === 0) {
		tempCurrentWeek = 3;
	}
	let textString = "";
	const dino = emoji.get('knife_fork_plate')
	if (tempCurrentWeek === 1) {
		if (day === 0) {
			textString = week1Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Sunday
		}
		if (day === 1) {
			textString = week1Data[0].Monday
		}
		if (day === 2) {
			textString = week1Data[0].Tuesday
		}
		if (day === 3) {
			textString = week1Data[0].Wednesday
		}
		if (day === 4) {
			textString = week1Data[0].Thursday
		}
		if (day === 5) {
			textString = week1Data[0].Friday
		}
		if (day === 6) {
			textString = week1Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Saturday
		}
	}
	if (tempCurrentWeek === 2) {
		if (day === 0) {
			textString = week2Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week2Data[1].Sunday
		}
		if (day === 1) {
			textString = week2Data[0].Monday
		}
		if (day === 2) {
			textString = week2Data[0].Tuesday
		}
		if (day === 3) {
			textString = week2Data[0].Wednesday
		}
		if (day === 4) {
			textString = week2Data[0].Thursday
		}
		if (day === 5) {
			textString = week2Data[0].Friday
		}
		if (day === 6) {
			textString = week2Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week2Data[1].Saturday
		}
	}
	if (tempCurrentWeek === 3) {
		if (day === 0) {
			textString = week3Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week3Data[1].Sunday
		}
		if (day === 1) {
			textString = week3Data[0].Monday
		}
		if (day === 2) {
			textString = week3Data[0].Tuesday
		}
		if (day === 3) {
			textString = week3Data[0].Wednesday
		}
		if (day === 4) {
			textString = week3Data[0].Thursday
		}
		if (day === 5) {
			textString = week3Data[0].Friday
		}
		if (day === 6) {
			textString = week3Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week3Data[1].Saturday
		}
	}
	// Capatalise weekday name so it looks nicer
	const str = newText;
	const captalisedText = str.charAt(0).toUpperCase() + str.slice(1);
	textString = "Breakfast" + " " + captalisedText + "\n\n" + textString;

	return textString;
}
export function getLunchAnotherDay(text) {
	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": LunchDiffDay(getCurrentWeek(), text),
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

function LunchDiffDay(week, text) {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = week;
	let newText = text.replace("lunch", "");
	if (newText === 'tomorrow') {
		day++;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		if (day === 7) {
			day = 0;
		}
		if (tempCurrentWeek === 0) {
			tempCurrentWeek = 3;
		}
	} else if (newText === 'monday') {
		if (day === 0 || day > 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 1;
	} else if (newText === 'tuesday') {
		if (day === 0 || day > 2) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 2;
	} else if (newText === 'wednesday') {
		if (day === 0 || day > 3) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 3;
	} else if (newText === 'thursday') {
		if (day === 0 || day > 4) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 4;
	} else if (newText === 'friday') {
		if (day === 0 || day > 5) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 5;
	} else if (newText === 'saturday') {
		if (day === 0) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 6;
	} else if (newText === 'sunday') {
		day = 0;
	}
	if (tempCurrentWeek === 0) {
		tempCurrentWeek = 3;
	}
	let textString = "";
	if (tempCurrentWeek === 1) {
		if (day === 0) {
			textString = week1Data[2].Sunday
		}
		if (day === 1) {
			textString = week1Data[2].Monday
		}
		if (day === 2) {
			textString = week1Data[2].Tuesday
		}
		if (day === 3) {
			textString = week1Data[2].Wednesday
		}
		if (day === 4) {
			textString = week1Data[2].Thursday
		}
		if (day === 5) {
			textString = week1Data[2].Friday
		}
		if (day === 6) {
			textString = week1Data[2].Saturday
		}
	}
	if (tempCurrentWeek === 2) {
		if (day === 0) {
			textString = week2Data[2].Sunday
		}
		if (day === 1) {
			textString = week2Data[2].Monday
		}
		if (day === 2) {
			textString = week2Data[2].Tuesday
		}
		if (day === 3) {
			textString = week2Data[2].Wednesday
		}
		if (day === 4) {
			textString = week2Data[2].Thursday
		}
		if (day === 5) {
			textString = week2Data[2].Friday
		}
		if (day === 6) {
			textString = week2Data[2].Saturday
		}
	}
	if (tempCurrentWeek === 3) {
		if (day === 0) {
			textString = week3Data[2].Sunday
		}
		if (day === 1) {
			textString = week3Data[2].Monday
		}
		if (day === 2) {
			textString = week3Data[2].Tuesday
		}
		if (day === 3) {
			textString = week3Data[2].Wednesday
		}
		if (day === 4) {
			textString = week3Data[2].Thursday
		}
		if (day === 5) {
			textString = week3Data[2].Friday
		}
		if (day === 6) {
			textString = week3Data[2].Saturday
		}
	}
	// Capatalise weekday name so it looks nicer
	const str = newText;
	const captalisedText = str.charAt(0).toUpperCase() + str.slice(1);
	textString = "Lunch" + " " + captalisedText + "\n\n" + textString;

	return textString;
}

export function getDinnerAnotherDay(text) {
	return {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": DinnerDiffDay(getCurrentWeek(), text),
			"buttons": [
				{
					"type": "web_url",
					"url": 'https://myschoolconnect.com.au/login',
					"title": "Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type": "web_url",
					"url": 'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNlFXTDUwUEgwVzJQNUVYRjdMQVdJNkxSMS4u&origin=QRCode',
					"title": "Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

function DinnerDiffDay(week, text) {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = week;
	let newText = text.replace("dinner", "");
	if (newText === 'tomorrow') {
		day++;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		if (day === 7) {
			day = 0;
		}
		if (tempCurrentWeek === 0) {
			tempCurrentWeek = 3;
		}
	} else if (newText === 'monday') {
		if (day === 0 || day > 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 1;
	} else if (newText === 'tuesday') {
		if (day === 0 || day > 2) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 2;
	} else if (newText === 'wednesday') {
		if (day === 0 || day > 3) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 3;
	} else if (newText === 'thursday') {
		if (day === 0 || day > 4) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 4;
	} else if (newText === 'friday') {
		if (day === 0 || day > 5) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 5;
	} else if (newText === 'saturday') {
		if (day === 0) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		day = 6;
	} else if (newText === 'sunday') {
		day = 0;
	}
	if (tempCurrentWeek === 0) {
		tempCurrentWeek = 3;
	}
	let textString = "";
	if (tempCurrentWeek === 1) {
		if (day === 0) {
			textString = week1Data[3].Sunday
		}
		if (day === 1) {
			textString = week1Data[3].Monday
		}
		if (day === 2) {
			textString = week1Data[3].Tuesday
		}
		if (day === 3) {
			textString = week1Data[3].Wednesday
		}
		if (day === 4) {
			textString = week1Data[3].Thursday
		}
		if (day === 5) {
			textString = week1Data[3].Friday
		}
		if (day === 6) {
			textString = week1Data[3].Saturday
		}
	}
	if (tempCurrentWeek === 2) {
		if (day === 0) {
			textString = week2Data[3].Sunday
		}
		if (day === 1) {
			textString = week2Data[3].Monday
		}
		if (day === 2) {
			textString = week2Data[3].Tuesday
		}
		if (day === 3) {
			textString = week2Data[3].Wednesday
		}
		if (day === 4) {
			textString = week2Data[3].Thursday
		}
		if (day === 5) {
			textString = week2Data[3].Friday
		}
		if (day === 6) {
			textString = week2Data[3].Saturday
		}
	}
	if (tempCurrentWeek === 3) {
		if (day === 0) {
			textString = week3Data[3].Sunday
		}
		if (day === 1) {
			textString = week3Data[3].Monday
		}
		if (day === 2) {
			textString = week3Data[3].Tuesday
		}
		if (day === 3) {
			textString = week3Data[3].Wednesday
		}
		if (day === 4) {
			textString = week3Data[3].Thursday
		}
		if (day === 5) {
			textString = week3Data[3].Friday
		}
		if (day === 6) {
			textString = week3Data[3].Saturday
		}
	}
	// Capatalise weekday name so it looks nicer
	const str = newText;
	const captalisedText = str.charAt(0).toUpperCase() + str.slice(1);
	textString = "Dinner" + " " + captalisedText + "\n\n" + textString;

	return textString;
}


