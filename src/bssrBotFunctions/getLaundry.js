export function getLaundry() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Click here to view the status if the washing machines and dryers:",
			"buttons":[
				{
					"type":"postback",
					"title":"Laundry",
					"payload":'https://recharge.it.unsw.edu.au/mymonitor/index.php?qrid=QR9ecb9faa4dda8fec'
				}
			]
		}
	};
}