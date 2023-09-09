// var starbucks = {
//   coffe: ['latte', 'capuchino', 'americano'],
//   tea: ['black', 'green', 'white'],
//   milkshake: ['mango', 'chocolate', 'pineapple'],
// }

var starbucks = {
  coffe: {
    latte: 'latte - bla bla bla',
    americano: 'americano - bla bla bla'
  },
  tea: {
    black: 'black - bla bla bla',
    green: 'green - bla bla bla'
  }
}

var choiseDrink = prompt('Enter which drink you would like').toLowerCase()

if (choiseDrink in starbucks) {
  // var drink = (starbucks[choiseDrink])
  var typeDrink = prompt(`choose your ${choiseDrink} type`).toLowerCase()
  if (typeDrink in starbucks[choiseDrink]) {
    console.log(`You choise ${choiseDrink} - ${typeDrink}. Thank for your order ${starbucks[typeDrink]}`);
  } else {
    console.log("We haven't this drink");
  }
} else {
  console.log("We haven't this drink.");
}

var sites = ['Bishkek', 'Los Angeles', 'Chicago',  'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for (let i = 0; i < sites.length; i++) {
  var sity = sites[i];
  if (sity.length > 9) {
    console.log(sity);
  }
}

var day = Number(prompt('Введите номер дня недели'))

switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log('Такого дня нет');
    break;
}