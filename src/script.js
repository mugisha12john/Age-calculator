const day = document.getElementById('day')
const month =document.getElementById('month')
const year = document.getElementById('year')
const error=document.querySelectorAll("error-text")

const form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  if (validateForm()) { 
    form.submit();
  }
});

function validateForm() {
if(day.value.trim() === ''){
    error.innerText = 'please enter a day'
}
}
