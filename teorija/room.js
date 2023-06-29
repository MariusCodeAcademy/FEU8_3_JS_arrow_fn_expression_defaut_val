'use strict';
console.log('room.js file was loaded');

printHtml('Room measure');

let kambarioIlgis = 5;
let kambarioPlotis = 10;
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

function reikesDazu(ilgis, plotis, aukstis) {
  // patikrinti ar plotis yra skaicius
  if (!checkIfNuber(plotis)) {
    console.log('plotis turetu buti skaicius');
    // nutraukiam funkcija del iskreiptu duomenu
    return;
  }
  // panaudoti calcPlotas()
  let vienaSienaPlotas = ilgis * aukstis;
  console.log('vienaSienaPlotas ===', vienaSienaPlotas);
  let kitaSienaPlotas = plotis * aukstis;
  console.log('kitaSienaPlotas ===', kitaSienaPlotas);
  let visuSienuPlotas =
    vienaSienaPlotas + vienaSienaPlotas + kitaSienaPlotas + kitaSienaPlotas;
  console.log('visuSienuPlotas ===', visuSienuPlotas);

  let dazuTuris = visuSienuPlotas * 1e-3;
  console.log('dazuTuris ===', dazuTuris);
}
reikesDazu(kambarioIlgis, 'kambarioPlotis', kambarioAukstis);
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
