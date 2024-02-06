import a_number from './a.js'; //모듈로 하는 이유는 변수 등이 겹치기때문이라 할 수 있다
import b_number from './b.js';
import c_number from './c.js';

console.log('a_num: ', a_number);
console.log('b_num: ', b_number);
console.log('c_num: ', c_number);

const $buttonA = document.querySelector("#button-a");
const $buttonB = document.querySelector("#button-b");
const $buttonC = document.querySelector("#button-c");
const $display = document.querySelector("#display");

$buttonA.addEventListener('click', function(){
    $display.textContent = a_number;
})

$buttonB.addEventListener('click', function(){
    $display.textContent = b_number;
})

$buttonC.addEventListener('click', function(){
    $display.textContent = c_number;
})