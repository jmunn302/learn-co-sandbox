const button = document.querySelector('#add')
button.addEventListener('click', (event) => {
  const div = document.querySelector('#total')
 const oldValue = parseInt(div.innerText, 10)
div.innerText = oldValue + 1
})

const minusButton = document.querySelector('#subtract')
minusButton.addEventListener('click', (event) => {
  const div = document.querySelector('#total')
    if (div.innerText === '0') {
    return
  }
 const oldValue = parseInt(div.innerText, 10)
div.innerText = oldValue - 1
})