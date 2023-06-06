My_nombre = "Adrian";
Apellidos = "Minaya Rodriguez";

Estudiante = My_nombre + " " + Apellidos;
console.log(Estudiante); 
console.log(Estudiante.toUpperCase());
console.log(Estudiante.toLowerCase());
console.log(Estudiante.length);
First_letter_name = (Estudiante.charAt(0));
console.log(First_letter_name);
Last_letter_name = Estudiante.charAt(22);
console.log(Last_letter_name);
Estudiante_sin_espacios = Estudiante.replace(/\s+/g, "");
console.log(Estudiante_sin_espacios);
Esta_contenido = Estudiante.includes("Adrian");
console.log(Esta_contenido)