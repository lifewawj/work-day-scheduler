// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
dayjs.extend(window.dayjs_plugin_utc)
var today = dayjs()

// TODO: Add code to display the current date in the header of the page.
//  DISPLAYS current date
var currentDateEl = $('#current_date')
currentDateEl.text(today.format('dddd' + ',' + ' ' + 'MMMM' + ' ' + 'DD'))

// DISPLAYS current time
var currentTimeEl = $('#current_time')
var displayTime = currentTimeEl.text(today.format('h:mm A'))









// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// Targets all specific time block ids
var hour9_timeblock = $('#hour-9')
var hour10_timeblock = $('#hour-10')
var hour11_timeblock = $('#hour-11')
var hour12_timeblock = $('#hour-12')
var hour1_timeblock = $('#hour-1')
var hour2_timeblock = $('#hour-2')
var hour3_timeblock = $('#hour-3')
var hour4_timeblock = $('#hour-4')
var hour5_timeblock = $('#hour-5')

var hourS = [hour9_timeblock, hour10_timeblock, hour11_timeblock, hour12_timeblock, hour1_timeblock, hour2_timeblock, hour3_timeblock, hour4_timeblock, hour5_timeblock];

// targets all saveBtn classes depending on specific time block id s
var hour9_saveBtnEl = $('#hour-9').children('button');
var hour10_saveBtnEl = $('#hour-10').children('button');
var hour11_saveBtnEl = $('#hour-11').children('button');
var hour12_saveBtnEl = $('#hour-12').children('button');
var hour1_saveBtnEl = $('#hour-1').children('button');
var hour2_saveBtnEl = $('#hour-2').children('button');
var hour3_saveBtnEl = $('#hour-3').children('button');
var hour4_saveBtnEl = $('#hour-4').children('button');
var hour5_saveBtnEl = $('#hour-5').children('button');

//saveBtn for specific time block
hour9_saveBtnEl.on('click', function () {
  hour_9();
  console.log('User has saved their hour 9 activity!')
});

hour10_saveBtnEl.on('click', function () {
  hour_10();
  console.log('User has saved their hour 10 activity!')
});

hour11_saveBtnEl.on('click', function () {
  hour_11();
  console.log('User has saved their hour 11 activity!')
});

hour12_saveBtnEl.on('click', function () {
  hour_12();
  console.log('User has saved their hour 12 activity!')
});

hour1_saveBtnEl.on('click', function () {
  hour_1();
  console.log('User has saved their hour 1 activity!')
});

hour2_saveBtnEl.on('click', function () {
  hour_2();
  console.log('User has saved their hour 2 activity!')
});

hour3_saveBtnEl.on('click', function () {
  hour_3();
  console.log('User has saved their hour 3 activity!')
});

hour4_saveBtnEl.on('click', function () {
  hour_4();
  console.log('User has saved their hour 4 activity!')
});

hour5_saveBtnEl.on('click', function () {
  hour_5();
  console.log('User has saved their hour 5 activity!')
});












// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// Targets all hour time blocks input areas
var hour9_userInputEl = $(hour9_timeblock).children('textarea');
var hour10_userInputEl = $(hour10_timeblock).children('textarea');
var hour11_userInputEl = $(hour11_timeblock).children('textarea');
var hour12_userInputEl = $(hour12_timeblock).children('textarea');
var hour1_userInputEl = $(hour1_timeblock).children('textarea');
var hour2_userInputEl = $(hour2_timeblock).children('textarea');
var hour3_userInputEl = $(hour3_timeblock).children('textarea');
var hour4_userInputEl = $(hour4_timeblock).children('textarea');
var hour5_userInputEl = $(hour5_timeblock).children('textarea');


//Functions for saving User's Input to specific time block id
function hour_9() {

  var userInputValue = hour9_userInputEl.val();
  localStorage.setItem('hour-9', userInputValue);

  return;
};


function hour_10() {

  var userInputValue = hour10_userInputEl.val();
  localStorage.setItem('hour-10', userInputValue);

  return;
};


function hour_11() {

  var userInputValue = hour11_userInputEl.val();
  localStorage.setItem('hour-11', userInputValue);

  return;
};


function hour_12() {

  var userInputValue = hour12_userInputEl.val();
  localStorage.setItem('hour-12', userInputValue);

  return;
};


function hour_1() {

  var userInputValue = hour1_userInputEl.val();
  localStorage.setItem('hour-1', userInputValue);

  return;
};


function hour_2() {

  var userInputValue = hour2_userInputEl.val();
  localStorage.setItem('hour-2', userInputValue);

  return;
};


function hour_3() {

  var userInputValue = hour3_userInputEl.val();
  localStorage.setItem('hour-3', userInputValue);

  return;
};


function hour_4() {

  var userInputValue = hour4_userInputEl.val();
  localStorage.setItem('hour-4', userInputValue);

  return;
};


function hour_5() {

  var userInputValue = hour5_userInputEl.val();
  localStorage.setItem('hour-5', userInputValue);

  return;
};



function getLocalStorage() {
  // RETRIVES LOCAL STORAGE IF USER HAS ANY INPUTS FROM PREVIOUS SESSION
  var hour9_storedData = localStorage.getItem('hour-9')
  var hour10_storedData = localStorage.getItem('hour-10')
  var hour11_storedData = localStorage.getItem('hour-11')
  var hour12_storedData = localStorage.getItem('hour-12')
  var hour1_storedData = localStorage.getItem('hour-1')
  var hour2_storedData = localStorage.getItem('hour-2')
  var hour3_storedData = localStorage.getItem('hour-3')
  var hour4_storedData = localStorage.getItem('hour-4');
  var hour5_storedData = localStorage.getItem('hour-5');

  // DISPLAYS LOCAL STORAGE (IF ANY) ON WEBPAGE
  hour9_userInputEl.text(hour9_storedData);
  hour10_userInputEl.text(hour10_storedData);
  hour11_userInputEl.text(hour11_storedData);
  hour12_userInputEl.text(hour12_storedData);
  hour1_userInputEl.text(hour1_storedData);
  hour2_userInputEl.text(hour2_storedData);
  hour3_userInputEl.text(hour3_storedData);
  hour4_userInputEl.text(hour4_storedData);
  hour5_userInputEl.text(hour5_storedData);

  return;
}







// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// select time and if it = this time
// change css style color to assigned color
// adding or changing the assigned attribute based on its time block
// Makes sure HTML doc loads first than loads the dom manipulation
$(document).ready(function () {
  console.log('Document is ready!')

  // CALLS the 'getLocalStorage();' function to check if the user has any stored data saved, and displays it on the webpage
  getLocalStorage();

  var currentHour = dayjs().hour()

  if (currentHour === 9) {
    $('#hour-9').addClass('present')
  }

  if (currentHour === 10) {
    $('#hour-10').addClass('present')
  }

  if (currentHour === 11) {
    $('#hour-11').addClass('present')
  }

  if (currentHour === 12) {
    $('#hour-12').addClass('present')
  }

  if (currentHour === 1) {
    $('#hour-1').addClass('present')
  }

  if (currentHour === 2) {
    $('#hour-2').addClass('present')
  }

  if (currentHour === 3) {
    $('#hour-3').addClass('present')
  }

  if (currentHour === 4) {
    $('#hour-4').addClass('present')
  }

  if (currentHour === 5) {
    $('#hour-5').addClass('present')
  }
});