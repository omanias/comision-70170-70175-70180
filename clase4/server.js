const express = require("express")
const app = express()
const PORT = 8080

app.use(express.json()) // ayuda a capturar info del body(postman)
app.use(express.urlencoded({extended:true}))

let tasks =[
    {id: 1, title: "desafios"},
    {id: 2, title: "preentregas"},
    {id: 3, title: "entrega final"}
]

app.get("/tasks", (req,res)=>{
    res.json(tasks)
})

app.get("/tasks/:id", (req,res)=>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find((t)=> t.id === taskId)

    if(task){
        res.json(task)
    }else{
        res.status(404).json({message: "Tarea no encontrada"})
    }
})

app.post("/tasks", (req,res)=>{
    const {title} = req.body
    const newTask = {
        id: tasks.length + 1,
        title: title
    }

    tasks.push(newTask)
    res.status(201).json(newTask)
})

app.put("/tasks/:id", (req,res)=>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find((t)=> t.id === taskId)

    if(task){
        const {title} = req.body
        task.title = title
        res.json(task)
    }else{
        res.status(404).json({message: "Tarea no encontrada" })
    }
})

app.delete("/tasks/:id", (req,res)=>{
    const taskId = parseInt(req.params.id)
    tasks = tasks.filter((t)=> t.id !== taskId)
    res.json({msg: "Tarea eliminada"})
})


app.listen(PORT,()=>{
    console.log(`Servidor ejecutándose en el puerto ${PORT}`)
})