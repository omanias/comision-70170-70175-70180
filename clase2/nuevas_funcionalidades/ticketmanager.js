class TicketManager {
    constructor() {
        this.eventos = []
        this.precioBaseDeGanancias = 0
    }

    getEventos() {
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        precio += precio * 0.15 //agregar el 15% al precio original
        const evento_id = this.eventos.length + 1
        const participantes = []
        const evento = {
            id: evento_id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        this.eventos.push(evento)
    }

    agregarUsuario(evento_id, usuario_id) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if (!evento_encontrado) {
            console.log("El evento con el id proporcionado no exise")
            return
        }

        const participantes = evento_encontrado.participantes
        const usuarioRegistrado = participantes.includes(usuario_id)
        if (usuarioRegistrado) {
            console.log("El usuario ya esta registrado para el evento")
            return
        }

        participantes.push(usuario_id)
        console.log("El usuario ha sido registrado exitosamente")
    }

    ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if (!evento_encontrado) {
            console.log("El evento con el id proporcionado no existe")
            return
        }

        const evento_copiado = { ...evento_encontrado }
        evento_copiado.id = this.eventos.length + 1
        evento_copiado.lugar = nueva_localidad
        evento_copiado.fecha = nueva_fecha
        evento_copiado.participantes = []

        this.eventos.push(evento_copiado)
        console.log("Evento puesto en gira")
    }
}


const ticketManager = new TicketManager()

//Agregar eventos
ticketManager.agregarEvento("Concierto Maria Becerra", "Estadio Velez", 100, 2000, new Date("2024-09-15"))
ticketManager.agregarEvento("Concierto Nicky Nicole", "Estadio Kempes", 200, 2500, new Date("2024-10-20"))

// Obtener los eventos
const eventos = ticketManager.getEventos()
console.log("Eventos: ", eventos)

//Agregar participantes
ticketManager.agregarUsuario(1, "Usuarios 1")
ticketManager.agregarUsuario(1, "Usuarios 3")

ticketManager.agregarUsuario(2, "Usuarios 2")

// Poner evento en gira
ticketManager.ponerEventoEnGira(1, "Mendoza", new Date("2024-12-20"))


const eventosActualizados = ticketManager.getEventos()
console.log("Eventos actualizados: ", eventosActualizados)


