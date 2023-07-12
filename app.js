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
  // Manipulating the DOM here
  pDate.innerHTML = `${dayName}, ${monthName} ${today}`;
}

// Date manipulation completed

//Form hide - appear

const bottomForm = document.querySelector('.form-bottom');
const topForm = document.querySelector('.form-top');
const plusSign = document.querySelector('#plus');
const radioSign = document.querySelector('.form-img');

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

// let newElement = (event) => {
//   event.preventDefault();
//   const newItem = document.createElement('ul');
//   newItem.setAttribute('class', 'saved');
//   const inputField = document.getElementById('txt');

//   const existingErrorMsg = document.querySelector('.errormsg');

//   if (inputField.value.length < 1 && !existingErrorMsg) {
//     let errorMsg = document.createElement('p');
//     errorMsg.setAttribute('class', 'errormsg');
//     errorMsg.innerHTML = 'Please add a task';
//     document.querySelector('.form-bottom-left').append(errorMsg);
//   } else if (inputField.value.length < 1 && existingErrorMsg) {
//     alert('You can not create a task without Adding it!');
//   } else {
//     let inputField1 = document.getElementById('txt').value;
//     const uniqueKey = inputField.value;
//     localStorage.setItem(uniqueKey, inputField1);
//     const value = localStorage.getItem(uniqueKey);
//     newItem.innerHTML = `<img src="/images/unchecked.png" class="img-saved"/><li>${value}</li>`;
//     document.querySelector('main').append(newItem);

//     inputField.value = '';

//     if (existingErrorMsg) {
//       existingErrorMsg.remove();
//     }
//   }
// };

// const addButton = document.querySelector('#add');

// addButton.addEventListener('click', newElement);

// const newElement = (event) => {
//   event.preventDefault();
//   const newItem = document.createElement('ul');
//   newItem.setAttribute('class', 'saved');
//   const inputField = document.getElementById('txt');

//   const existingErrorMsg = document.querySelector('.errormsg');

//   if (inputField.value.length < 1 && !existingErrorMsg) {
//     let errorMsg = document.createElement('p');
//     errorMsg.setAttribute('class', 'errormsg');
//     errorMsg.innerHTML = 'Please add a task';
//     document.querySelector('.form-bottom-left').append(errorMsg);
//   } else if (inputField.value.length < 1 && existingErrorMsg) {
//     alert('You cannot create a task without adding it!');
//   } else {
//     const inputFieldValue = inputField.value;

//     // Generate a unique key
//     const uniqueKey = 'task_' + Date.now();

//     // Save the value in localStorage with the unique key
//     localStorage.setItem(uniqueKey, inputFieldValue);

//     // Create the HTML content for the new item
//     newItem.innerHTML = `<img src="/images/unchecked.png" class="img-saved"/><li>${inputFieldValue}</li>`;

//     // Append the new item to the DOM
//     document.querySelector('main').append(newItem);

//     // Clear the input field
//     inputField.value = '';

//     if (existingErrorMsg) {
//       existingErrorMsg.remove();
//     }
//   }
// };

// // Add event listener to the "Add" button
// const addButton = document.querySelector('#add');
// addButton.addEventListener('click', newElement);

// // Restore appended items from localStorage on page load
// window.addEventListener('load', () => {
//   const main = document.querySelector('main');

//   // Iterate over the localStorage keys and restore the items
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);

//     const newItem = document.createElement('ul');
//     newItem.setAttribute('class', 'saved');
//     newItem.innerHTML = `<img src="/images/unchecked.png" class="img-saved"/><li>${value}</li>`;
//     main.append(newItem);
//   }
// });

// //completed saved items

// // delete saved items

// const parentElement = document.querySelector('main');

// parentElement.addEventListener('click', (event) => {
//   if (event.target.classList.contains('img-saved')) {
//     event.target.parentNode.remove();
//   }
// });

