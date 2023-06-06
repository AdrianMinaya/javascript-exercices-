let altura_en_cm = 180;
let altura_en_mt = (altura_en_cm/100);
console.log(altura_en_mt);
let peso_en_kg = 108.862;
let altura_mt_up = Math.ceil(altura_en_mt);
console.log(altura_mt_up);
let peso_kg_down = Math.floor(peso_en_kg);
console.log(peso_kg_down);
let maxValor = Number.MAX_VALUE;
let resultado = maxValor + 1;
console.log(resultado); // Salida: Infinity

let esIgual = resultado === maxValor;
console.log(esIgual); // Salida: false
