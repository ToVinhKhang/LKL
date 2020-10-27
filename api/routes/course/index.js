var express = require('express');
var router = express.Router();
const { getCourse,  deleteCourse, addCourse, updateCourse } = require('./services');

router.post("/", async (req, res, ext) => {
  res.send(await getCourse (req.body.student_id)) 
})

router.post("/add", async (req, res, ext) => {
  var courseName = req.body.course_name
  var courseDes = req.body.course_des
  var courseFee = req.body.course_fee
  var courseStartDate = req.body.course_startdate
  var courseTeacher = req.body.course_teacher
  var teacherId = req.body.teacher_id

  res.send(await addCourse (courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId)) 
})

router.post("/delete", async (req, res, ext) => {
  res.send(await deleteCourse (req.body.id)) 
})

router.post("/update", async (req, res, ext) => {
  var id = req.body.id
  var courseName = req.body.course_name
  var courseDes = req.body.course_des
  var courseFee = req.body.course_fee
  var courseStartDate = req.body.course_startdate
  var courseTeacher = req.body.course_teacher
  var teacherId = req.body.teacher_id


  res.send(await updateCourse (id, courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId)) 
})

module.exports = router;