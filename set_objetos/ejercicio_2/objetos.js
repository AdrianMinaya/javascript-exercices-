let obj_personal = {
    nombre: "Adrian",
    apellido:"Minaya",
    edad: 35,
    altura: 1.8,
    eresDesarrolador: true
}

//let my_age = obj_personal.edad;
//console.log(my_age)

const obj_friends = [
    {nombre: "Otniel",
    apellido: "Gonzalez"
    edad: 36,
    altura: 1.7,
    eresDesarrolador:false} 

    {nombre: "juan",
    apellido: "Perez",
    edad: 25,
    altura:1.5
    eresDesarrolador:false
    }
]


mi_personal = [...obj_personal, ...obj_friends ]
console.log(mi_personal)

ordenados = mi_personal.sort((a, b) => b.edad - a.edad);
console.log(ordenados)  
