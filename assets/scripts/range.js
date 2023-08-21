'use strict'

let start = document.getElementById('start')
let end = document.getElementById('end')
const btn = document.getElementById('print-btn')
const display = document.getElementById('output')

// Function to generate the range

const range = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

// Function to display the range

const displayRange = () => {
  start = start.value
  end = end.value
  const values = range(start, end)
  display.textContent = `${values}`
}

btn.addEventListener('click', displayRange)
