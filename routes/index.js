var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Welcome to HouseGalore' });
});

router.get('/who-am-i', function(req, res) {
  res.render('whoami', { title: 'Who Am I' });
});

router.get('/what-i-do', function(req, res) {
  res.render('whatido', { title: 'What I Do' });
});

router.get('/get-in-touch', function(req, res) {
  res.render('getintouch', { title: 'Get In Touch' });
});

router.get('/thank-you', function(req, res) {
  res.render('thankyou', { title: 'Thank you!' });
});

module.exports = router;
