import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const XLSX = require("xlsx");
const workbook = XLSX.readFile("./src/bssrBotFunctions/menu/menu.xlsx");
const emoji = require('node-emoji');

const workbookWeek1 = workbook.Sheets["Week 1"];
const workbookWeek2 = workbook.Sheets["Week 2"];
const workbookWeek3 = workbook.Sheets["Week 3"];

//Testing outputs
const week1Data = XLSX.utils.sheet_to_json(workbookWeek1);
const week2Data = XLSX.utils.sheet_to_json(workbookWeek2);
const week3Data = XLSX.utils.sheet_to_json(workbookWeek3);

// If BssrBot is shut off, this needs to be adjusted to the current week
let CURRENT_WEEK = 2;

function checkMenuWeek() {
	let timeNow = new Date();
	let day = timeNow.getDay();
}

export function isDinoMeal(text) {
	if (text === 'dino' || text === 'breakfast' || text === 'lunch' || text === 'dinner') {
		return true;
	} else {
		return false;
	}
}

//DINO TIMES
export function getDinoTimes() {
	//Times could possibly change(with new caterers) so change if required
	const dinoString = "Breakfast: 7:30-10:00am\nBrunch(Weeekends Only): 10:00am-12:00pm\nLunch: 12:00-2:15pm\nDinner: 5:00-7:30pm\nSeconds are last 15 minutes of each meal";
	
	return dinoString;
}

export function getDino() {
	let text = "";
	const timeNow = new Date();
	let hours = timeNow.getHours();
	if (hours < 10 || hours >= 20) {
		text = Breakfast();
	}
	if (hours >= 10 && hours < 15) {
		text = Lunch();
	}
	if (hours >= 15 && hours < 20) {
		text = Dinner();
	}
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": text,
			//Might need to update these urls(ask Dean/Ops n Comms perhaps)
			"buttons":[
				{
					"type":"web_url",
					"url":'https://myschoolconnect.com.au/login',
					"title":"Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type":"web_url",
					"url":'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNEJUWlVMOUNFUlRFNk1CSkFIQVJDMEFYTi4u&qrcode=true',
					"title":"Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function getBreakfast() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": Breakfast(),
			//Might need to update these urls(ask Dean/Ops n Comms perhaps)
			"buttons":[
				{
					"type":"web_url",
					"url":'https://myschoolconnect.com.au/login',
					"title":"Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type":"web_url",
					"url":'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNEJUWlVMOUNFUlRFNk1CSkFIQVJDMEFYTi4u&qrcode=true',
					"title":"Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

function Breakfast() {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let textString = "";
	let tempCurrentWeek = CURRENT_WEEK;
	if (hours >= 10) {
		day = (day+1) % 7;
		flag = true;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
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
			textString = week2Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Sunday
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
			textString = week2Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Saturday
		}
	}
	if (tempCurrentWeek === 0) {
		if (day === 0) {
			textString = week3Data[0].Sunday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Sunday
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
			textString = week3Data[0].Saturday + `\n\n${dino}Brunch(10:00am-12:00pm)${dino}\n\n` + week1Data[1].Saturday
		}
	

	}
	if (flag === false) {
		textString = "Breakfast\n\n" + textString;
	}
	if (flag === true) {
		textString = "Breakfast tommorow\n\n" + textString;
	}
	return textString;

}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function getLunch() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": Lunch(),
			//Might need to update these urls(ask Dean/Ops n Comms perhaps)
			"buttons":[
				{
					"type":"web_url",
					"url":'https://myschoolconnect.com.au/login',
					"title":"Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type":"web_url",
					"url":'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNEJUWlVMOUNFUlRFNk1CSkFIQVJDMEFYTi4u&qrcode=true',
					"title":"Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}
function Lunch() {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = CURRENT_WEEK;
	let textString = "";
	if (hours >= 15) {
		day = (day+1) % 7;
		flag = true;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
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
	if (tempCurrentWeek === 0) {
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
		textString = "Lunch tommorow\n\n" + textString;
	}
	return textString;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function getDinner() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": Dinner(),
			//Might need to update these urls(ask Dean/Ops n Comms perhaps)
			"buttons":[
				{
					"type":"web_url",
					"url":'https://myschoolconnect.com.au/login',
					"title":"Latemeal",
					"webview_height_ratio": "full"
				},
				{
					"type":"web_url",
					"url":'https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o91DYUQ6lW9MsGLk8aV9AgNUNEJUWlVMOUNFUlRFNk1CSkFIQVJDMEFYTi4u&qrcode=true',
					"title":"Leave Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}
// placeholder function
function Dinner() {
	const timeNow = new Date();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let flag = false;
	let tempCurrentWeek = CURRENT_WEEK;
	let textString = "";
	if (hours >= 20) {
		day = (day+1) % 7;
		if (day === 1) {
			tempCurrentWeek = (tempCurrentWeek + 1) % 3
		}
		flag = true;
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
	if (tempCurrentWeek === 0) {
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
		textString = "Tommorow night I'll be eating\n\n" + textString;
	}
	return textString;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
