import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const RiveScript = require("rivescript");
import { getDinoTimes, getDino, getBreakfast, getLunch, getDinner, setMenuWeek, getLunchAnotherDay, getBreakfastAnotherDay, getDinnerAnotherDay } from './getDino.js';
import { clearImagesDino, getWarrane } from './images.js';
import { getJoke } from './getJokes.js';
import { getHealth, 
	getLifelineButton, 
	getCounsellorButton, 
	getMentalHealthSupportButton,
	getUNSWHealthServicesButton,
	getDentistButton,
	getOptometristButton,
	getSecurityButton,
	getDutyTutorButton
	} from './getHealth.js'
import { getCommands } from './getCommands.js';
import { getLaundry } from './getLaundry.js';
import { getFeedback } from './getFeedback.js';
import { getRecappuccino, validRecap } from './getRecappuccino.js';
import { addQuote, clearQuotes, COFFEE_NIGHT, getQuotes, addWildcat, getWildcats, clearWildcats } from './getCoffeeNight.js';
import { getWhatsOn, getWhatsOnToday, getWhatsOnTomorrow } from './getEvents.js';
import { addBasserian } from './getBasserian.js';

const bot = new RiveScript();
bot.loadDirectory("./brain");
//Sleep for 20 milliseconds to allow bot to load directory
await new Promise(r => setTimeout(r, 25));
// Now sort replies(necessary)
bot.sortReplies();

// Zach 5852973454748898 Bssrbot-dev
// Laurence 5688278634581333 Bssrbot-dev
// Zach 5316476898382021 BssrBot
// Laurence 7051403781600222 BssrBot
// PSID
export const ADMIN_IDS = ['5852973454748898', '5688278634581333', '5316476898382021', '7051403781600222']


