// var inputValue = Number(document.getElementById('input').value)
// console.log(inputValue);
var sum = document.getElementById('btn1')
var minus = document.getElementById('btn2')

//Код v1.0 Дальше попробуем сократить

// sum.addEventListener('click', () => {
//   var input = document.getElementById('input')
//   inputValue = Number(input.value)
//   return input.value = inputValue+1
// })

// minus.addEventListener('click', () => {
//   var input = document.getElementById('input')
//   inputValue = Number(input.value)
//   return input.value = inputValue-1
// })


//v2.0 Решение при помощи функций 

var input = document.getElementById('input')

function onePlus(element) {
  var inputValue = Number(element.value)
  return element.value = inputValue + 1
}

function oneMinus(element) {
  var inputValue = Number(element.value)
  return element.value = inputValue - 1
}

sum.addEventListener('click', () => {onePlus(input)})
minus.addEventListener('click', () => {oneMinus(input)})

//----------------------------------------------------------------------------------------------------------

// Напишите функцию, которая принимает в качестве параметра массив и математическое  действие. 
// Функция должна проходиться по массиву и делать с элементами то, что указано во втором параметре. 
// В качестве аргумента второго параметра должна быть функция

var arr = [1, 2, 3]
function mult(arrayNum) {
  var multiplicationResult = 0
  for (const number of arrayNum) {
    multiplicationResult = multiplicationResult * number
  }
  return multiplicationResult
}

function exp(arrayNum) {
  
}