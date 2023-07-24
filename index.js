const button = document.querySelector('button');
const quote = document.querySelector('p');

const getQuotes = async () => { //async allows javascript perform a special function
    const response = await fetch('https://dummyjson.com/quotes?limit=100'); //ensure the link is genuine
    const quotes = await response.json();//await must be assigned to every code returning a promise
    return quotes;
}
myQuotes = [];
getQuotes().then( data => {
    data.quotes.forEach(element => {
        myQuotes.push(element)
    });
})
function loopHole() {
    let rand = Math.floor(Math.random() * (99 -0 + 1)) + 0
    return myQuotes[rand].quote
}
button.addEventListener('click',e => {
    let newQuote = loopHole();
    quote.textContent = `"${newQuote}"`;
})

