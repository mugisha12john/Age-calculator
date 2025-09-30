const submitBtn = document.getElementById("submitBtn");
// get the input elements for day, month, year values
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
// get the result elements for each input field
const resultDay = document.getElementById("result-day");
const resultMonth = document.getElementById("result-month");
const resultYear = document.getElementById("result-year");
// get the error elements for each input field
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
//get labels
const labelDay = document.querySelector("label[for='day']");
const labelMonth = document.querySelector("label[for='month']");
const labelYear = document.querySelector("label[for='year']");
function handleSubmit(e) {
  e.preventDefault();
  alert("Form submitted");
}
submitBtn.addEventListener("click", handleSubmit);
