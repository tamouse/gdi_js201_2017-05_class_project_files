
const bounceTime = 300;         // how long to keep the changing class on the result


const d=document;               // just a shorthand

// Grab the various parts that we'll work with.
// These should be constants because we're not changing these elements
const addBtn=d.getElementById('add');
const subBtn=d.getElementById('sub');
const resetBtn=d.getElementById('reset');

// This can be a const as well
var result=d.getElementById('result');

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

// add the event listers to activate the counter
addBtn.addEventListener('click', function(){changeResult(+1)});
subBtn.addEventListener('click', function(){changeResult(-1)});
resetBtn.addEventListener('click', function(){clearResults()});
