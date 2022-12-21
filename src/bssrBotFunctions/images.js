import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const listOfImages = [];


export function addImage(url) {

  listOfImages.push(url);

}

export function getRandomImage() {

	const x = Math.floor(Math.random() * listOfImages.length) ;
	return {
		'attachment': {
			'type':'template', 
			'payload':{
				'template_type': 'generic',
				'elements': [
					{
						'image_url': listOfImages[x]
					}
				]
			}
		}
	}
}

export function clearImages() {
  listOfImages = [];
}
