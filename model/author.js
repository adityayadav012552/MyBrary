import expressEjsLayouts from 'express-ejs-layouts';
import mongoose, { model, Schema } from 'mongoose';

const authorSchema= new Schema({
   name:{
      type:String,
      required:true
   }
})

export default mongoose.model('Author',authorSchema)