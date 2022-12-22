import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const listOfImagesDino = [];

const listOfCoffeeNightPics = [];

export function addImageDino(url) {

	listOfImagesDino.push(url);

}

export function addImageCoffeeNight(url) {

	listOfCoffeeNightPics.push(url);

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
	const indexCoffeeNight = listOfCoffeeNightPics.indexOf(url);

	if (indexDino === -1 && indexCoffeeNight === -1) {
		return { 'text' : 'Image was not added'}
	}
	if (indexDino >= 0) {
		listOfImagesDino.splice(indexDino, 1);
	}
	if (indexCoffeeNight >= 0) {
		listOfCoffeeNightPics.splice(indexCoffeeNight, 1);
	}

	return { 'text': 'Successfully deleted!'};
	
	
}

export function clearImagesDino() {
  listOfImagesDino = [];
  return { 'text': 'All images removed from dino'};
}