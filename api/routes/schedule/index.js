var express = require("express");
var router = express.Router();
const { addSchedule, getSchedule, deleteSchedule, updateSchedule } = require("./services");

router.get("/", async (req, res, ext) => {
  res.send("schedule ok!");
});

router.put("/add", async (req, res, ext) => {
  var courseId = req.body.courseId;
  var name = req.body.name;
  var room = req.body.room;
  var week_date = req.body.week_date;
  var duration = req.body.duration;
  var week = req.body.week;

  res.send(await addSchedule(courseId, name, room, week_date, duration, week));
});

router.post("/get", async (req, res, ext) => {
  res.send(await getSchedule(req.body.week));
});

router.delete("/delete", async (req, res, ext) => {
  res.send(await deleteSchedule(req.body.id));
});

router.patch("/update", async (req, res, ext) => {
  var id = req.body.id;
  var courseId = req.body.courseId;
  var name = req.body.name;
  var room = req.body.room;
  var week_date = req.body.week_date;
  var duration = req.body.duration;

  res.send(await updateSchedule(id, courseId, name, room, week_date, duration));
});

module.exports = router;
