// Operador exponencial

// let resultado = 2 ** 3
let base = 5
let exponente = 2
let resultado2 = base ** exponente
let resultado3 = 2 ** 3 ** 2

// Array.includes

const numeros = [1, 2, 3, 4]
const bebidas = ["cafe", "te", "mate"]

// console.log(numeros.includes(2))
// console.log(numeros.includes(5))

// Operador Nullish

const nombre = null
const nombrePorDefecto = "Coderhouse"

const nombreCompleto = nombre ?? nombrePorDefecto

// Object.entries,Object.values, Object.keys

const persona = {
    nombre: "Coder",
    edad: 25,
    ciudad: "Bs As"
}

const entradas = Object.entries(persona)
const valores = Object.values(persona)
const claves = Object.keys(persona)


//.finally()

function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = false

            if (exito) {
                resolve("Exito")
            } else {
                reject("Error")
            }
        }, 5000);
    })
}


/* ejemploPromesa()
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("La promesa ha sido finalizada")
    }) */

// Spread Operator

const numbers = [1, 2, 3]

const newNumbers = [...numbers, 4, 5]

// Rest Operator

function sumar(...numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}


// String.trim()
const textoConEspacios = "             Soy un string             "
const sinEspacios = textoConEspacios.trim()

// Array.flat()

const matriz = [1, 2, [3, 4], [5, 6]]

const matrizAplanada = matriz.flat()
console.log(matrizAplanada)