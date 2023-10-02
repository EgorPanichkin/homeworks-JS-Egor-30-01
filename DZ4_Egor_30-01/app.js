// Получение значения input
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

var arr = [1, 2, 3]
console.log(arr);

//Функция возведения в квадрат каждого элемента массива, 
function exp(Num) {
    return Num * Num
}

//Функция выполняющая действие с каждым элементом массива, результат возвращается в новом массиве
function result(array, func) {
  var resultArr = []
  for (let i = 0; i < array.length; i++) {
    resultArr[i] = func(array[i])
  }
  return resultArr
}


console.log(result(arr, exp));