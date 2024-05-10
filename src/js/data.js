let restaurants = [];
let headers = [];

fetch(
  'https://raw.githubusercontent.com/Rinki-S/wut-to-eat/main/src/data/restaurants.csv'
)
  .then((response) => response.text())
  .then((data) => {
    let lines = data.split('\n');
    headers = lines[0].split(',');
    restaurants = lines.slice(1).map((line) => {
      let values = line.split(',');
      let restaurant = {};
      headers.forEach((header, index) => {
        restaurant[header] = values[index];
      });
      return restaurant;
    });
  })
  .catch((error) => console.error('Error:', error));

function appendRandomRestaurant(targetTable) {
  let randomIndex = Math.floor(Math.random() * restaurants.length);
  let randomRestaurant = restaurants[randomIndex];
  let table = document.getElementById(targetTable);
  let thead = table.querySelector('thead');
  let tr = document.createElement('tr');
  headers.forEach((header) => {
    let th = document.createElement('th');
    th.textContent = header;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  console.log(randomRestaurant);
}
