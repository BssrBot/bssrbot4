
listOfCoffeeNightPics = [];

export function coffeeNightPics(url) {
	listOfCoffeeNightPics.push(url);
}

export function getWildcat() {
  return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Click here to view the status of the washing machines and dryers:",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://recharge.it.unsw.edu.au/LaundryMonitor/Location',
					"title":"Laundry",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

export function getRecappuccino() {

}
