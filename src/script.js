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

//validate day input field
function validateDay() {
  if (day.value === "") {
    errorDay.innerText = "This field is required";
    labelDay.classList.add("text-red-500");
    day.classList.add("border-red-500");
    errorDay.classList.add("text-red-500");
  } else if (day.value < 1 || day.value > 31) {
    errorDay.innerText = "Must be a valid day";
    labelDay.classList.add("text-red-500");
    day.classList.add("border-red-500");
    errorDay.classList.add("text-red-500");
  } else {
    errorDay.innerText = "";
    labelDay.classList.remove("text-red-500");
    day.classList.remove("border-red-500");
  }
}
day.addEventListener("input", validateDay);

//validate month input field 
function validateMonth() {
  if (month.value === "") {
    errorMonth.innerText = "This field is required";
    labelMonth.classList.add("text-red-500");
    month.classList.add("border-red-500");
    errorMonth.classList.add("text-red-500");
  } else if (month.value < 1 || month.value > 12) {
    errorMonth.innerText = "Must be a valid month";
    labelMonth.classList.add("text-red-500");
    month.classList.add("border-red-500");
    errorMonth.classList.add("text-red-500");
  } else {
    errorMonth.innerText = "";
    labelMonth.classList.remove("text-red-500");
    month.classList.remove("border-red-500");
  }
}
month.addEventListener("input", validateMonth);

//validate year input field
function validateYear() {
  const currentYear = new Date().getFullYear();
  if (year.value === "") {
    errorYear.innerText = "This field is required";
    labelYear.classList.add("text-red-500");
    year.classList.add("border-red-500");
    errorYear.classList.add("text-red-500");
  } else if (year.value > currentYear) {
    errorYear.innerText = "Must be in the past";
    labelYear.classList.add("text-red-500");
    year.classList.add("border-red-500");
    errorYear.classList.add("text-red-500");
  } else {
    errorYear.innerText = "";
    labelYear.classList.remove("text-red-500");
    year.classList.remove("border-red-500");
  }
}
year.addEventListener("input", validateYear);


function handleSubmit(e) {
  e.preventDefault();
  alert("Button clicked");
}
submitBtn.addEventListener("click", handleSubmit);
