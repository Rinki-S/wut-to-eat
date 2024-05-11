function stepSwitch(step) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((element) => {
    element.classList.remove(...accentColorClass);
    element.classList.add('bg-gray-300');
  });
  steps[step - 1].classList.remove('bg-gray-300');
  steps[step - 1].classList.add(...accentColorClass);
}

function showSelection(buttonID, targetID) {
  const target = document.getElementById(targetID);
  const button = document.getElementById(buttonID);
  const parent = target.parentElement;
  if (parent.classList.contains('hidden')) {
    parent.classList.remove('hidden');
  }
  target.classList.remove('hidden');
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  button.disabled = true;
}

function stepOneSelection(radioID) {
  let radio = document.getElementById(radioID);
  let selectedRadio = radio.querySelector('input:checked');
  if (selectedRadio.value === 'random') {
    showSelection('selectionStepOneNext', 'selectionStepRandomResult');
    appendTableHeaders('stepRandomTable');
    appendRandomRestaurant('stepRandomTable');
  } else {
    showSelection('selectionStepOneNext', 'selectionStepFilter');
  }
  stepSwitch(3);
}
