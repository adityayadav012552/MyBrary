const mongoose = require('mongoose');

mongoose.set('strictQuery',false)
const connectDB= async ()=>{
   try {
      const conn=await mongoose.connect(process.env.DATABASE_URL,{
         useNewUrlParser: true
      })
      // console.log(`connection ok ${conn.connection.host}`)

   } catch (err) {
      console.log(err)
      process.exit(1)
   }
}

module.exports = connectDB