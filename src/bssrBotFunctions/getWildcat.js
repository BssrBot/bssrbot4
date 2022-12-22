const listOfQuotes = [];

export function addQuote(text) {
    let newText = text.replace("coffee night quote", "");
    listOfQuotes.push(newText);
}

export function getQuotes() {
    if (listOfQuotes.length === 0) {
        return 'No quotes yet :(';
    }
    quoteString = listOfQuotes.join("\n\n");
    return quoteString;

}

export function clearQuotes() {
    listOfQuotes = [];
}
export function getWildcat() {

}

console.log(getQuotes());