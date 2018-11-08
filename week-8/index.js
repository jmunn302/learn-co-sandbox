function addToDo(event) {
  event.preventDefault()
  const input = document.querySelector('#new-to-do')
  const newToDo = input.value
  const div = document.querySelector('#todos')
  const listItem = document.createElement('li')
  listItem.innerText = newToDo
  listItem.addEventListener('click', (event) => {
    listItem.classList.add('finished')
  })
  
  div.appendChild(listItem)
  input.value = ''
  
}

const button = document.querySelector("#submitbutton")
button.addEventListener('click', addToDo)
