const express = require('express');
const Author = require('../model/author.js');
const router=express.Router()

// All Author Route
router.get('/',async(req,res)=>{
   let searchOptions={}
   if(req.query.name !=null && req.query.name !==' '){
      searchOptions.name=new RegExp(req.query.name, 'i' )
   }
   try {
      const authors= await Author.find(searchOptions)
      res.render('./authors/index',{
         author : authors,
         searchOptions: req.query
      })
   } catch {
      res.redirect('/')
   }
})

// New Author Route
router.get('/new',(req,res)=>{
   res.render('authors/new',{author : new Author()})
})

// Create Author Route
router.post('/',async(req,res)=>{
   const author=new Author({
      name: req.body.name,
   })
   try {
      const newAuthor= await author.save()
      // res.redirect(`authors/${newAuthor.id}`)
      res.redirect('authors')
   } catch {
      res.render('authors/new',{
         author: author,
         errorMessage: 'Name is required'
      })
   }
})

module.exports =router;