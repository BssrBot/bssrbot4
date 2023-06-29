export function getFeedback() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Click here to leave feedback on events or general college life:",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://forms.gle/XrDnFPAp55MKcRnL7',
					"title":"Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}