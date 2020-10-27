"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./services'),
    getCourse = _require.getCourse,
    deleteCourse = _require.deleteCourse,
    addCourse = _require.addCourse,
    updateCourse = _require.updateCourse;

router.post("/", function _callee(req, res, ext) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = res;
          _context.next = 3;
          return regeneratorRuntime.awrap(getCourse(req.body.student_id));

        case 3:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/add", function _callee2(req, res, ext) {
  var courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          courseName = req.body.course_name;
          courseDes = req.body.course_des;
          courseFee = req.body.course_fee;
          courseStartDate = req.body.course_startdate;
          courseTeacher = req.body.course_teacher;
          teacherId = req.body.teacher_id;
          _context2.t0 = res;
          _context2.next = 9;
          return regeneratorRuntime.awrap(addCourse(courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId));

        case 9:
          _context2.t1 = _context2.sent;

          _context2.t0.send.call(_context2.t0, _context2.t1);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post("/delete", function _callee3(req, res, ext) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = res;
          _context3.next = 3;
          return regeneratorRuntime.awrap(deleteCourse(req.body.id));

        case 3:
          _context3.t1 = _context3.sent;

          _context3.t0.send.call(_context3.t0, _context3.t1);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post("/update", function _callee4(req, res, ext) {
  var id, courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          courseName = req.body.course_name;
          courseDes = req.body.course_des;
          courseFee = req.body.course_fee;
          courseStartDate = req.body.course_startdate;
          courseTeacher = req.body.course_teacher;
          teacherId = req.body.teacher_id;
          _context4.t0 = res;
          _context4.next = 10;
          return regeneratorRuntime.awrap(updateCourse(id, courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId));

        case 10:
          _context4.t1 = _context4.sent;

          _context4.t0.send.call(_context4.t0, _context4.t1);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;