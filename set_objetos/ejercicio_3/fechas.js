const fecha_hoy =  new Date()
console.log(fecha_hoy)

let fechaNacimiento = new Date(1987, 07, 11);
console.log(fechaNacimiento);

if (fecha_hoy > fechaNacimiento) {
    console.log("Hoy es mayor que tu fecha de nacimiento.");
} else {
    console.log("Hoy no es mayor que tu fecha de nacimiento.");
}

let diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

let mes_nacimiento = fechaNacimiento.getMonth() + 1
    console.log(mes_nacimiento) 

let year_nacimeinto = fechaNacimiento.getFullYear()
console.log(year_nacimeinto)