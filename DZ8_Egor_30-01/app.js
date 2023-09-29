const string = 'А роза упала на лапу Азора'

// Решение при помощи циклов (но без преобразования строки в массив)
let stringFilter = ''
for (let i = 0; i < string.length; i++) {
  if (string[i] !== ' ') {
    stringFilter += (string[i].toLowerCase())
  }
}
console.log(stringFilter);

let condition = true

for (let i = 0; i < stringFilter.length; i++) {
  if (stringFilter[i].toLowerCase() !== stringFilter[(stringFilter.length - i) - 1]) {
    condition = false
  }
}

condition ? console.log('Данная строка - палиндром') : console.log('Это НЕ палиндром');


// ---------------------------------------------------------------------------------------------------------------------
// Решение при помощи методов и массива

let arr = []

for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && string[i] !== ',' && string[i] !== '.') {
      arr.push(string[i].toLocaleLowerCase())
    }
  }

console.log(arr);

(arr.map((element, index) => {return (element === arr[(arr.length - index) - 1])}).indexOf(false) === -1 && arr.length !== 0) ? console.log('Данная строка - палиндром') : console.log('Это НЕ палиндром');

//--------------------------------------------------------------------------------------------------------------------------
// Решение с 2 массивами и методами push и unshift

let arr1 = []
let arr2 = []

for (let i = 0; i < string.length; i++) {
  if (string[i] !== ' ' && string[i] !== ',' && string[i] !== '.') {
    arr1.push(string[i].toLowerCase())
    arr2.unshift(string[i].toLowerCase())
  }
}
console.log(arr1, arr2);


if (arr1.map((element,index) => {return element === arr2[index]}).indexOf(false) === -1 && arr1.length !== 0) {
  console.log('Данная строка - палиндром');
} else {
  console.log('Это НЕ палиндром')
}