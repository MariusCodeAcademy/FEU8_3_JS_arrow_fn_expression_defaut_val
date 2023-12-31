'use strict';
console.log('express.js file was loaded');

let username = 'Mike';

printHtml('Function expression!!!');

// function declaration
function calcSum(a, b) {
  let sum = a + b;
  return sum;
}
// function expression
let calcSumExpresion = function (a, b) {
  let sum = a + b;
  return sum;
};

// arrow funkcija
let calcSumArrow = (a, b) => {
  let sum = a + b;
  console.log('sum ===', sum);
  return sum;
};
// => (fat arrow) === return
let calcSumArrowShort = (a, b) => a + b;

// gauti ir atspausdinti 5 ir 10 suma
let suma = calcSumArrowShort(5, 10);
console.log(suma);

// su arrow fn sukurti fn kuri grazina 4 skaiciu vidurki
// one line

let avg = (a, b, c, d) => (a + b + c + d) / 4;

let vid = avg(1, 2, 3, 4);
vid = avg(10, 20, 3, 4);
console.log('vid ===', vid);
