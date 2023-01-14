import express  from 'express'
import expressLayouts from 'express-ejs-layouts'
import indexRouter from './routes/index.js'
import authorRouter from './routes/author.js';
import dotenv from 'dotenv'
import connectDB from './db.js';
import bodyParser from 'body-parser';


const app=express()

if(process.env.NODE_ENV !== 'production'){
   dotenv.config({path :'./config/config.env'})
}

app.set('view engine','ejs')
app.set('views','./views')
app.set('layout','./layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

// Routers
app.use('/',indexRouter)
app.use('/authors',authorRouter)

// Connection to database
connectDB()




app.listen(
   process.env.PORT || 3000,
   ()=> console.log('server listening')
)