const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', async (req, res, next)=> {
  try{
    let movies = await Movie.find();
    res.status(200).json(movies);
  }catch(error){
    next((error)=>{
      console.log(error);
    });
  }
});

router.get('/movie/:id', async (req, res, next)=> {
  try{
    let movie = await Movie.findById(req.params.id);
    console.log(movie);
    res.status(200).json(movie);
  }catch(error){
    next((error)=>{
      console.log(error);
    });
  }
});


//this route can be refactor for creating new DB entries
router.post('/movie', async (req, res, next)=> {
  try{
    res.status(200).json(req.body)
    console.log(req.body);
  }catch(error){
    next((error)=>{
      console.log(error);
    });
  }
});


module.exports = router;
