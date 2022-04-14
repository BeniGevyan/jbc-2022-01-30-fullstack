function validate() {
  const inputs = document.querySelectorAll("input");
  const spans = document.querySelectorAll("span");

  const isValidFirstName = validateInput(inputs[0], spans[0], spans[1], spans[2]);
  const isValidLastName = validateInput(inputs[1], spans[3], spans[4], spans[5]);
  const isValidEmail = validateInput(inputs[2], spans[6], spans[7], spans[8]);

  if (isValidFirstName && isValidLastName && isValidEmail) {
    displayInfo(inputs[0], inputs[1], inputs[2]);
  }
}

function displayInfo(firstNameInput, lastNameInput, emailInput) {
  alert(`${firstNameInput.value} ${lastNameInput.value} ${emailInput.value}`);
}

function validateInput(input, emptySpan, lessThan2Span, moreThan20Span) {
  clearError(input, emptySpan, lessThan2Span, moreThan20Span);

  let isValid = true;
  if (isEmpty(input)) {
    showError(input, emptySpan);
    isValid = false;
  }

  if (isLessThan2(input)) {
    showError(input, lessThan2Span);
    isValid = false;
  }

  if (isMoreThan20(input)) {
    showError(input, moreThan20Span);
    isValid = false;
  }

  return isValid;
}

function isEmpty(input) {
  return input.value === "";
}

function isLessThan2(input) {
  return input.value.length < 2;
}

function isMoreThan20(input) {
  return input.value.length > 20;
}

function showError(input, span) {
  input.style.borderColor = "red";
  span.style.display = "block";
}

function clearError(input, emptySpan, lessThan2Span, moreThan20Span) {
  input.style.borderColor = "unset";
  emptySpan.style.display = "none";
  lessThan2Span.style.display = "none";
  moreThan20Span.style.display = "none";
}

function onWindowLoad() {
  const btn = document.querySelector("#btn");
  btn.onclick = validate;
}

window.onload = onWindowLoad;
