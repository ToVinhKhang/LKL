"use strict";

var _require = require("@models/schedule"),
    Schedule = _require.Schedule;

var _require2 = require("uuid"),
    uuidv4 = _require2.v4;

var _require3 = require("../student_course/services"),
    getCoursesByStudentId = _require3.getCoursesByStudentId;

var _require4 = require("./method"),
    getScheduleByCoursesId = _require4.getScheduleByCoursesId,
    getCoursesByTeacherId = _require4.getCoursesByTeacherId;

function addSchedule(courseId, name, room, week_date, duration, week) {
  var trx, schedule;
  return regeneratorRuntime.async(function addSchedule$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Schedule.startTransaction());

        case 2:
          trx = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Schedule.query().insert({
            id: uuidv4(),
            course_id: courseId,
            name: name,
            room: room,
            week_date: week_date,
            duration: duration,
            week: week
          }));

        case 6:
          schedule = _context.sent;
          trx.commit();
          return _context.abrupt("return", {
            schedule: schedule
          });

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          trx.rollback();
          throw _context.t0;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
}

function getSchedule(week) {
  var schedule;
  return regeneratorRuntime.async(function getSchedule$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Schedule.query().where("week", week));

        case 2:
          schedule = _context2.sent;
          return _context2.abrupt("return", {
            schedule: schedule
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getScheduleByStudentId(week, student_id) {
  var courses, schedule;
  return regeneratorRuntime.async(function getScheduleByStudentId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getCoursesByStudentId(student_id));

        case 2:
          courses = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(getScheduleByCoursesId(week, courses['courses']));

        case 5:
          schedule = _context3.sent;
          return _context3.abrupt("return", {
            schedule: schedule
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function getScheduleByTeacherId(week, teacher_id) {
  var courses, schedule;
  return regeneratorRuntime.async(function getScheduleByTeacherId$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getCoursesByTeacherId(teacher_id));

        case 2:
          courses = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(getScheduleByCoursesId(week, courses));

        case 5:
          schedule = _context4.sent;
          return _context4.abrupt("return", {
            schedule: schedule
          });

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function deleteSchedule(id) {
  return regeneratorRuntime.async(function deleteSchedule$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Schedule.query().deleteById(id));

        case 2:
          return _context5.abrupt("return", {
            mess: "deleted"
          });

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function updateSchedule(id, courseId, name, room, week_date, duration) {
  return regeneratorRuntime.async(function updateSchedule$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(Schedule.query().findById(id).patch({
            course_id: courseId,
            name: name,
            room: room,
            week_date: week_date,
            duration: duration
          }));

        case 2:
          return _context6.abrupt("return", {
            mess: "updated"
          });

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
}

module.exports = {
  addSchedule: addSchedule,
  getSchedule: getSchedule,
  getScheduleByStudentId: getScheduleByStudentId,
  getScheduleByTeacherId: getScheduleByTeacherId,
  deleteSchedule: deleteSchedule,
  updateSchedule: updateSchedule
};