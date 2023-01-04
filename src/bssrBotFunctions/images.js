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
	//Url not found in array
	if (indexDino === -1) {
		return { 'text' : 'Image was not added'}
	}
	//If url found, then remove it from array
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

export function getWarrane() {
	return {
			'type':'image', 
			'payload':{
				'url': 'https://media.istockphoto.com/id/624878806/photo/multiethnic-mud-run-team-of-men-yelling-during-obstacle-course.jpg?s=612x612&w=0&k=20&c=ORDbLEAuAvR5k-tBq5iHIPy7ugaiqS99bfyTtrx_5m4=',
				'is_reusable': true
		}
		
	}
}

