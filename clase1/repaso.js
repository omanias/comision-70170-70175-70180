/* let nombre = "Mauricio"

let arreglo = ["ABC", "BCD", "CDE"]

console.log(arreglo) */


/*

LET
permite inicializar variables sin datos
permite reemplazar el valor del objeto


CONST
debe inicilizar con un valor
no permite renombrar el valor
*/

/* let nombre;

nombre = "Coder"

console.log(nombre) */

/* const nombre = "Coder"

nombre = "House" // Error

console.log(nombre) */


/* let alumno = {
    nombre: "Facundo",
    apellido: "Rainaudi",
    edad: 25
}


let alumnos = ["Felipe", 26, true, {}]

console.log(alumnos) */



// FUNCIONES

/* function miFuncion() {
    //cuerpo de la funcion
}

function suma(a, b) {
    //devulva un resulta
    // console.log(a + b)

    let c = a + b
    console.log(c)
} */

// console.log(suma(2, 3))

// suma(4, 5)

//FUNCIONES ANONIMAS

/* let saludar = function (nombre) {
    console.log(`Hola ${nombre}`)
} */

// saludar("Martin")

/* setTimeout(function () {
    console.log("Han pasado 5 segundos")
}, 5000); */


/* const saludo = (nombre) => `Saludos ${nombre}`

let nombre = "Santiago"

function saludar() {
    console.log(`Hola ${nombre}`)
} */

// saludar()

/* function restar(a, b) {
    let resultado = a - b

    console.log(resultado)
}

restar(5, 3)
 */


// CLASES

/* class NombreDeClase{
    constructor(parametros){

    }

    metodo1(){

    }

    metodo2(){

    }
} */


/* class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} años`)
    }
}

let persona1 = new Persona("Katherine", 26)
let persona2 = new Persona("Martin", 25)

persona1.saludar()
persona2.saludar() */

// console.log(persona1)

class Contador {
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    static obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }

    contar() {
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

//Instanciar la clase Contador
const contador1 = new Contador("Facundo")

// Obtener el responsable y la cuenta individual
console.log(contador1.obtenerResponsable())

// Contar en cada i"otro""""")
