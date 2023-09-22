//   ⁃ Напишите функцию, куда может прилетать неограниченный список названия книг (используйте rest параметры). 
// Функция должна выводить только те книги, в названиях которых есть буква «у» и отдельным списком уже все остальные книги . 
// Использовать filter нельзя, напишите свою версию метода фильтр) 
//   ⁃ Реализуйте калькулятор. Будет два инпута для ввода двух чисел, будут кнопки +, -, /, * и =. 
// При клике на + два числа складываются и так далее. Над стилями не заморачивайтесь, главное функционал. 
// При попытке поделить на 0, внутри инпута выведите слово «ошибка» красным цветом


function books(letter, ...bookNames) {
  const filtredBooks = []
  const otherBooks = []
  for (const bookName of bookNames) {
    if (bookName.toLowerCase().includes(letter)) {
      filtredBooks.push(bookName)
    } else {
      otherBooks.push(bookName)
    }
  }
  
  return console.log(`Книги в названии которых есть буква ${letter}: ` + filtredBooks.join(', ')), console.log('Остальные книги: ' + otherBooks.join(', '))
}

books('у', 'Преступление и наказание', 'Убийство в Восточном экспрессе', 'Евгений Онегин', 'Код да Винчи','Двенадцать стульев', 'А зори здесь тихие', 'Война и мир', '20000 лье под водой', )

// ------------------------------------------------------------------------------------------------------------------------------
// Версия 1.0
// Получение необходимых элементов из документа
const resultBox = document.createElement('div')
const sumBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const multBtn = document.querySelector('#mult')
const divBtn = document.querySelector('#dividion')
const enterBtn = document.querySelector('#enter')
const main = document.querySelector('.main')

// let result
// let num1
// let num2

// function sum(n1, n2) {
//   return n1 + n2
// }

// function diff(n1, n2) {
//   return n1 - n2
// }

// function mult(n1, n2) {
//   return n1 * n2
// }

// function div(n1, n2) {
//   return n1 / n2
// }

// function getNumbers() {
//   num1 = Number(document.querySelector('#numberOne').value)
//   num2 = Number(document.querySelector('#numberTwo').value)
//   return num1, num2
// }

// sumBtn.onclick = function () {
//   getNumbers()
//   return result = sum(num1, num2)
// }
// minusBtn.onclick = function () {
//   getNumbers()
//   return result = diff(num1, num2)
// }
// multBtn.onclick = function () {
//   getNumbers()
//   return result = mult(num1, num2)
// }
// divBtn.onclick = function () {
//   getNumbers()
//   if (!(num2 === 0)) {
//     return result = div(num1, num2)
//   } else {
//     return result = 'Ошибка. Нельзя делить на 0'
//   }  
// }
// enterBtn.onclick = function () {
//   main.append(resultBox)
//   resultBox.style.color = 'black'
//   if (typeof(result) === 'string') {
//     resultBox.style.color = 'red'
//   }
//   return resultBox.innerText = result
// }




// Версия 2.0 при помощи функции eval() (НЕ БЕЗОПАСНО)

// console.log(minusBtn.innerText) -- получение значения кнопки

const input1 = document.querySelector('#numberOne')
const input2 = document.querySelector('#numberTwo')
let num1
let num2
let action

// Тест работы функции eval
// const result = eval(`${num1}${action}${num2}`)
// console.log(`${num1} ${action} ${num2} = ${result}`)


input1.addEventListener('blur', () => {
  num1 = Number(input1.value)
  vision(num1, num2, action)
  return num1
})

input1.addEventListener('focus', () => {
  input1.style.color = 'black'
  input1.value = null
})

input2.addEventListener('blur', () => {
  num2 = Number(input2.value)
  vision(num1, num2, action)
  return num2
})

input2.addEventListener('focus', () => {
  input2.value = null
})

let buttons = document.querySelectorAll('button')
console.log(buttons)

for (let i = 0; i < buttons.length - 1; i++) {
  buttons[i].addEventListener('click', () => {
    console.log(buttons[i].innerText);
    action = buttons[i].innerText
    vision(num1, num2, action)
    return action
  })
}

buttons[4].addEventListener('click', () => {
  if ((action === '/')&(num2 === 0)) {
    input1.style.color = 'red'
    input1.value = 'Ошибка'
  } else if (num1 === undefined || num2 === undefined){
    input1.style.color = 'red'
    input1.value = 'Введите число'
  } else if (action === undefined){
    input1.style.color = 'red'
    input1.value = 'Выберите действие'
  } else {
    input1.style.color = 'black'
    const result = eval(`${num1} ${action} ${num2}`)
    resultBox.innerHTML = (`${num1} ${action} ${num2} = ${result}`)
    main.append(resultBox)
    console.log(`${num1} ${action} ${num2}`)
  }
})

// Функция что бы не выводились undefind значения
function vision(num1, action, num2) {
  const arr = [num1, num2, action]
  console.log(arr);
  resultBox.innerHTML = arr.join(' ')
  main.append(resultBox)
}

