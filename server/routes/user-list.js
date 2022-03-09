const express = require('express');
const router = express.Router()

/* GET home page. */
router.get('/userlist', function(req, res, next) {
    res.render('userlist', { title: 'Express' });
  });
  
  module.exports = router;