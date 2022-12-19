import getDinoTimes from './getDino.js';
import getJoke from './getJokes';
import getHealth from './getHealth.js'
import getCommands from './getCommands.js';
import getLaundry from './getLaundry.js';

export function Respond(message) {
	const text = message.toLowerCase().replace(/\W/g, '');

	// ? (List of Commands)
	if (text === '?') {
		return {
			text: getCommands()
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

	// No command is correct
	return {
		text: 'Input \'?\' to see the list of commands!'
	};
}