export function Respond(senderId, message) {
	const text = message.toLowerCase().replace(/\W/g, '');
	
	// Add Basserian 
	/*
	if (text === 'basserwildcat') {
		return {
			text: addBasserian(senderId)
		};
	}
	*/

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
	// Get breakfast on another day
	if (text === 'breakfasttomorrow' || text === 'breakfastmonday' || text === 'breakfasttuesday' || text === 'breakfastwednesday' 
	|| text === 'breakfastthursday' || text === 'breakfastfriday' || text === 'breakfastsaturday' || text === 'breakfastsunday' 
	|| text === 'tomorrowbreakfast' || text === 'mondaybreakfast' || text === 'tuesdaybreakfast' || text === 'wednesdaybreakfast' 
	|| text === 'thursdaybreakfast' || text === 'fridaybreakfast' || text === 'saturdaybreakfast' || text === 'sundaybreakfast') {
		return {
			attachment: getBreakfastAnotherDay(text)
		}
	}

	// Get lunch on another day
	if (text === 'lunchtomorrow' || text === 'lunchmonday' || text === 'lunchtuesday' || text === 'lunchwednesday' || text === 'lunchthursday'
	|| text === 'lunchfriday' || text === 'lunchsaturday' || text === 'lunchsunday' || text === 'tomorrowlunch' 
	|| text === 'mondaylunch' || text === 'tuesdaylunch' || text === 'wednesdaylunch' || text === 'thursdaylunch' 
	|| text === 'fridaylunch' || text === 'saturdaylunch' || text === 'sundaylunch') {
		return {
			attachment: getLunchAnotherDay(text)
		}
	}
	// Get dinner on another day
	if (text === 'dinnertomorrow' || text === 'dinnermonday' || text === 'dinnertuesday' || text === 'dinnerwednesday' || text === 'dinnerthursday'
	|| text === 'dinnerfriday' || text === 'dinnersaturday' || text === 'dinnersunday' || text === 'tomorrowdinner' || text === 'mondaydinner' 
	|| text === 'tuesdaydinner' || text === 'wednesdaydinner'  || text === 'thursdaydinner' || text === 'fridaydinner' 
	|| text === 'saturdaydinner' || text === 'sundaydinner') {
		return {
			attachment: getDinnerAnotherDay(text)
		}
	}

	// Breakfast
	if (text === 'breakfast' || text === 'brunch') {
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
	if (text === 'help' || text === 'health') {
		return {
			text: 'Helpful Contacts:\n' + getHealth()
		};
	}

	// Lifeline
	if (text === 'lifeline') {
		return {
			attachment: getLifelineButton()
		}
	}

	// Counsellor
	if (text === 'counsellor') {
		return {
			attachment: getCounsellorButton()
		}
	}

	// Mental Health Support line
	if (text === 'mentalhealth' || text === 'support' || text === 'mentalhealthsupport') {
		return {
			attachment: getMentalHealthSupportButton()
		}
	}

	// UNSW health services
	if (text === 'unswhealthservices' || text === 'doctor' || text === 'healthservices') {
		return {
			attachment: getUNSWHealthServicesButton()
		}
	}

	// Security
	if (text === 'security') {
		return {
			attachment: getSecurityButton()
		}
	}

	// Duty Tutor
	if (text === 'dutytutor') {
		return {
			attachment: getDutyTutorButton()
		}
	}

	// Laundry 
	if (text === 'laundry') {
		return {
			attachment: getLaundry()
		};
	}
	
	// Dentist
	if (text === 'dentist') {
		return {
			attachment: getDentistButton()
		}
	}

	// Optometrist
	if (text === 'optometrist') {
		return {
			attachment: getOptometristButton()
		}
	}
	// Feedback
	if (text === 'feedback') {
		return {
			attachment: getFeedback()
		};
	}
	
	// Warrane
	if (text === 'warrane') {
		return {
			attachment: getWarrane()
		}
	}

	// Remove all Dino Images (incase something naughty/bad). Only admins can do
	if (text === 'removedinoimages' || text === 'cleardinoimages' || text === 'deletedinoimages') {
		if (ADMIN_IDS.includes(senderId)) { //Checks if senderId is an admin
			return {
				text : clearImagesDino()
			}
		} else {
			return {
				text : 'No admin permissions. Ask Zach or Laurence to clear if required'
			}
		}
	}
	/*
	// Recap
	if (text.includes('recap') && validRecap(text) >= 0) {
		return {
			attachment: getRecappuccino(validRecap(text))
		};
	}

	// Send Coffee Night Quotes
	if (text.startsWith("coffeenightquote")) {
		addQuote(message)
		return {
			text : 'Sent! See you at coffee night ;)'
		}
	}

	// Get coffee night quotes, only admins can do
	if (text === 'getcoffeenightquotes') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				text : getQuotes()
			}
		} else {
			return {
				text : 'Wait till coffee night to see ;)'
			}
		}
	}

	// Clear coffee night quotes, only admins can do
	if (text === 'clearcoffeenightquotes' || text === 'removecoffeenightquotes' || text === 'deletecoffeenightquotes') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				text : clearQuotes()
			}
		} else {
			return {
				text : 'Sorry. Only admins can do this'
			}
		}
	}

	// Get coffee night pics, sent only to admins
	if (text=== 'getcoffeenightpics' || text === 'coffeenightpics' || text === 'cnp') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				text : COFFEE_NIGHT
			}
		};
	}
	*/

	if (text.startsWith('setmenuweek')) {
		if (ADMIN_IDS.includes(senderId)) {
			setMenuWeek(message)
			return {
				text: 'Menu week set!'
			}
		}
	}

	// Whats On
	if (text === 'whatson' || text === 'events') {
		return {
			text : getWhatsOn()
		};
	}

	// Whats On Today
	if (text === 'whatsontoday') {
		return {
			text : getWhatsOnToday()
		};
	}

	// Whats On Tomorrow
	if (text === 'whatsontomorrow') {
		return {
			text : getWhatsOnTomorrow()
		};
	}

	if (text === 'rechardt') {
		return {
			text : 'better than peter'
		};
	}
	

	//Send in wildcat nominations
	/*
	if (text.startsWith("wildcat")) {
		addWildcat(message)
		return {
			text : 'Sent! See you at coffee night ;)'
		}
	}
	//Get wildcat nominations, only admins can do
	if (text === 'getwildcats') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				text : getWildcats()
			}
		} else {
			return {
				text : 'Wait till coffee night to see ;)'
			}
		}
	}

	// Clear wildcat nominations, only admins can do
	if (text === 'clearwildcats' || text === 'removewildcats' || text === 'deletewildcats') {
		if (ADMIN_IDS.includes(senderId)) {
			return {
				text : clearWildcats()
			}
		} else {
			return {
				text : 'Sorry. Only admins can do this'
			}
		}
	}
	*/


	// No command is correct & Rivescript stuff
	let reply = bot.reply("localuser", message)
	//If not in the rivescript files...
	if (reply.includes(`Sorry I don't understand`)) {
		reply = 'Input \'commands\' to see the list of commands!'
	}
	return {
		text : reply
	};
	
}
