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
        'type':'image', 
        'payload':{
            'url': listOfImages[x],
            'is_reusable': true
            }
        }
    }
}

export function clearImages() {
    listOfImages = [];
}
