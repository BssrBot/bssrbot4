import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let listOfImagesDino = [];

export function addImageDino(url) {

	listOfImagesDino.push(url);

}

export function getRandomImage() {

	const x = Math.floor(Math.random() * listOfImagesDino.length) ;
	return {
		'attachment': {
			'type':'image', 
			'payload':{
				'url': listOfImagesDino[x],
				'is_reusable': true
			}
		}
	}
}

export function removeSpecificImage(url) {

	const indexDino = listOfImagesDino.indexOf(url);

	if (indexDino === -1) {
		return { 'text' : 'Image was not added'}
	}
	if (indexDino >= 0) {
		listOfImagesDino.splice(indexDino, 1);
	}

	return { 'text': 'Successfully deleted!'};
	
	
}

export function clearImagesDino() {
	listOfImagesDino = [];
	return 'All images removed from dino';
}

export function clearImagesCoffeeNight() {
	listOfCoffeeNightPics = [];
	return 'All images removed from coffee night. See ya next Wednesday!';
}

