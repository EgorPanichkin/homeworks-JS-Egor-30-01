// Получаем кнопку в качестве переменной
const button = document.querySelector('#button')
console.log(button);

// Создаем DOM элемент в котором будет текст в качестве переменной
const wrapper = document.querySelector('.wrapper')
const textDiv = document.createElement('div')

// Вешаем обработчик событий на кнопку
button.addEventListener('click', () => {
  const label = prompt()
  addText(label, textDiv)
})

// Функция добавления текста на станицу и вызова alert
function addText(text, element) {
  if (text === '') {
    alert("Вы не заполнили поле!!!")
  } else {
    wrapper.append(element)
    element.innerHTML = text
  }
}

// ---------------------------------------------------------------------------------------------------------------------

const mainArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text',  true, false,  23, null, 'qwerty', '456']
const typeArray = []

typeArray.push(stringArray = mainArray.filter((element) => typeof(element) === 'string'))
typeArray.push(numberArray = mainArray.filter((element) => typeof(element) === 'number'))
typeArray.push(booleanArray = mainArray.filter((element) => typeof(element) === 'boolean'))
typeArray.push(objectArray = mainArray.filter((element) => typeof(element) === 'object'))
typeArray.push(undefinedArray = mainArray.filter((element) => typeof(element) === 'undefined'))

console.log(typeArray)

const sortArray = typeArray.sort((arr1, arr2) => arr2.length - arr1.length)
console.log(sortArray)

sortArray.forEach((array) => {
  array.forEach((arrayElement) => {
      if (String(arrayElement).length > 3) {
        console.log(arrayElement)
      }
    })
})