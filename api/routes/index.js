var express = require("express");
var router = express.Router();
var path = require("path");

// check status
router.get("/", (req, res, ext) => {
  res.send("Look good");
});

const user = require("./user");
router.use("/user", user);

const notify = require("./notify");
router.use("/notify", notify);

const course = require("./course");
router.use("/course", course);

const student = require("./student");
router.use("/student", student);

const teacher = require("./teacher");
router.use("/teacher", teacher);

const student_course = require("./student_course");
router.use("/student_course", student_course);

const schedule = require("./schedule");
router.use("/schedule", schedule);

const exam_schedule = require("./exam_schedule");
router.use("/exam_schedule", exam_schedule);

module.exports = router;
