var slider = document.getElementById('slider-round');

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

function getRangeSlider(sliderID) {
  const slider = document.getElementById(sliderID);
  let rangeSliderValues = slider.noUiSlider.get();
  //   console.log(
  //     'Range selected: ' + rangeSliderValues[0] + ' to ' + rangeSliderValues[1]
  //   );
  return rangeSliderValues;
}

// slider.noUiSlider.on('update', function (values, handle) {
//   console.log('Range selected: ' + values[0] + ' to ' + values[1]);
// });
