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

function changeDisplayBlockForward(targetID) {
  console.log('changeDisplayBlockForward');
  const target = document.getElementById(targetID);
  const all = Array.from(document.querySelectorAll('*[id^="selectionBlock"]'));
  let promises = all.map((element) => {
    return new Promise((resolve) => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('slide-out-to-top');
        element.addEventListener(
          'animationend',
          function () {
            element.classList.add('hidden');
            element.classList.remove('slide-out-to-top');
            resolve();
          },
          { once: true }
        );
      } else {
        resolve();
      }
    });
  });
  Promise.all(promises).then(() => {
    if (target.parentElement.classList.contains('hidden')) {
      target.parentElement.classList.remove('hidden');
    }
    if (target.classList.contains('hidden')) {
      target.classList.remove('hidden');
      target.classList.add('slide-in-from-bottom');
      target.addEventListener(
        'animationend',
        () => target.classList.remove('slide-in-from-bottom'),
        { once: true }
      );
    }
  });
}

function changeDisplayBlockBackward(targetID) {
  console.log('changeDisplayBlockBackward');
  const target = document.getElementById(targetID);
  const all = Array.from(document.querySelectorAll('*[id^="selectionBlock"]'));
  let promises = all.map((element) => {
    return new Promise((resolve) => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('slide-out-to-bottom');
        element.addEventListener(
          'animationend',
          function () {
            element.classList.add('hidden');
            element.classList.remove('slide-out-to-bottom');
            resolve();
          },
          { once: true }
        );
      } else {
        resolve();
      }
    });
  });
  Promise.all(promises)
    .then(() => {
      if (target.parentElement.classList.contains('hidden')) {
        target.parentElement.classList.remove('hidden');
      }
      if (target.classList.contains('hidden')) {
        target.classList.remove('hidden');
        target.classList.add('slide-in-from-top');
        target.addEventListener(
          'animationend',
          () => target.classList.remove('slide-in-from-top'),
          { once: true }
        );
      }
    })
    .catch((error) =>
      console.error('Error during backward transition:', error)
    );
}

function stepOneSelection(radioID) {
  let radio = document.getElementById(radioID);
  let selectedRadio = radio.querySelector('input:checked');
  if (selectedRadio.value === 'random') {
    changeDisplayBlockForward('selectionBlockStepRandomResult');
    clearTableContent('stepRandomTable');
    appendTableHeaders('stepRandomTable');
    appendRandomRestaurant('stepRandomTable');
  } else {
    changeDisplayBlockForward('selectionBlockStepFilter');
  }
  stepSwitch(3);
}
