import exp from "constants";

export function isDinoMeal(text) {
	if (text === 'dino' || text === 'breakfast' || text === 'lunch' || text === 'dinner') {
		return true;
	} else {
		return false;
	}
}

export function getDinoTimes() {

	const dinoString = "Breakfast: 7:30-10:00am\nLunch: 12:00-2:15pm\nDinner: 5:00-7:30pm\nSeconds are last 15 minutes of each meal";
	
	return dinoString;
}

export function getDino() {
	return 'Today\'s Menu\n\n' + getBreakfast() + getLunch() + getDinner();
}

export function getBreakfast() {
	// placeholder function
	return 'Breakfast:\nContinental\n';
}

export function getLunch() {
	// placeholder function
	return 'Lunch:\nCurry\n';
}

export function getDinner() {
	// placeholder function
	return 'Tonight I\'ll be eating:\nPasta\n'
}