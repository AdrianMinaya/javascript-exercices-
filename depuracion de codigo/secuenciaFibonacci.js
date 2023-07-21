function secuenciaFibonacci(num) {
  var secuencia = [];
  if (num >= 1) {
    secuencia.push(1);
  }
  if (num >= 2) {
    secuencia.push(1);
  }

  for (var i = 2; i < num; i++) {
    var nuevoNumero = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(nuevoNumero);
  }

  return secuencia;
}

// Ejemplo de uso
var num = 6;
var resultado = secuenciaFibonacci(num);
console.log(resultado); // Resultado [1, 1, 2, 3, 5, 8]
