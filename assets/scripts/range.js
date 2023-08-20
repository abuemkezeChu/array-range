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
