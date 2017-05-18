const d=document;               // just a shorthand
const bounceTime = 300;         // how long to keep the changing class on the result

const result=d.getElementById('result');

function operate(evt) {
  var operator = this.getAttribute('data-op');
  if (operator === '0') {
    clearResults();
  } else {
    changeResult(parseInt(operator + "1"));
  }
}

// Add the changing class, then take it away after a moment
function bounceResult() {
  result.classList.add('changing');
  setTimeout(function(){result.classList.remove('changing')}, bounceTime);
}

// clear the result display
function clearResults(){
  bounceResult();
  result.innerHTML = '';
}

// change the result by the value passed in
function changeResult(by){
  bounceResult();

  // using .textContent here, since the result could contain more HTML
  // also, multiplying the value by 1 forces it to convert to an integer.
  // this works if the textContent is empty, too
  result.textContent = by + result.textContent*1;
}

// Add the operate event handler to all the buttons
// Using querySelectorAll so we have the forEach method
d.querySelectorAll('button')
  .forEach(function(el){
    el.addEventListener('click', operate);
  });
