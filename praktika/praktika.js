'use strict';
console.log('praktika.js file was loaded');

printHtml('Praktika');

// 2. Funkcija, kuri suskaičiuoja simbolių skaičių tekste Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina simbolių skaičių tame tekste.
function howMany(value) {
  // exit clause
  if (typeof value !== 'string') return;

  if (value.length > 50) return;

  // gauti argumento ilgi
  // console.log(value.length);
  return value.length;
}

let rez = howMany(5);

console.log('rez ===', rez);
// 14. Sukurti funkcija kuri priima viena text
// argumenta ir atskiria ir grazina paskutini
// zodi.(-----)
// atskirtiZodi("Sveiki siandien yra Ketvirtadinis!")
// grazina "Sveiki" atskirtiZodi("ar funkcijos yra sunku?")
// grazina "sunku"

/**
 * Funkcija kuri gauna stinga ir grazina paskutini zodi
 * @param {string} text
 * @returns
 */
function getLastWord(text) {
  // grazinti last word
  let lastSpaceIndex = text.lastIndexOf(' ');
  console.log('lastSpaceIndex ===', lastSpaceIndex);
  // paimti ir nukirkpti ir grazinti viskas nuo
  // lastSpaceIndex iki galo
  console.log(text.slice(lastSpaceIndex + 1));
  let lastWord = text.slice(lastSpaceIndex + 1);
  return lastWord;
}
//           01234567890123456789
let last = getLastWord('Sveiki siandien yra Ketvirtadinis!');
console.log('last ===', last);
// 9.2 panaudoti viena is metodu kad is "tekstas yra ne tuščias bet" gauti zodeli 'bet'

// 8. Parašykite JavaScript funkciją, kuri priima du argumentus: tekstą ir reikšmę. Funkcija turi patikrinti, ar tekstas yra ne tuščias ir ar jame yra nurodyta reikšmė.
