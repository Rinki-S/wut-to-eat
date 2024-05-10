function changeRadioChecked(targetID) {
  let target = document.getElementById(targetID);
  target.checked = true;
  let siblings = target.parentElement.children;
  for (let sibling of siblings) {
    if (sibling !== target) {
      sibling.checked = false;
    }
  }
}
