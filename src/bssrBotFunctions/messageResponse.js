import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const RiveScript = require("rivescript");
import { getDinoTimes, getDino, getBreakfast, getLunch, getDinner } from './getDino.js';
import { clearImagesDino } from './images.js';
import { getJoke } from './getJokes.js';
import { getHealth } from './getHealth.js'
import { getCommands } from './getCommands.js';
import { getLaundry } from './getLaundry.js';
import { getFeedback } from './getFeedback.js';
import { getRecappuccino, validRecap } from './getRecappuccino.js';
import { addQuote, clearQuotes, getQuotes } from './getWildcat.js';

const bot = new RiveScript();
bot.loadDirectory("./brain");
//Sleep for 20 milliseconds to allow bot to load directory before sorting replies
//This was truly insane trying to find a way to get it to work but somehow it does
await new Promise(r => setTimeout(r, 20));
bot.sortReplies();

// Zach 5852973454748898
// Laurence 5688278634581333 
// PSID
const ADMIN_IDS = ['5852973454748898', '5688278634581333']


export function Respond(senderId, message) {
	const text = message.toLowerCase().replace(/\W/g, '');
	
	// Commands
	if (text === 'commands') {
		return {
			text: getCommands()
		};
	}
	
	// Dino 
	if (text === 'dino') {
		return {
			attachment: getDino()
		};
	}

	// Breakfast
	if (text === 'breakfast') {
		return {
			attachment: getBreakfast()
		};
	}

	// Lunch
	if (text === 'lunch') { 
		return {
			attachment: getLunch()
		};
	}

	// Dinner 
	if (text === 'dinner') {
		return {
			attachment: getDinner()
		};
	}

	// Dino Times
	if (text === 'dinotimes') {
		return {
			text: getDinoTimes()
		};
	}

	// Joke 
	if (text === 'joke' || 
			text === 'tellmeajoke' || 
			text === 'crackajoke') {
		return {
			text: getJoke()
		};
	}

	// Health
	if (text === 'help' || 
			text === 'health' || 
			text === 'dutytutor' || 
			text === 'security' || 
			text === 'counsellor' || 
			text === 'lifeline' || 
			text === 'doctor' || 
			text === 'unswhealthservices' || 
			text === 'dentist' || 
			text === 'optometrist') {
		return {
			text: 'Helpful Contacts:\n' + getHealth()
		};
	}

	// Laundry 
	if (text === 'laundry') {
		return {
			attachment: getLaundry()
		};
	}

	// Feedback
	if (text === 'feedback') {
		return {
			attachment: getFeedback()
		};
	}

	// Remove all Dino Images (incase something naughty/bad). Only admins can do
	if (text === 'removedinoimages' || text === 'cleardinoimages' || text === 'deletedinoimages') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				'text' : clearImagesDino()
			}
		} else {
			return {
				'text' : 'No admin permissions. Ask Zach or Laurence to clear if required'
			}
		}
	}

	// Recap
	if (text.includes('recap') && validRecap(text) >= 0) {
		return {
			attachment: getRecappuccino(validRecap(text))
		};
	}

	//Send Coffeee Night Quotes
	if (text.includes("coffeenightquote")) {
		addQuote(message)
		return {
			'text' : 'Sent! See you at coffee night ;)'
		}
	}
	//Get coffee night quotes
	if (text === 'getcoffeenightquotes') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				'text' : getQuotes()
			}
		} else {
			return {
				'text' : 'Wait till coffee night to see ;)'
			}
		}
	}
	if (text === 'clearcoffeenightquotes' || text === 'removecoffeenightquotes' || text === 'deletecoffeenightquotes') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				'text' : clearQuotes()
			}
		} else {
			return {
				'text' : 'Sorry. Only admins can do this'
			}
		}
	}


	// No command is correct & Rivescript stuff
	let reply = bot.reply("localuser", message)
	if (reply.includes(`Sorry I don't understand`)) {
		reply = 'Input \'commands\' to see the list of commands!'
	}
	return {
		text : reply
	};
	
}

export {ADMIN_IDS}