// Dom Selection
const result = document.getElementById('result');
const submit = document.getElementById('submit');
const num = document.getElementById('number');

//add event listener
submit.addEventListener('click', binary);

//execute function
function binary(e) {
  //basic validation
  e.preventDefault();
  if (num.value === '') {
    alert("Please write a number")
  } else if (num.value < 0) {
    alert('Please write a Positive Number')
  } else {
    result.style.visibility = 'visible';
  }
  //converting
  let binaryNumber = Number(num.value).toString(2);
  result.innerHTML = binaryNumber;
  
}
