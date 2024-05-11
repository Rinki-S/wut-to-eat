function getCheckboxes(menuID) {
  const menu = document.getElementById(menuID);
  const checkboxes = menu.querySelectorAll('input[type="checkbox"]');
  const checked = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
  checked.forEach((checkbox) => {
    console.log(checkbox.value);
  });
}
