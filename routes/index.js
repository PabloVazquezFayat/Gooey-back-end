var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next)=> {
  res.status(200).json({message: 'Hello World'});
});


module.exports = router;
