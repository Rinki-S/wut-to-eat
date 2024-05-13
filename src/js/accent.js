const greetings = document.getElementById('greetings');
let greetingsText = greetings.textContent;
const body = document.querySelector('body');
const currentBodyClass = body.className;
let accentColorClass;
let radioAccentColorClass;
let collapseToggleAccentColorClass;
let connectAccentColorClass;
const hour = new Date().getHours();
if (hour < 10) {
  accentColorClass = ['bg-yellow-500', 'hover:bg-yellow-600'];
  radioAccentColorClass = ['text-yellow-500', 'focus:ring-yellow-600'];
  collapseToggleAccentColorClass = ['text-yellow-500', 'hover:text-yellow-700'];
  connectAccentColorClass = '#f59e0b';
} else if (hour < 16) {
  accentColorClass = ['bg-red-500', 'hover:bg-red-600'];
  radioAccentColorClass = ['text-red-500', 'focus:ring-red-600'];
  collapseToggleAccentColorClass = ['text-red-600', 'hover:text-red-700'];
  connectAccentColorClass = '#ef4444';
} else {
  accentColorClass = ['bg-indigo-500', 'hover:bg-indigo-600'];
  radioAccentColorClass = ['text-indigo-500', 'focus:ring-indigo-600'];
  collapseToggleAccentColorClass = ['text-indigo-500', 'hover:text-indigo-700'];
  connectAccentColorClass = '#6366f1';
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
  const sliderConnects = document.getElementsByClassName('noUi-connect');

  for (let element of primaryElements) {
    if (element.type === 'radio' || element.type === 'checkbox') {
      element.classList.add(...radioAccentColorClass);
    } else if (element.classList.contains('hs-collapse-toggle')) {
      element.classList.add(...collapseToggleAccentColorClass);
    } else {
      element.classList.add(...accentColorClass);
    }
  }

  for (let connect of sliderConnects) {
    connect.style.background = connectAccentColorClass;
  }

  const steps = document.querySelectorAll('.step');
  steps[0].classList.remove('bg-gray-300');
  steps[0].classList.add(...accentColorClass);
}

document.addEventListener('DOMContentLoaded', changeDisplay);
