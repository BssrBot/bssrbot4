const listOfQuotes = [];

export function addQuote(text) {
    let newText = text.replace("coffee night quote", "");
    listOfQuotes.push(newText);
}

export function getQuotes() {
    let quoteString = listOfQuotes.join("\n\n");
    return quoteString;

}

export function clearQuotes() {

}
export function getWildcat() {

}
