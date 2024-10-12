const express = require("express")
const app = express()
const PORT = 8080

//MIDDLEWARE
app.use(express.urlencoded({extended:true}))

//ENDPOINTS
app.get("/ruta", (req,res)=>{
    res.send("Mensaje desde mi ruta")
})

app.get("/usuario", (req,res)=>{
    const usuario ={
        nombre: "Coder",
        apellido: "House",
        email: "coder@mail.com"
    }
    res.send(usuario)
})

app.get("/bienvenida", (req,res)=>{
    const htmlResponse = `<p style="color: blue">Bienvenida</p>`
    res.send(htmlResponse)
})

app.get("/unparametro/:nombre/:apellido", (req,res)=>{
    // console.log(req.params.nombre)
    res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`)
})

const usuarios = [
    {id: "1", nombre: "nombreA", apellido: "apellidoA", email: "usuarioA@mail.com"},
    {id: "2", nombre: "nombreB", apellido: "apellidoB", email: "usuarioB@mail.com"},
    {id: "3", nombre: "nombreC", apellido: "apellidoC", email: "usuarioC@mail.com"}
]

app.get("/usuarios", (req,res)=>{
    res.send(usuarios)
})

app.get("/usuarios/:id", (req,res)=>{
    let usuarioId =(req.params.id)
    let usuario = usuarios.find((u => u.id === usuarioId))
    if(!usuario) return res.send({error: "Usuario no encontrado"})
        res.send(usuario)
})


app.get("/ejemploQueries", (req,res)=>{
    let consultas = req.query
    res.send(consultas)
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})