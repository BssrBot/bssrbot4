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
export function getWildcat() {

}

console.log(getQuotes());