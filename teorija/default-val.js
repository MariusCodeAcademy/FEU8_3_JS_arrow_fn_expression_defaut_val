'use strict';
console.log('default-val.js file was loaded');

// sukurti h2 elementa body tage
// default value argumentui
function printHtml(msg = '--iveskite zinute--') {
  // sukurem
  let h2El = document.createElement('h2');
  // prideti i ji texsta
  h2El.textContent = msg;
  // console.log('h2El ===', h2El);
  // patalpinti ji i body
  document.body.append(h2El);
}
// printHtml('Function expression!!!');
// printHtml('Arrow function');
// printHtml();
// printHtml();
