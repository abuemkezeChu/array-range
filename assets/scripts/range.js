'use strict'

const start = document.getElementById('start')
const end = document.getElementById('end')
const btn = document.getElementById('print-btn')
const display = document.getElementById('output')


// Function to generate the range

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// Function to display the range

const displayRange = () => {
  const startNumber = parseInt(start.value)
  const endNumber = parseInt(end.value)

  if (isNaN(startNumber) || isNaN(endNumber)) {
    display.textContent = 'Please enter valid numbers for start and end.';
  } else {
    const values = range(startNumber, endNumber);
    display.textContent = `${values.join(', ')}`;
  }
}

btn.addEventListener('click', displayRange)
