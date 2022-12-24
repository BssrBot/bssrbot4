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



let listOfWildcats = [];

export function addWildcat(text) {
    let newText = text.replace("wildcat", "");
    listOfWildcats.push(newText);
}

export function getWildcats() {
    if (listOfWildcats.length === 0) {
        return 'No wildcats yet :(';
    }
    let wildcatString = listOfWildcats.join("\n\n");
    return wildcatString;

}

export function clearWildcats() {
    listOfWildcats = [];
    return 'Wildcats cleared!'
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
    //Clears every Wednesday at 10pm
    if (parseInt(today.getDay()) === 3 && parseInt(today.getHours()) >= 22) {
        listOfPics = [];
    }
}