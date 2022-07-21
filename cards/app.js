let cardsURL = 'http://deckofcardsapi.com/api/deck/';
let outputArea = document.getElementById('output');

// Step 1
axios
  .get(`${cardsURL}new/draw/`)
  .then((data) => {
    //console.log(data);
    let { suit, value } = data.data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  })
  .catch((err) => console.log(err));

// Step 2

// Step 3
