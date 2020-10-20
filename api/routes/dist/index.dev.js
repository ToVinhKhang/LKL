"use strict";

var express = require('express');

var router = express.Router();

var path = require('path'); // check status


router.get('/', function (req, res, ext) {
  // console.log(req)
  // message = {
  //     mess: path.join(__dirname + '../public/')
  // }
  // res.send(message)    //
  // res.render('index', { title: 'Hey', message: 'Hello there!'});
  // res.sendFile('../public/index.html', { root: __dirname})
  // res.se
  res.sendFile('index.html', {
    root: path.join(__dirname, '../public')
  });
});
router.post('/linhtqapi', function (req, res, ext) {
  console.log(req.body);
  var message = {
    mess: "Thanks for request"
  };
  res.send(message); // res.sendFile(path.join(__dirname + '/public/index.html')) 
});

var user = require('./user');

router.use('/user', user);

var notify = require('./notify');

router.use('/notify', notify);

var course = require('./course');

router.use('/course', course);

var student = require('./student');

router.use('/student', student);
module.exports = router;