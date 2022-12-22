export function getFeedback() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Click here to leave feedback on events or general college life:",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://forms.gle/xdgJ7WRc6NVYY5No6',
					"title":"Feedback",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}