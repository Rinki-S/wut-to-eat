const greetings = document.getElementById('greetings');
let greetingsText = greetings.textContent;
const body = document.querySelector('body');
const currentBodyClass = body.className;
let accentColorClass;
let radioAccentColorClass;
const hour = new Date().getHours();
if (hour < 10) {
  accentColorClass = ['bg-yellow-600', 'hover:bg-yellow-700'];
  radioAccentColorClass = ['text-yellow-600', 'focus:ring-yellow-500'];
} else if (hour < 16) {
  accentColorClass = ['bg-red-600', 'hover:bg-red-700'];
  radioAccentColorClass = ['text-red-600', 'focus:ring-red-500'];
} else {
  accentColorClass = ['bg-indigo-600', 'hover:bg-indigo-700'];
  radioAccentColorClass = ['text-indigo-600', 'focus:ring-indigo-500'];
}

function changeDisplay() {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 10) {
    greetings.textContent = '今天早餐打算吃什么?';
    body.className =
      currentBodyClass + ' bg-gradient-to-b from-yellow-50 to-white';
  } else if (hours < 16) {
    greetings.textContent = '今天午餐打算吃什么?';
    body.className =
      currentBodyClass + ' bg-gradient-to-b from-red-50 to-white';
  } else {
    greetings.textContent = '今天晚餐打算吃什么?';
    body.className =
      currentBodyClass + ' bg-gradient-to-b from-indigo-50 to-white';
  }
  const primaryElements = document.getElementsByClassName('primary');

  for (let element of primaryElements) {
    if (element.type === 'radio') {
      element.classList.add(...radioAccentColorClass);
    } else {
      element.classList.add(...accentColorClass);
    }
  }

  const steps = document.querySelectorAll('.step');
  steps[0].classList.remove('bg-gray-300');
  steps[0].classList.add(...accentColorClass);
}

document.addEventListener('DOMContentLoaded', changeDisplay);

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
