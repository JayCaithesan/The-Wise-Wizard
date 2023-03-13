

let quotes = []

//fetchs the data from the json file
fetch("data/advice.json")
            .then((resp) => resp.json())
            .then(function (data) {
                  
                quotes = data;
                    
                    
            })
            .catch(function (error) {
                // catch the error if fetch fails
                console.log(error);
            });
                



function changeQuote()
{

    //changes the quote
    var quotePlace = document.getElementById('quotePlace');

    //gets a random number/element of the array to display a quote
    const num = Math.floor(Math.random()*quotes.length)
    var quote = quotes[num].quote;

    //sets the html of 'quoteplace' to the quote
    quotePlace.innerHTML = quote;
}