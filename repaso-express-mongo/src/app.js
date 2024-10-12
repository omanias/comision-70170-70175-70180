import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.router.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("")
.then(()=>{
    console.log("Conectado a la Base de Datos")
})
.catch(error=>{
    console.error("Error al conectarse a la base de datos", error)
})

app.use("/api/users", userRouter)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))



