import express  from 'express'
import expressLayouts from 'express-ejs-layouts'
import indexRouter from './routes/index.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'


const app=express()

if(process.env.NODE_ENV !== 'production'){
   dotenv.config({path :'./config/config.env'})
}
app.set('view engine','ejs')
app.set('views','./views')
app.set('layout','./layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',indexRouter)

// Connection to database
mongoose.set('strictQuery',false)
const connectDB= async ()=>{
   try {
      const conn=await mongoose.connect(process.env.DATABASE_URL,{
         useNewUrlParser: true
      })
      console.log(`connection ok ${conn.connection.host}`)

   } catch (err) {
      console.log(err)
      process.exit(1)
   }
}
connectDB()




app.listen(
   process.env.PORT || 3000,
   ()=> console.log('server listening')
)