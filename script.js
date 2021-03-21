const seed = new Date();

const compute = (value) => {
  return value < 9 ? "0".concat(String(value)) : String(value);
};

const dd = compute(seed.getDate());
const mm = compute(seed.getMonth() + 1);
const yyyy = compute(seed.getFullYear());

const render = () => `${dd}/${mm}/${yyyy}`;

const videochatBox = document.querySelector('.videochat-box');
const videochatTitle = document.querySelector('.videochat-title');
const videochatIcon = document.querySelector('.videochat-icon');

videochatBox.addEventListener('click', () => boxStyleHandler('31', '27', '3127'));


const boxStyleHandler = (day, month, year) => {
  const newDay = +(day);
  const newMonth = +(month);
  const newYear = +(year);
  // const dayMonthConcat = day.concat(month);
  const dayMonthConcat = day + month;
  // const newDayMonthConcat = +(dayMonthConcat);

  // console.log('newDayMonthConcat => ', newDayMonthConcat);

  let ddIsPrime = true;
  let yyyyIsOdd = false;
  let alertMsg = '';

  console.log('newDay => ', newDay);
  console.log('newMonth => ', newMonth);
  console.log('newYear => ', newYear);
  console.log('videochatTitle => ', videochatTitle);
  console.log('videochatIcon => ', videochatIcon);
  console.log('dayMonthConcat  => ', dayMonthConcat);
  console.log('yyyy => ', year);

  // e' dd un numero PRIMO ?
  for (let i = 1; i <= newDay; i++) {
    if (i !== 1 && newDay !== i && newDay % i === 0) {
      ddIsPrime = false;
    }
  }

  // e' yyyy un numero DISPARI ?
  if (yyyy % 2 !== 0) {
    yyyyIsOdd = true;
  }

  // yyyy e' dispari
  if (yyyyIsOdd) {
    videochatBox.classList.add('change-border-color-182d4a');
    alertMsg = alertMsg + `\n${newYear} e' DISPARI`;
  }
  
  // dd e' un numero Primo
  if (ddIsPrime) {
    videochatTitle.classList.add('uppercase-title');
    alertMsg = alertMsg.concat(`\n${newDay} e' un Numero Primo`);

    if (yyyyIsOdd) {
      videochatBox.classList.add('change-border-color-rgb')
      alertMsg = alertMsg.concat(` e ${yyyy} e' dispari`);
    }
  } else {
    alertMsg = alertMsg.concat(`\n${newDay} NON e' un Numero Primo`);
  }

  // dd e' maggiore o uguale a mm
  if(newDay >= newMonth) {
    videochatIcon.classList.add('rotate-icon-135');
    alertMsg = alertMsg + `\n${newDay} e' maggiore o uguale a ${newMonth}`;
  }

  // ddmm === yyyy
  if (dayMonthConcat === year) {

    videochatIcon.classList.add('rotate-icon-45');
    console.log('ddmm , yyyy => ', dayMonthConcat, year);
    alertMsg = alertMsg + `\n${dayMonthConcat} e' UGUALE a ${newYear}`;
  }

  // (mm^2 + dd^3) e' un intero formato da un numero dispari di cifre
  const powerSum =  Math.pow(newMonth, 2) + Math.pow(newDay, 3);
  const powerSumStr = powerSum.toString();
  console.log('powerSum => ', powerSum);
  console.log('powerSumStr => ', powerSumStr);
  if (powerSumStr.length % 2 !== 0){
    videochatBox.classList.add('bg-lightblue');
    alertMsg = alertMsg + `\n${powerSum} e' un intero formato da un numero dispari di cifre`;
  }

  alert(alertMsg);
}



const datePicker = document.getElementById('date-picker');
datePicker.textContent = render();

console.log('videochatBox => ', videochatBox);




const months = {
  JAN: 'JAN',
  FEB: 'FEB',
  MAR: 'MAR',
  APR: 'APR',
  MAY: 'MAY',
  JUN: 'JUN',
  JUL: 'JUL',
  AUG: 'AUG',
  SEP: 'SEP',
  OCT: 'OCT',
  NOV: 'NOV',
  DEC: 'DEC'
}



const monthToString = (monthCode) => {
  switch(monthCode){
    case 0:
      return months.JAN;
    case 1:
      return months.FEB;
    case 2:
      return months.MAR;
    case 3:
      return months.APR;
    case 4:
      return months.MAY;
    case 5:
      return months.JUN;
    case 6:
      return months.JUL;
    case 7:
      return months.AUG;
    case 8:
      return months.SEP;
    case 9:
      return months.OCT;
    case 10:
      return months.NOV;
    case 11:
      return months.DEC;
    default:
      return
  }
}

const monthToNumber = (monthString) => {
  switch(monthString){
    case months.JAN:
      return 0;
    case months.FEB:
      return 1;
    case months.MAR:
      return 2;
    case months.APR:
      return 3;
    case months.MAY:
      return 4;
    case months.JUN:
      return 5;
    case months.JUL:
      return 6;
    case months.AUG:
      return 7;
    case months.SEP:
      return 8;
    case months.OCT:
      return 9;
    case months.NOV:
      return 10;
    case months.DEC:
      return 11;
    default:
      return
  }
}


const calendarWeekDays = document.querySelector('.days-of-the-week');
console.log('calendarWeekDays => ', calendarWeekDays)

const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

for ( let day = 0; day < 7; day++) {
  console.log(daysOfTheWeek[day]);
  calendarWeekDays.insertAdjacentHTML("beforeend", `<div class='day' >${daysOfTheWeek[day]}</div>`);
}

let activeMonth = monthToString(new Date().getUTCMonth());
console.log('activeMonth => ', activeMonth);

let activeYear = new Date().getFullYear();
console.log('activeYear => ', activeYear);

const nextButtonHandler = () => {
   if (activeMonth === months.DEC) {
    activeMonth = months.JAN;
    activeMonthTitle.textContent = activeMonth;
    console.log('nextButtonHandler => activeMonth => ', activeMonth)
    return;
  }

  activeMonth = monthToString(monthToNumber(activeMonth) + 1);
  activeMonthTitle.innerHTML = activeMonth;
  console.log('nextButtonHandler => activeMonth => ', activeMonth)
}

const previousButtonHandler = () => {
  if (activeMonth === months.JAN) {
    activeMonth = months.DEC;
    activeMonthTitle.textContent = activeMonth;
    console.log('previousButtonHandler => activeMonth => ', activeMonth)
    return;
  }
  activeMonth = monthToString(monthToNumber(activeMonth) - 1);
  activeMonthTitle.textContent = activeMonth;
  console.log('previousButtonHandler => activeMonth => ', activeMonth)
}

// const myDate = new Date(1984, 3, 1)
// console.log('myDate => ', myDate);

const activeMonthTitle = document.querySelector('.month-year');
const activeYearTitle = document.querySelector('.month-year');
console.log('activeMonthTitle => ', activeMonthTitle);
console.log('activeYearTitle => ', activeYearTitle);
activeMonthTitle.insertAdjacentHTML("beforeend", `<h1>${activeMonth}</h1>`)
activeMonthTitle.insertAdjacentHTML("beforeend", `<p>${activeYear}</p>`)


// BUTTONS EVENT LISTENERS
const nextButton = document.querySelector('.btn-right');
const previousButton = document.querySelector('.btn-left');

nextButton.addEventListener('click', nextButtonHandler);
previousButton.addEventListener('click', previousButtonHandler);