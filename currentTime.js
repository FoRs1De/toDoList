// Date for top left menu

let output= document.getElementById('time');

let a = new Date();
let hours = addZero(a.getHours())
let minutes = addZero(a.getMinutes())
let seconds= addZero(a.getSeconds())
let currentTime= `${hours}:${minutes}:${seconds}`;


// console.log(`${output}`);
 function addZero(num){
 return num < 10 ? `0${num}`: num;
 }


output.innerHTML = ''+`${currentTime}`;


