'use strict';
console.log('iife.js file was loaded');

// IIFE - Immediately Invoked Function Expression
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
  console.log('hi from iife');
  let username = 'Bob';
  console.log('username ===', username);
})();

// (() => {})()

// let fn1 = () => {
//   console.log('hi from iife');
// };
// fn1();

((vardas) => {
  console.log(`hi ${vardas}`);
})('MIKE');
