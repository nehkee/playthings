// Reference all DOM elements
const weightType = document.getElementById('weightType');
const weightValue = document.getElementById('weightValue');
const ozCard = document.getElementById('ozCard');
const kgCard = document.getElementById('kgCard');
const toPounds = document.getElementById('toPounds');
const toKilos = document.getElementById('toKilos');
const toGrams = document.getElementById('toGrams');
const toOunces = document.getElementById('toOunces');
const output = document.getElementById('output');

// Get a list of all cards
const cardArray = ['lbCard', 'kgCard', 'gmCard', 'ozCard'];
// Keep track of select box option
let wt = 0;

// Hide input box and cards on startup
weightValue.style.visibility = 'hidden';
output.style.visibility = 'hidden';

// Listen for change in select box
weightType.addEventListener('change', (e) => {
  // Show input box and cards
  weightValue.style.visibility = 'visible';
  output.style.visibility = 'visible';
  // Get current selected option value
  let val = e.target.value;
  // Hide selected card and display the rest
  if(val === '1') {
    wt = 1;
    hideCard('kgCard');
  }
  if(val === '2') {
    wt = 2;
    hideCard('lbCard');
  }
  if(val === '3') {
    wt = 3;
    hideCard('gmCard');
  }
  if(val === '4') {
    wt = 4;
    hideCard('ozCard');
  }
});

// Updates converted values on input
weightValue.addEventListener('input', (e) => {
  let val = e.target.value;
  convert(wt, val);
});

// FUNCTION: Hides currently selected card and displays the rest
function hideCard(card) {
  for(var i=0; i < cardArray.length; i++) {
    if(cardArray[i] === card) {
      let match = cardArray[i];
      document.getElementById(match).style.display = 'none';
    } else {
      document.getElementById(cardArray[i]).style.display = 'block';
    }
  }
  updateValues();
}

// FUNCTION: Used only with hideCard function
// Updates cards converted values when selected weight type has changed
function updateValues() {
  let val = weightValue.value;
  convert(wt, val);
}

// FUNCTION: Handles all conversion ratios
function convert(wt, val) {
  switch(wt) {
    case 1: // Kilos to...
      toPounds.innerHTML = (val*2.2046).toFixed(2);
      toGrams.innerHTML = val*1000;
      toOunces.innerHTML = (val*35.274).toFixed(2);
      break;
    case 2: // Pounds to...
      toKilos.innerHTML = (val/2.2046).toFixed(2);
      toGrams.innerHTML = (val/0.0022046).toFixed(2);
      toOunces.innerHTML = val*16;
      break;
    case 3: // Grams to...
      toKilos.innerHTML = val/1000;
      toPounds.innerHTML = val/500;
      toOunces.innerHTML = (val*0.035274).toFixed(4);
      break;
    case 4: // Ounces to...
      toKilos.innerHTML = (val/35.274).toFixed(3);
      toPounds.innerHTML = (val*0.062500).toFixed(3);
      toGrams.innerHTML = (val/0.035274).toFixed(4);
      break;
  }
}
