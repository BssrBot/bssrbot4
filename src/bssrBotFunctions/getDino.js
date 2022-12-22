import exp from "constants";

export function isDinoMeal(text) {
	if (text === 'dino' || text === 'breakfast' || text === 'lunch' || text === 'dinner') {
		return true;
	} else {
		return false;
	}
}

export function getDinoTimes() {

	const dinoString = "Breakfast: 7:30-10:00am\nLunch: 12:00-2:15pm\nDinner: 5:00-7:30pm\nSeconds are last 15 minutes of each meal";
	
	return dinoString;
}

export function getDino() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": 'Today\'s Menu\n\n\n' + Breakfast() + '\n' + Lunch() + '\n' + Dinner(),
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
function Breakfast() {
	return 'Breakfast:\nResidential Brekkie\n';
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function getLunch() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": Lunch(),
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
function Lunch() {
	return 'Lunch:\nCurry\n';
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function getDinner() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text": Dinner(),
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
	return 'Tonight I\'ll be eating:\nPasta\n'
}

////////////////////////////////////////////////////////////////////////////////////////////////////
