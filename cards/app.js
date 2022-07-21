let cardsURL = 'http://deckofcardsapi.com/api/deck/';
let outputArea = document.getElementById('output');

const capitalize = (str) => {
  if (typeof str === 'string') {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return '';
  }
};

// Step 1
axios
  .get(`${cardsURL}new/draw/`)
  .then((data) => {
    //console.log(data);
    let { suit, value } = data.data.cards[0];
    console.log(
      `${capitalize(value.toLowerCase())} of ${capitalize(suit.toLowerCase())}`
    );
  })
  .catch((err) => console.log(err));

// Step 2

// Step 3
