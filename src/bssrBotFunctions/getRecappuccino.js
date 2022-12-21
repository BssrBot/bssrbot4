import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
var fs = require('fs');

export function validRecap(text) {
	const num = text.replace('recap', '');
	return ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].indexOf(num);
}

export function getRecappuccino(recapWeek) {
	console.log(recapWeek === '', '//////////////////mmmmmmmmmmm');
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