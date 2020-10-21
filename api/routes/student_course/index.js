var express = require("express");
var router = express.Router();
const {
  addStudentCourse,
  deleteStudentCourse,
  getCoursesByStudentId,
} = require("./services");

router.get("/", async (req, res, ext) => {
  res.send(await getStudent());
});

router.post("/sign", async (req, res, ext) => {
  var student_id = req.body.student_id;
  var course_id = req.body.course_id;

  res.send(await addStudentCourse(student_id, course_id));
});

router.delete("/cancel", async (req, res, ext) => {
  var student_id = req.body.student_id;
  var course_id = req.body.course_id;

  res.send(await deleteStudentCourse(student_id, course_id));
});

router.post("/getcourse", async (req, res, ext) => {
  var student_id = req.body.student_id;

  res.send(await getCoursesByStudentId(student_id));
});

module.exports = router;