const newElement = (event) => {
  event.preventDefault();
  const newItem = document.createElement('ul');
  newItem.setAttribute('class', 'saved');
  const inputField = document.getElementById('txt');

  const existingErrorMsg = document.querySelector('.errormsg');

  if (inputField.value.length < 1 && !existingErrorMsg) {
    let errorMsg = document.createElement('p');
    errorMsg.setAttribute('class', 'errormsg');
    errorMsg.innerHTML = 'Please add a task';
    document.querySelector('.form-bottom-left').append(errorMsg);
  } else if (inputField.value.length < 1 && existingErrorMsg) {
    alert('You cannot create a task without adding it!');
  } else {
    let package = {
      content: inputField.value,
      status: false,
    };

    // Generate a unique key
    const uniqueKey = 'task_' + Date.now();

    // Add uniqueKey as id of the newItem
    newItem.setAttribute('id', uniqueKey);

    // Save the value in localStorage with the unique key
    localStorage.setItem(uniqueKey, JSON.stringify(package));

    // Create the HTML content for the new item
    newItem.innerHTML = `<div class="left-saved"><img src="/images/unchecked.png" class="img-saved"/><li>${package.content}</li></div><img class='right-saved' src="/images/close-button-png-23.png" />`;

    // Append the new item to the DOM
    document.querySelector('main').append(newItem);

    // Clear the input field
    inputField.value = '';

    if (existingErrorMsg) {
      existingErrorMsg.remove();
    }
  }
};

// Add event listener to the "Add" button
const addButton = document.querySelector('#add');

addButton.addEventListener('click', newElement);

// Restore appended items from localStorage on page load
window.addEventListener('load', () => {
  const main = document.querySelector('main');

  // Iterate over the localStorage keys and restore the items
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    const newItem = document.createElement('ul');

    newItem.setAttribute('class', 'saved');
    newItem.setAttribute('id', key);
    newItem.innerHTML = `<div class="left-saved"><img src="/images/unchecked.png" class="img-saved"/><li>${value.content}</li></div><img class='right-saved' src="/images/close-button-png-23.png" />`;
    main.append(newItem);
  }
});

//cross saved items and change img on click
const parentElement = document.querySelector('main');

parentElement.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('img-saved') ||
    event.target.classList.contains('checked')
  ) {
    const listItem = event.target.closest('ul');
    event.target.closest('ul').getAttribute('id');
    let leftImg = listItem.querySelector('.img-saved');

    // Change class of <li> element
    if (listItem.classList.contains('saved')) {
      //delete element
      listItem.remove();
      //change class of elements
      listItem.setAttribute('class', 'crossed');
      leftImg.setAttribute('src', '/images/checked.png');
      //append items with new class
      document.querySelector('main').append(listItem);
    } else if (listItem.classList.contains('crossed')) {
      //change class of elements
      listItem.setAttribute('class', 'saved');
      leftImg.setAttribute('src', '/images/unchecked.png');
      //append items with new class
      document.querySelector('main').append(listItem);
    }
  }
});

// Delete saved items

parentElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('right-saved')) {
    const listItem = event.target.closest('ul');
    console.log(event.target.closest('ul').getAttribute('id'));
    listItem.remove();

    localStorage.removeItem(event.target.closest('ul').getAttribute('id'));

    // Find the corresponding value
    const value = listItem.querySelector('li').textContent;

    // Iterate over the localStorage keys and remove the matching item
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   if (localStorage.getItem(key) === value) {
    //     localStorage.removeItem(key);
    //     break;
    //   }
    // }
  }
});

// .addEventListener('click', (event) => {
//   if (event.target.classList.contains('img-saved')) {
//     const listItem = event.target.closest('ul');
//     console.log(event.target.closest('ul').getAttribute("id"));
//     listItem.remove();

//     localStorage.removeItem(event.target.closest('ul').getAttribute("id"))

//     // Find the corresponding value
//     const value = listItem.querySelector('li').textContent;

//     // Iterate over the localStorage keys and remove the matching item
//     // for (let i = 0; i < localStorage.length; i++) {
//     //   const key = localStorage.key(i);
//     //   if (localStorage.getItem(key) === value) {
//     //     localStorage.removeItem(key);
//     //     break;
//     //   }
//     // }
//   }
// });

/**
 * In this code, we select the parent element that will contain the dynamically created elements
 * (in this example, the parent element is <main>). We then attach a click event listener to the parent
 *  element using addEventListener. Inside the event listener, we check if the clicked element has the class 
 * name 'img-saved' using event.target.classList.contains('img-saved'). If it does, we remove its parent 
 * node from the DOM.

By using event delegation, the click event is handled 
by the parent element, which is already present in the DOM. This allows 
the dynamically created elements to be captured by the event listener, even if they were not present
 when the event listener was initially attached.
 */
