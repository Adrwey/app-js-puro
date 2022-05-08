const form = document.querySelector('.sendForm')
const ul = document.querySelector('ul')
const span = document.querySelector('span')
const inputSearch = document.querySelector('#search')

form.addEventListener('submit', event => {
  event.preventDefault()
  let li = document.createElement('li')
  li.innerHTML = `${event.target.add.value} <span>X</span>`
  ul.append(li)
  event.target.add.value = ''
})

ul.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    event.target.parentElement.remove()
  }
})

inputSearch.addEventListener('input', event => {
  const finded = str => {
    return !str.includes(event.target.value)
  }

  Array.from(ul.children).forEach(item => {
    if (finded(item.innerText)) {
      item.classList.add('hidden')
    }
  })
  Array.from(ul.children).forEach(item => {
    if (!finded(item.innerText)) {
      item.classList.remove('hidden')
    }
  })
})
