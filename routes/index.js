const express = require('express');
const Book = require('../model/book')
const router=express.Router()

router.get('/', async (req, res) => {
   let books
   try {
     books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()
   } catch {
     books = []
   }
   res.render('index', { books: books })
 })

module.exports= router