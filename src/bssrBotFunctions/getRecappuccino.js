import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
var fs = require('fs');

export function validRecap(text) {
	const num = text.replace('recap', '');
	return ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].indexOf(num);
}

export function getRecappuccino(recapWeek) {
	if (recapWeek === '' || recapWeek === undefined) {
		recapWeek = latestWeek();
	}
	const pathname = './bssrBotFunctions/RecappuccinoPDF/' + recapWeek + '.txt';
	console.log(pathname)
	if (fs.existsSync(pathname)) {
		data = fs.readFileSync(pathname, 'UTF-8')
		// split the contents by new line
		const lines = data.split(/\r?\n/)
		console.log(lines);
		return {
			"type":"file", 
			"payload":{
				"url": lines[0],
				"is_reusable": true
			}
		};
	}
}

function latestWeek() {
	let week = 1;
	while (fs.existsSync('./bssrBotFunctions/RecappuccinoPDF/' + week.toString() + '.txt')) {
		console.log('yes');
		week++;
	}

	return (week - 1);
}