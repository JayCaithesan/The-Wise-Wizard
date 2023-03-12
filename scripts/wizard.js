
    /*
    //read the json file
    const fs = require("fs");
    //uses the fs library in node.js to read
    let json = fs.readFileSync('data/advice.json');
    //parses the json files from json text to js objects
    let parsedJson = JSON.parse(json);

    console.log(parsedJson.quotes[0].quote);
    */

    
    let quotes = []
    fetch("data/advice.json")
                .then((resp) => resp.json())
                .then(function (data) {
                    // success
                    quotes = data;
                    //let parsed = JSON.parse(quotes)
                    //changeQuote(quotes[0].quote)
                    
                    
                })
                .catch(function (error) {
                    // error
                    console.log(error);
                });
                



function changeQuote()
{

    //changes the quote
    var quotePlace = document.getElementById('quotePlace');
    const num = Math.floor(Math.random()*quotes.length)
    var quote = quotes[num].quote;
    quotePlace.innerHTML = quote;
}