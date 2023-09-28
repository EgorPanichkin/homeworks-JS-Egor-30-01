const string = 'А роза упала на лапу Азора'

// Решение при помощи циклов (но без преобразования строки в массив)
// let stringFilter = ''
// for (let i = 0; i < string.length; i++) {
//   if (string[i] !== ' ') {
//     stringFilter += (string[i].toLocaleLowerCase())
//   }
// }
// console.log(stringFilter);

// let condition = true

// for (let i = 0; i < stringFilter.length; i++) {
//   if (stringFilter[i].toLowerCase() !== stringFilter[(stringFilter.length - i) - 1]) {
//     condition = false
//   }
// }

// condition ? console.log('Данная строка - палиндром') : console.log('Это НЕ палиндром');


// ---------------------------------------------------------------------------------------------------------------------
// Решение при помощи методов и массива

let arr = []

for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      arr.push(string[i].toLocaleLowerCase())
    }
  }

console.log(arr);

(arr.map((element, index) => {return (element === arr[(arr.length - index) - 1])}).indexOf(false) === -1 && arr.length !== 0) ? console.log('Данная строка - палиндром') : console.log('Это НЕ палиндром');

