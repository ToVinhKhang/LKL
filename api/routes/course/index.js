var express = require('express');
var router = express.Router();
const { getCourse,  deleteNotify, addCourse } = require('./services');

router.get("/", async (req, res, ext) => {
  res.send(await getCourse ()) 
})

router.post("/add", async (req, res, ext) => {
  var courseName = req.body.course_name
  var courseDes = req.body.course_des
  var courseFee = req.body.course_fee
  var courseStartDate = req.body.course_startdate
  var courseTeacher = req.body.course_teacher

  res.send(await addCourse (courseName, courseDes, courseFee, courseStartDate, courseTeacher)) 
})

router.post("/delete", async (req, res, ext) => {
  res.send(await deleteNotify (req.body.id)) 
})

module.exports = router;