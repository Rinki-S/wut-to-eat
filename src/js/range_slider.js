var slider = document.getElementById('slider-round');
var valuesForSlider = [0, 10, 20, 30, 40, 50];

noUiSlider.create(slider, {
  start: [10, 30],
  connect: true,
  step: 5,
  range: {
    min: 0,
    max: 50,
  },
  tooltips: true,
});

slider.noUiSlider.on('update', function (values, handle) {
  console.log('Range selected: ' + values[0] + ' to ' + values[1]);
});
