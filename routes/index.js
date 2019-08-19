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


module.exports = router;
