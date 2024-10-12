const express = require("express")
const path = require("path")

const usersRouter = require("./routes/users.router.js")
const petsRouter = require("./routes/pets.router.js")
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

app.use("/", usersRouter)
app.use("/", petsRouter)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
