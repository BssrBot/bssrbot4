import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
var fs = require('fs');

export function validRecap(text) {
	text = text.substring(0, 5);
	console.log('//////////////////////////////////////', text);
	return ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].indexOf(text);
}

export function getRecappuccino(recapWeek) {
	if (recapWeek === '') {
		recapWeek = latestWeek();
	}
	const pathname = './RecappuccinoPDF/' + recapWeek + '.pdf/';
	if (fs.readdirSync(pathname)) {
		return {
			"type":"file", 
      "payload":{
        "url": pathname,
        "is_reusable": true
      }
		};
	}
}

function latestWeek() {
	let week = 1;
	while (fs.readdirSync('./RecappuccinoPDF/' + week.toString() + '.pdf/')) {
		week++;
	}

	return (week - 1);
}