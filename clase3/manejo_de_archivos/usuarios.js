const ManagerUsuarios = require("./UsersManager.js");

const manager = new ManagerUsuarios();

// Crear un usuario
/* manager.crearUsuario({
  Nombre: "Coder2",
  Apellido: "House2",
  Edad: 35,
  Curso: "Programación backend II",
});
 */
//Connsultar usuarios
manager
  .consultarUsuarios()
  .then((usuarios) => console.log("USUARIOS: ", usuarios))
  .catch((error) => console.error("Error al consultar usuarios", error));
