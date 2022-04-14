function validate() {
  const firstNameBox = document.querySelector("#firstNameBox");
  const firstEmptySpan = document.querySelector("#firstEmptySpan");
  const first2Span = document.querySelector("#first2Span");
  const first20Span = document.querySelector("#first20Span");

  const isValidFirstName = validateInput(firstNameBox, firstEmptySpan, first2Span, first20Span);

  const lastNameBox = document.querySelector("#lastNameBox");
  const lastEmptySpan = document.querySelector("#lastEmptySpan");
  const last2Span = document.querySelector("#last2Span");
  const last20Span = document.querySelector("#last20Span");

  const isValidLastName = validateInput(lastNameBox, lastEmptySpan, last2Span, last20Span);

  const emailBox = document.querySelector("#emailBox");
  const emailEmptySpan = document.querySelector("#emailEmptySpan");
  const email2Span = document.querySelector("#email2Span");
  const email20Span = document.querySelector("#email20Span");

  const isValidEmail = validateInput(emailBox, emailEmptySpan, email2Span, email20Span);

  if (isValidFirstName && isValidLastName && isValidEmail) {
    displayInfo(firstNameBox, lastNameBox, emailBox);
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
