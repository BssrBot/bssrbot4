import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var fs = require('fs');

const filename = 'src/bssrBotFunctions/Basserians.txt';

export function addBasserian(PSID) {
    if (fs.existsSync(filename)) {
        if (!isBasserian(PSID)) {
            fs.appendFileSync(filename, PSID + '\n');
            return 'Welcome, Wildcat'
        } else {
            return 'You\'re already a Basserian\n';
        }
    } 
}

export function isBasserian(PSID) {
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'UTF-8')
		// split the contents by new line
		const lines = data.split(/\r?\n/)
        for (const line of lines) {
            if (line.replace(/(\r\n|\n|\r)/gm, "") === PSID) {
                return true;
            }
        }
        return false;
    }
}

export function allBasserians() {
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'UTF-8')
		// split the contents by new line
		return data.split(/\r?\n/);
    }
}