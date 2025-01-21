console.log("Hello World!");

//form.html submit button output//
const form = document.querySelector('#success')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
});