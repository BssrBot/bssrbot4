import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const listOfImages = [];


export function addImage(url) {

    listOfImages.push(url);

}

export function getRandomImage() {

    const x = Math.floor(Math.random() * listOfImages.length) ;
    return listOfImages[x];

}

export function clearImages() {
    listOfImages = [];
}
