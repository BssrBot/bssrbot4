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

export function clearImages() {
  listOfImages = [];
}
