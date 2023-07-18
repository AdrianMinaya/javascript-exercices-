class Estudiante {
    constructor() {
    this.nombre = "";
    this.asignaturas = ["JavaScript", "HTML", "CSS"];
    }

    obtenDatos() {
    return {
        nombre: this.nombre,
        asignaturas: this.asignaturas
    };
        }
}

  // Crear una nueva instancia de Estudiante
let estudiante = new Estudiante();

  // Asignar un nombre al estudiante
estudiante.nombre = "John Doe";

  // Llamar al método obtenDatos
let datos = estudiante.obtenDatos();
console.log(datos);

