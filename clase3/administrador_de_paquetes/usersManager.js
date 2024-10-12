const crypto = require("crypto");

class UsersManager {
  //Atributo estatico para almacenar usuarios
  static Usuarios = [];

  //Metodo para crear un nuevo usuario
  static CrearUsuario(usuario) {
    //Hash de la contraseña con el modulo "crypto"
    const hashedPassword = crypto
      .createHash("sha256")
      .update(usuario.Contraseña)
      .digest("hex");

    const newUser = {
      Nombre: usuario.Nombre,
      Apellido: usuario.Apellido,
      NombreUsuario: usuario.NombreUsuario,
      Contraseña: hashedPassword, // Guardar la contraseña hasheada
    };

    //Agregar el usuario al arreglo
    this.Usuarios.push(newUser);
  }

  // Metodo para mostrar los usuarios
  static MostrarUsuarios() {
    console.log("usuarios registrados");
    this.Usuarios.forEach((usuario) => {
      console.log(
        `Nombre: ${usuario.Nombre}, Apellido: ${usuario.Apellido}, NombreUsuario: ${usuario.NombreUsuario}, contraseña: ${usuario.Contraseña}`
      );
    });
  }

  //Metodo para validar usuario y contraseña
  static ValidarUsuario(nombreUsuario, contraseña) {
    // Buscra el usuario dentro del arreglo
    const usuario = this.Usuarios.find(
      (u) => u.NombreUsuario === nombreUsuario
    );

    if (!usuario) {
      console.log("Usuario no encontrado");
      return;
    }

    //Hashear la contraseña del parametro y compararla con la almacenada
    const hashedPassword = crypto
      .createHash("sha256")
      .update(contraseña)
      .digest("hex");

    //Comparar las contraseñas y arrojar error
    if (usuario.Contraseña === hashedPassword) {
      console.log("Logueado");
    } else {
      console.log("Contraseña erronea");
    }
  }
}

// Ejemplo de uso

//Crear usuario de ejemplo
UsersManager.CrearUsuario({
  Nombre: "Facundo",
  Apellido: "Reinaudi",
  NombreUsuario: "facureinaudi",
  Contraseña: "password123",
});

UsersManager.CrearUsuario({
  Nombre: "Gabriel",
  Apellido: "Campo",
  NombreUsuario: "gabrielcampo",
  Contraseña: "abc123",
});

// Mostrar usuarios registrados
UsersManager.MostrarUsuarios();

//Validar un usuario - CORRECTO
// UsersManager.ValidarUsuario("facureinaudi", "password123");

//Validar un usuario - INCORRECTO
UsersManager.ValidarUsuario("facureinaudi", "password");
