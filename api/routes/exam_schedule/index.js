var express = require("express");
var router = express.Router();
const {
  addExamSchedule,
  getExamSchedule,
  getExamScheduleById,
  deleteExamSchedule,
  updateExamSchedule,
} = require("./services");

router.get("/", async (req, res, ext) => {
  res.send("exam schedule ok!");
});

router.put("/add", async (req, res, ext) => {
  var course_id = req.body.course_id;
  var name = req.body.name;
  var room = req.body.room;
  var exam_date = req.body.exam_date;
  var exam_duration = req.body.exam_duration;

  res.send(
    await addExamSchedule(course_id, name, room, exam_date, exam_duration)
  );
});

router.get("/get", async (req, res, ext) => {
  res.send(await getExamSchedule());
});

router.post("/get", async (req, res, ext) => {
  res.send(await getExamScheduleById(req.body.id));
});

router.delete("/delete", async (req, res, ext) => {
  res.send(await deleteExamSchedule(req.body.id));
});

router.patch("/update", async (req, res, ext) => {
  var id = req.body.id;
  var course_id = req.body.course_id;
  var name = req.body.name;
  var room = req.body.room;
  var exam_date = req.body.exam_date;
  var exam_duration = req.body.exam_duration;

  res.send(
    await updateExamSchedule(
      id,
      course_id,
      name,
      room,
      exam_date,
      exam_duration
    )
  );
});

module.exports = router;
