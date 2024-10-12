// TIMERS

/* setTimeout(() => {
  console.log("han transcurrido 5 segundos");
}, 5000); */

/* setInterval(() => {
  console.log("Han pasado 2 segundos");
}, 2000); */

const fs = require("fs").promises;

async function writeFile() {
  const data = "Data agregada desde una funcion";
  try {
    await fs.writeFile("archivo.txt", data);
    console.log("Archivo creado correctamente");
  } catch (error) {
    console.error("Error al esribir el archivo", error);
  }
}

// writeFile();

async function readFile() {
  try {
    const data = await fs.readFile("archivo.txt", "utf8");
    console.log("Contenido del archivo: ", data);
  } catch (error) {
    console.error("Error al leer el archivo", error);
  }
}

// readFile();

async function appendFile() {
  const data = "datos adicionales para agregar";

  try {
    await fs.appendFile("archivo.txt", data);
    console.log("Archivo actualizado");
  } catch (error) {
    console.error("El archivo no se pudo actualizar", error);
  }
}

// appendFile();

async function unlink() {
  try {
    await fs.unlink("archivo.txt");
    console.log("Archivo eliminado");
  } catch (error) {
    console.error("El archivo no se pudo eliminar", error);
  }
}

// unlink();

async function mkdir() {
  try {
    await fs.mkdir("MiCarpeta");
    console.log("Directorio creado");
  } catch (error) {
    console.error("No se pudo crear el directorio", error);
  }
}

// mkdir();
