const siempreTrue = () => {
    return true;
  };
  
  console.log(siempreTrue()); // Resultado: true

  const imprimirPromesa = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar 5 segundos
    console.log("Hola soy una promesa");
  };
  
  imprimirPromesa();
   

  function* generadorIndicesPares() {
    let indice = 0;
    while (true) {
      yield indice;
      indice += 2;
    }
  }
  
  // Crear una instancia del generador
  const generador = generadorIndicesPares();
  
  // Obtener los primeros 5 índices pares
  for (let i = 0; i < 5; i++) {
    console.log(generador.next().value);
  }
  