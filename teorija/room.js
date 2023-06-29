'use strict';
console.log('room.js file was loaded');

printHtml('Room measure');

let kambarioIlgis = 3;
let kambarioPlotis = 5;
let kambarioAukstis = 3;

printHtml(
  `Kambarys.  ilgis: ${kambarioIlgis}, plotis: ${kambarioPlotis}, aukstis: ${kambarioAukstis} `
);

// suskaiciuoti kiek teoriskai
// reiks dazu nudazyti sienom
// padengimas butu 1mm

// mum reikes:
// Sienu plotas * 1mm = rezultatas
// kiekvienos sienos plota = ilgis * aukstis * 4

function reikesDazu(ilgis, plotis, aukstis, dazuStoris = 0.5) {
  // patikrinti ar plotis yra skaicius
  if (!checkIfNuber(plotis)) {
    console.log('plotis turetu buti skaicius');
    // nutraukiam funkcija del iskreiptu duomenu
    return;
  }
  // panaudoti calcPlotas()
  let siena1Plotas = calcPlotas(plotis, aukstis);
  let siena2Plotas = calcPlotas(plotis, aukstis);
  let siena3Plotas = calcPlotas(ilgis, aukstis);
  let siena4Plotas = calcPlotas(ilgis, aukstis);

  let visuSienuPlotas =
    siena1Plotas + siena2Plotas + siena3Plotas + siena4Plotas;
  console.log('visuSienuPlotas ===', visuSienuPlotas);

  let dazuTurisKubM = visuSienuPlotas * (dazuStoris / 1000);

  let dazuLitrais = kubMToLitrai(dazuTurisKubM);
  console.log('jums reikes', dazuLitrais, 'litru dazu');
}
reikesDazu(kambarioIlgis, kambarioPlotis, kambarioAukstis, 2);
// reikesDazu(1, 1, 2);
// reikesDazu(10, 10, 2);

// Helper functions
// check fn grazina daznau true arba false
function checkIfNuber(value) {
  if (typeof value === 'number') {
    return true;
  } else {
    return false;
  }
}

// sukurti funkcija calcPlotas(len,width) grazina plotas
function calcPlotas(length, width) {
  return length * width;
}
let calcPlotasA = (length, width) => length * width;

// console.log('calcPlotas(10, 5) ===', calcPlotas(10, 5));

function kubMToLitrai(kubM) {
  return kubM * 1000;
}
