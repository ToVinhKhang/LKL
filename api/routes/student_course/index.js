var express = require("express");
var router = express.Router();
const { addStudentCourse } = require("./services");

router.get("/", async (req, res, ext) => {
  res.send(await getStudent());
});

router.post("/sign", async (req, res, ext) => {
  var student_id = req.body.student_id;
  var course_id = req.body.course_id;

  res.send(
    await addStudentCourse(
      student_id,
      course_id
    )
  );
});

module.exports = router;
