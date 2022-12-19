export function getLaundry() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
<<<<<<< HEAD
			"text":"Click here to view the status of the washing machines and dryers:",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://recharge.it.unsw.edu.au/LaundryMonitor/Location',
=======
			"text":"Click here to view the status if the washing machines and dryers:",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://recharge.it.unsw.edu.au/mymonitor/index.php?qrid=QR9ecb9faa4dda8fec',
>>>>>>> bd7f8ea271c709214dacf702fd4dadf70cae7eca
					"title":"Laundry",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}