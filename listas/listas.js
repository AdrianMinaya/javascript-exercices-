let compras = ["pan", "jugo", "azucar", "carne", "jabon"]
let compra_modificada = compras.push("Aceite de Girasol")
console.log(compras)
let elemento_eliminar = "Aceite de Girasol"
let compras_remover = compras.splice(elemento_eliminar, 5)
console.log(compras_remover)
let peliculas = [
    {
      titulo: "El diablo viste a la moda",
      director: "David Frankel",
      fechaCreacion: "2006"
    },
    {
      titulo: "El administrador de la ira",
      director: "Lynn Shelton",
      fechaCreacion: "2019"
    },
    {
      titulo: "El gladiador",
      director: "Ridley Scott",
      fechaCreacion: "2000"
    }
  ];
  
  console.log(peliculas);

  //parseInt() se utiliza para analizar (parsear) una cadena de texto y convertirla en un número entero.
  //En JavaScript, el método filter() se utiliza para crear un nuevo array con todos los elementos que cumplan cierta condición especificada en una función de callback
  let peliculasPosteriores2010 = peliculas.filter(pelicula =>
    /*parseInt*/ (pelicula.fechaCreacion) > 2010
  );
  
  console.log(peliculasPosteriores2010);

// map() se utiliza para transformar los elementos de un array y crear un nuevo array con los resultados de aplicar una función de transformación a cada elemento.
  let directores = peliculas.map(pelicula => pelicula.director);

console.log(directores);

let titulos = peliculas.map(peliculas => peliculas.titulo);
console.log(titulos)

let listaConcatenada = titulos.concat(directores);

console.log(listaConcatenada);

let listaConcatenada2 = [...titulos, ...directores];

console.log(listaConcatenada2);