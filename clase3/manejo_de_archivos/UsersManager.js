const fs = require("fs").promises;

class ManagerUsuarios {
  constructor() {
    this.usuariosFile = "Usuarios.json";
  }

  async crearUsuario(usuario) {
    try {
      //Leer los usuarios existentes
      let usuarios = await this.leerUsuarios();

      //Agregar un usuarios

      usuarios.push(usuario);

      //Escribir el arreglo actualizado
      await fs.writeFile(this.usuariosFile, JSON.stringify(usuarios, null, 2));

      console.log("usuarios creado correctamente");
    } catch (error) {
      console.error("Error al escribir usuario", error);
    }
  }

  async consultarUsuarios() {
    try {
      // Leer y devolver el arreglo de los usuarios del archivo
      return await this.leerUsuarios();
    } catch (error) {
      console.error("Error al consultar usuarios", error);
      return [];
    }
  }

  async leerUsuarios() {
    try {
      //Leer el contenido del archivo Usuarios.js
      const data = await fs.readFile(this.usuariosFile, "utf8");
      //Convertir el contenido a objeto en Js
      return JSON.parse(data);
    } catch (error) {
      // Si el archivo no existe o esta vacio, devolver un arreglo vacio
      if (error.code === "ENOENT") {
        return [];
      } else {
        throw error;
      }
    }
  }
}

module.exports = ManagerUsuarios;
