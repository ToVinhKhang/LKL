"use strict";

var express = require("express");

var router = express.Router();

var _require = require("./services"),
    addSchedule = _require.addSchedule,
    getSchedule = _require.getSchedule,
    deleteSchedule = _require.deleteSchedule,
    updateSchedule = _require.updateSchedule,
    getScheduleByStudentId = _require.getScheduleByStudentId,
    getScheduleByTeacherId = _require.getScheduleByTeacherId;

router.get("/", function _callee(req, res, ext) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.send("schedule ok!");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.put("/add", function _callee2(req, res, ext) {
  var courseId, name, room, week_date, duration, week;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          courseId = req.body.courseId;
          name = req.body.name;
          room = req.body.room;
          week_date = req.body.week_date;
          duration = req.body.duration;
          week = req.body.week;
          _context2.t0 = res;
          _context2.next = 9;
          return regeneratorRuntime.awrap(addSchedule(courseId, name, room, week_date, duration, week));

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
router.post("/get", function _callee3(req, res, ext) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = res;
          _context3.next = 3;
          return regeneratorRuntime.awrap(getSchedule(req.body.week));

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
router.post("/getbystudentid", function _callee4(req, res, ext) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = res;
          _context4.next = 3;
          return regeneratorRuntime.awrap(getScheduleByStudentId(req.body.week, req.body.id));

        case 3:
          _context4.t1 = _context4.sent;

          _context4.t0.send.call(_context4.t0, _context4.t1);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.post("/getbyteacherid", function _callee5(req, res, ext) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.t0 = res;
          _context5.next = 3;
          return regeneratorRuntime.awrap(getScheduleByTeacherId(req.body.week, req.body.id));

        case 3:
          _context5.t1 = _context5.sent;

          _context5.t0.send.call(_context5.t0, _context5.t1);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router["delete"]("/delete", function _callee6(req, res, ext) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.t0 = res;
          _context6.next = 3;
          return regeneratorRuntime.awrap(deleteSchedule(req.body.id));

        case 3:
          _context6.t1 = _context6.sent;

          _context6.t0.send.call(_context6.t0, _context6.t1);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router.patch("/update", function _callee7(req, res, ext) {
  var id, courseId, name, room, week_date, duration;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.body.id;
          courseId = req.body.courseId;
          name = req.body.name;
          room = req.body.room;
          week_date = req.body.week_date;
          duration = req.body.duration;
          _context7.t0 = res;
          _context7.next = 9;
          return regeneratorRuntime.awrap(updateSchedule(id, courseId, name, room, week_date, duration));

        case 9:
          _context7.t1 = _context7.sent;

          _context7.t0.send.call(_context7.t0, _context7.t1);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  });
});
module.exports = router;