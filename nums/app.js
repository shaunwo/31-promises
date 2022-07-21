let numbersURL = 'http://numbersapi.com';
let randomNum = 7;

// Step 1
axios
  .get(`${numbersURL}/${randomNum}?json`)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Step 2

// Step 3
