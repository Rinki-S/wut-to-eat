fetch(
  'https://raw.githubusercontent.com/Rinki-S/wut-to-eat/tree/main/src/data/restaurants.csv'
)
  .then((response) => response.text())
  .then((data) => {
    let lines = data.split('\n');
    let headers = lines[0].split(',');
    let restaurants = lines.slice(1).map((line) => {
      let values = line.split(',');
      let restaurant = {};
      headers.forEach((header, index) => {
        restaurant[header] = values[index];
      });
      return restaurant;
    });
    console.log(restaurants);
  })
  .catch((error) => console.error('Error:', error));
