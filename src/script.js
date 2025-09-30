const submitBtn = document.getElementById("submitBtn");
function handleSubmit(e) {
  e.preventDefault();
  alert("Form submitted");
}
submitBtn.addEventListener("click", handleSubmit);
