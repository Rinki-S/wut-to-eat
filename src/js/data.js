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

function appendTableHeaders(targetTable) {
  let table = document.getElementById(targetTable);
  let thead = table.querySelector('thead');
  let tr = document.createElement('tr');
  headers.forEach((header) => {
    let th = document.createElement('th');
    th.textContent = header;
    th.scope = 'col';
    th.classList.add(
      'px-6',
      'py-3',
      'text-start',
      'text-xs',
      'font-medium',
      'text-gray-500',
      'uppercase'
    );
    tr.appendChild(th);
  });
  thead.appendChild(tr);
}

function appendRandomRestaurant(targetTable) {
  let randomIndex = Math.floor(Math.random() * restaurants.length);
  let randomRestaurant = restaurants[randomIndex];
  let table = document.getElementById(targetTable);
  let tbody = table.querySelector('tbody');
  let tr = document.createElement('tr');
  for (let key in randomRestaurant) {
    let td = document.createElement('td');
    td.textContent = randomRestaurant[key];
    if (key === 'Name') {
      td.classList.add(
        'whitespace-nowrap',
        'px-6',
        'py-4',
        'text-sm',
        'font-medium',
        'text-gray-800'
      );
    } else {
      td.classList.add(
        'whitespace-nowrap',
        'px-6',
        'py-4',
        'text-sm',
        'text-gray-800'
      );
    }
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
  console.log(randomRestaurant);
}

function clearTableContent(tableID) {
  console.log('clearTableContent');
  let table = document.getElementById(tableID);
  let thead = table.querySelector('thead');
  let tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  thead.innerHTML = '';
}
