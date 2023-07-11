// Date for top left menu

let date = new Date();
let today = date.getDate();
let month = date.getMonth();
let week = date.getUTCDay();
let weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Monday',
];

let monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let dayName = weekDays[week - 1];

let monthName = monthNames[month];

let pDate = document.getElementById('date');

if (typeof document !== 'undefined') {
  let element = document.querySelector('.class-name');

  // Manipulating the DOM here
  pDate.innerHTML = `${dayName}, ${monthName} ${today}`;
}

// Date manipulation completed

//Form hide - appear

const bottomForm = document.querySelector('.form-bottom');
const topForm = document.querySelector('.form-top');
const plusSign = document.querySelector('#plus');
const radioSign = document.querySelector('.radio');

if (typeof document !== 'undefined') {
  let element = document.querySelector('.class-name');

  // Manipulating the DOM here
  bottomForm.style.display = 'none';
  plusSign.style.display = 'block';
  radioSign.style.display = 'none';

  topForm.addEventListener('click', () => {
    bottomForm.style.display = 'flex';
    radioSign.style.display = 'block';
    plusSign.style.display = 'none';
  });
}

//Form hide - appear completed.

// saved items creating.

const savedItem = document.querySelector('.saved');
savedItem.style.display = 'none';

let newElement = (event) => {
  event.preventDefault();
  const newItem = document.createElement('div');
  newItem.setAttribute('class', 'saved');
  const inputField = document.getElementById('txt');
  newItem.innerHTML = ` <input class="radio" type="radio" /><p>${inputField.value}</p>`;
  let errorMsg = document.createElement('p');
  errorMsg.setAttribute('class', 'errormsg');
  errorMsg.innerHTML = 'Please add a task';

  if (inputField.value.length < 1) {
    document.querySelector('.form-bottom-left').append(errorMsg);
  } else {
    document.querySelector('main').append(newItem);
    inputField.value = '';
    document.querySelector('.errormsg').remove();
  }
};

const addButton = document.querySelector('#add');

addButton.addEventListener('click', newElement);
