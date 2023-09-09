/** 
Водолей (21.01 – 19.02) январь 31
Рыбы (20.02 – 20.03) февраль 28 / 29
Овен (21.03 – 20.04) март 31
Телец (21.04 – 21.05) апрель 30
Близнецы (22.05 – 21.06) май 31
Рак (22.06 – 22.07) июнь  30
Лев (23.07 – 21.08) июль 31
Дева (22.08 – 23.09) август 31
Весы (24.09 – 23.10) сенябрь 30
Скорпион (24.10 – 22.11) октябрь 31
Стрелец (23.11 – 22.12) ноябрь 30
Козерог (23.12 – 20.01) декабрь 31
 **/

var month = prompt('Введите месяц рождения')
var monthCorrect = month.toLowerCase()
var day = prompt('Введите день рождения')
var dayCorrect = Number(day)

if ((monthCorrect === 'январь' && dayCorrect>=21 && day<=31) || (monthCorrect === 'февраль' && dayCorrect<=19 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака ВОДОЛЕЙ')
} else if ((monthCorrect === 'февраль' && dayCorrect>=20 && day<=29) || (monthCorrect === 'март' && dayCorrect<=20 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака РЫБЫ');
} else if ((monthCorrect === 'март' && dayCorrect>=21 && day<=31) || (monthCorrect === 'апрель' && dayCorrect<=20 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака ОВЕН');
} else if ((monthCorrect === 'апрель' && dayCorrect>=21 && day<=30) || (monthCorrect === 'май' && dayCorrect<=21 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака ТЕЛЕЦ');
} else if ((monthCorrect === 'май' && dayCorrect>=22 && day<=31) || (monthCorrect === 'июнь' && dayCorrect<=21 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака БЛИЗНЕЦЫ');
} else if ((monthCorrect === 'июнь' && dayCorrect>=22 && day<=30) || (monthCorrect === 'июль' && dayCorrect<=22 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака РАК');
} else if ((monthCorrect === 'июль' && dayCorrect>=23 && day<=31) || (monthCorrect === 'август' && dayCorrect<=21 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака ЛЕВ');
} else if ((monthCorrect === 'август' && dayCorrect>=22 && day<=31) || (monthCorrect === 'сентябрь' && dayCorrect<=23 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака ДЕВА');
} else if ((monthCorrect === 'сентябрь' && dayCorrect>=24 && day<=30) || (monthCorrect === 'октябрь' && dayCorrect<=23 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака ВЕСЫ');
} else if ((monthCorrect === 'октябрь' && dayCorrect>=24 && day<=31) || (monthCorrect === 'ноябрь' && dayCorrect<=22 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака СКОРПИОН');
} else if ((monthCorrect === 'ноябрь' && dayCorrect>=23 && day<=30) || (monthCorrect === 'декабрь' && dayCorrect<=22 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака СТРЕЛЕЦ');
} else if ((monthCorrect === 'декабрь' && dayCorrect>=23 && day<=31) || (monthCorrect === 'январь' && dayCorrect<=20 && dayCorrect>=1)) {
  console.log('Ваш знак зодиака КОЗЕРОГ');
} else {
  console.error('Введите корректную дату');
}