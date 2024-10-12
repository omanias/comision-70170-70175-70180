// Simple arrow function
const saludar = () => {
    console.log("Saludos")
}
// saludar()

// Arrow functions con parametros
const sumar = (a, b) => {
    return a + b
}

// console.log(sumar(3, 2))


//Arrow functions con una sola expresion
const duplicar = (num) => num * 2
// console.log(duplicar(5))


//Arrow functions en una arreglo de objetos

const usuarios = [
    { nombre: "User A", edad: 20 },
    { nombre: "User B", edad: 32 },
    { nombre: "User C", edad: 40 }
]

const nombres = usuarios.map(usuario => usuario.nombre)

// console.log(nombres)

//Arrow functions como metodo de un objeto

const persona = {
    nombre: "Coder",
    edad: 35,
    saludar: () => {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

// persona.saludar()

// CALLBACKS

/* function obtenerDatosDelUsuario(id, callback) {
    //llamado una api - endpoint

    setTimeout(() => {
        const usuario = {
            id: id,
            nombre: "Coder",
            email: "coder@mail.com"
        }
        callback(usuario)
    }, 2000);
}

function mostrarDatosDelUsuario(usuario) {
    console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}`)
} */

// obtenerDatosDelUsuario(123, mostrarDatosDelUsuario)

// CallBack HELL

/* obtenerDatosDelUsuario(function (resultado1) {
    procesarDatos(resultado1, function (resultado2) {
        realizarAlgunaOperacion(resultado2, function (resultado3) {

        })
    })
}) */

/*
PROMESA => "pending", "fullfilled", rejected
*/

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false
        if (exito) {
            resolve("Tarea ejecutada con exito")
        } else {
            reject("Ocurrió un error en la promesa")
        }
    }, 2000);
}) */

/* promesa.then((mensaje) => {
    console.log("Exito", mensaje)
}).catch((error) => {
    console.log("Error", error)
}) */

function obtenerDatosUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datosUsuario = {
                id: id,
                nombre: "Coder",
                edad: 30,
                email: "coder@mail.com"
            }

            if (datosUsuario) {
                resolve(datosUsuario)
            } else {
                reject("No se puede obtener datos del usuario")
            }
        }, 2000);
    })
}



async function mostrarDatosUsuario(id) {
    try {
        const datosUsuario = await obtenerDatosUsuario(id) // llamado a la base de datos
        console.log("datos del usuario: ", datosUsuario)
    } catch (error) {
        console.log("Error al obtener datos del usuarios", error)
    }
}

// mostrarDatosUsuario(123)

//HANDS ON LAB

function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Operación innecesaria")
        } else if (a + b < 0) {
            reject("La calculadora solo devuelve valores positivos")
        } else {
            resolve(a + b)
        }
    })
}

function resta(minuendo, sustraendo) {
    return new Promise((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0) {
            reject("Operación innecesaria")
        } else if (minuendo - sustraendo < 0) {
            reject("La calculadora solo devuelve valores positivos")
        } else {
            resolve(minuendo - sustraendo)
        }
    })
}

function multiplicacion(factor1, factor2) {
    return new Promise((resolve, reject) => {
        if (factor1 < 0 || factor2 < 0) {
            reject("La calculadora solo devuelve valores positivos")
        } else {
            resolve(factor1 * factor2)
        }
    })
}

function division(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por 0")
        } else {
            resolve(dividendo / divisor)
        }
    })
}

async function calculos() {
    try {
        const resultadoSuma = await suma(5, 7)
        console.log(`Resultado SUMA ${resultadoSuma}`)

        const resultadoResta = await resta(10, 3)
        console.log(`Resultado RESTA ${resultadoResta}`)

        const resultadoMultiplicacion = await multiplicacion(4, 6)
        console.log(`Resultado MULTIPLICACION ${resultadoMultiplicacion}`)

        const resultadoDivision = await division(10, 2)
        console.log(`Resultado DIVISION ${resultadoDivision}`)

    } catch (error) {
        console.error("Error", error)
    }
}


// calculos()


