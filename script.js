'use strict'

const xbox = document.querySelector('.xbox')
const playstation = document.querySelector('.playstation')

xbox.addEventListener('mouseover', () => {
  xbox.style.width = `70vw`
  playstation.style.width = `30vw`
})

xbox.addEventListener('mouseleave', () => {
  xbox.style.width = `50vw`
  playstation.style.width = `50vw`
})

playstation.addEventListener('mouseover', () => {
  xbox.style.width = `30vw`
  playstation.style.width = `70vw`
})

playstation.addEventListener('mouseleave', () => {
  xbox.style.width = `50vw`
  playstation.style.width = `50vw`
})
