import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import {engine} from 'express-handlebars'
import MongoStore from 'connect-mongo';
import mongoose from './config/database.js';
 import sessionsRouter from './routes/api/sessions.js';
import viewsRouter from './routes/views.js'; 

const app = express()
const PORT = 8080

app.engine('hbs',engine({
    extname:'hbs',
    defaultLayout:'main'
})),
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://omarmanias:1234562024@cluster0.bxjfm.mongodb.net/70175?retryWrites=true&w=majority&appName=Cluster0' }),
}));

app.use('/api/sessions', sessionsRouter);
app.use('/', viewsRouter);


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

