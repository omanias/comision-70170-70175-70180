const express = require("express")
const handlebars = require("express-handlebars")
const viewsRouter = require("./routes/views.router.js")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configuracion de handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")
app.use(express.static(__dirname + "/views"))

app.use("/", viewsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
