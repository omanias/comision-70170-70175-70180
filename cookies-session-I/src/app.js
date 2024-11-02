import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import FileStore from 'session-file-store'
import MongoStore from 'connect-mongo'

const app = express()
const PORT = 8080

const fileStorage = FileStore(session)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(session({
    // store: new fileStorage({path:'./sessions', ttl:100, retries:0}),
    store:MongoStore.create({
        mongoUrl:'mongodb+srv://omarmanias:1234562024@cluster0.bxjfm.mongodb.net/70175?retryWrites=true&w=majority&appName=Cluster0',
        ttl:100
    }),
    secret: "coderSecret",
    resave:false,
    saveUninitialized:false
}))


app.get('/', (req,res)=>{
    if(req.session.views){
        req.session.views++
        res.send(`<p>Visitas: ${req.session.views}</p>`)
    }else{
        req.session.views = 1
        res.send('Bienvenido')
    }
})


app.listen(PORT, ()=> console.log(`Server running on port PORT`))

