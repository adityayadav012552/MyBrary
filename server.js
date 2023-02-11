const express =require('express');
const expressLayouts =require('express-ejs-layouts');
const indexRouter =require('./routes/index.js');
const authorRouter =require('./routes/author.js');
const booksRouter = require('./routes/books.js');
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const bodyParser = require('body-parser');
const methodOverride= require('method-override')


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
app.use(methodOverride('_method'))

// Routers
app.use('/',indexRouter)
app.use('/authors',authorRouter)
app.use('/books',booksRouter)

// Connection to database
connectDB()




app.listen(
   process.env.PORT || 4000,
   ()=> console.log('server listening')
)