const buttons = document.querySelectorAll('button')
const answers = document.querySelectorAll('.answer__text')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    answers[i].classList.toggle('active')
    buttons[i].innerText === "Показать ответ" ? buttons[i].innerText = "Скрыть ответ" : buttons[i].innerText = "Показать ответ"     
  })  
}