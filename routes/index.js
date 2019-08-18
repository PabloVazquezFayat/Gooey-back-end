var express = require('express');
var router = express.Router();

let testData = {
  name: 'Test Dummy',
  info: 'A test dummy for testing stuff for Gooey.js',
  email: 'test@dummy.com',
  avatar: '/images/test-dummy.jpg'
}

router.get('/', async (req, res, next)=> {
  res.status(200).json(testData);
});


module.exports = router;
