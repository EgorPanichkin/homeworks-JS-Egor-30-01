var arrayNumbers = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newArray = []

// console.log(arrayNumber[0].toString()[0]); - получение первой цифры числа

for (const number of arrayNumbers) {
  if ((number.toString()[0] === '2') || (number.toString()[0] === '5')) {
    newArray.push(number)
  }

}
console.log(newArray);
//---------------------------------------------------------------------------------------------------------------------

function getType(data) {
  return console.log(typeof(data));
}

getType(true)
getType('exaple string')
getType(76543)
getType([3, 5, 4])

//---------------------------------------------------------------------------------------------------------------------
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
console.log(tags);
var tagsCount = {}

//Вариант решения при помощи полной записи
for (var tag of tags) {
  if (tag in tagsCount) {
    tagsCount[tag] = tagsCount[tag] + 1;
  } else {
    tagsCount[tag] = 1
  }
}


//Вариант решения при помощи тернарного оператора
// for (var tag of tags) {
//   tagsCount[tag] = tagsCount[tag] ? tagsCount[tag] + 1 : 1
// }

console.log(tagsCount);