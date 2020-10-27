"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require("@models/schedule"),
    Schedule = _require.Schedule;

var _require2 = require("@models/course"),
    Course = _require2.Course;

function getScheduleByCoursesId(week, courses) {
  var schedule_list, i, course_id, schedule;
  return regeneratorRuntime.async(function getScheduleByCoursesId$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          schedule_list = [];
          i = 0;

        case 2:
          if (!(i < courses.length)) {
            _context.next = 11;
            break;
          }

          course_id = courses[i].id;
          _context.next = 6;
          return regeneratorRuntime.awrap(Schedule.query().where("week", week).where("course_id", course_id));

        case 6:
          schedule = _context.sent;
          if (schedule.length !== 0) schedule_list = [].concat(_toConsumableArray(schedule_list), _toConsumableArray(schedule));

        case 8:
          i++;
          _context.next = 2;
          break;

        case 11:
          return _context.abrupt("return", schedule_list);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getCoursesByTeacherId(teacherId) {
  var courses;
  return regeneratorRuntime.async(function getCoursesByTeacherId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Course.query().where("teacher_id", teacherId));

        case 2:
          courses = _context2.sent;
          return _context2.abrupt("return", courses);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  getScheduleByCoursesId: getScheduleByCoursesId,
  getCoursesByTeacherId: getCoursesByTeacherId
};