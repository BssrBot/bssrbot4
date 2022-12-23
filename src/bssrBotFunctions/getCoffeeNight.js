export const COFFEE_NIGHT = 'Coffee Night Pics:';
////////////////////////////////////////////////////////////////////////////////////////////////////////

let listOfQuotes = [];

export function addQuote(text) {
    let newText = text.replace("coffee night quote", "");
    listOfQuotes.push(newText);
}

export function getQuotes() {
    if (listOfQuotes.length === 0) {
        return 'No quotes yet :(';
    }
    let quoteString = listOfQuotes.join("\n\n");
    return quoteString;

}

export function clearQuotes() {
    listOfQuotes = [];
    return 'Quotes cleared!'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export function getWildcat() {

}

////////////////////////////////////////////////////////////////////////////////////////////////////////

let listOfPics = [];

export function addCoffeeNightPic(url) {
    listOfPics.push(url);
}

export function getCoffeeNightPics() {
    return listOfPics;
}

export function clearCoffeeNightPics() {
    const today = new Date();
    if (parseInt(today.getDay()) === 3 && parseInt(today.getHours()) >= 22) {
        listOfPics = [];
    }
}