let numbersURL = 'http://numbersapi.com';
let outputArea = document.getElementById('output');

// Step 1
let randomNum = 7;
axios
  .get(`${numbersURL}/${randomNum}?json`)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Step 2
let multiNums = [11, 45, 15];
axios
  .get(`${numbersURL}/${multiNums}?json`)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Step 3
let fourPromises = [];
outputArea.innerHTML = `<h2>Step 3</h2>`;
for (let i = 0; i < 4; i++) {
  fourPromises.push(axios.get(`${numbersURL}/random?json`));
}
Promise.all(fourPromises)
  .then((numsArr) =>
    numsArr.forEach(
      (data) =>
        //console.log(data.data.text)
        (outputArea.innerHTML += `  <li>${data.data.text}</li>`)
    )
  )
  .catch((err) => console.log(err));
