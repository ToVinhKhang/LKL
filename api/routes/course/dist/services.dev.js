"use strict";

var _require = require("../../db/models/course"),
    Course = _require.Course;

var _require2 = require("../../db/models/student_course"),
    StudentCourse = _require2.StudentCourse;

var _require3 = require("./method"),
    addCourseStatus = _require3.addCourseStatus;

var _require4 = require("uuid"),
    uuidv4 = _require4.v4;

function getCourse(student_id) {
  var course, signedCourse;
  return regeneratorRuntime.async(function getCourse$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Course.query());

        case 2:
          course = _context.sent;

          if (!student_id) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(StudentCourse.query().where("student_id", student_id));

        case 6:
          signedCourse = _context.sent;
          addCourseStatus(course, signedCourse);

        case 8:
          return _context.abrupt("return", {
            course: course
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

function addCourse(courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId) {
  var course;
  return regeneratorRuntime.async(function addCourse$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Course.query().insert({
            id: uuidv4(),
            course_name: courseName,
            course_des: courseDes,
            course_fee: courseFee,
            course_startdate: courseStartDate,
            course_teacher: courseTeacher,
            teacher_id: teacherId
          }));

        case 2:
          course = _context2.sent;
          return _context2.abrupt("return", course);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function deleteCourse(id) {
  return regeneratorRuntime.async(function deleteCourse$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Course.query().deleteById(id));

        case 2:
          return _context3.abrupt("return", {
            mess: "deleted"
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function updateCourse(id, courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId) {
  return regeneratorRuntime.async(function updateCourse$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Course.query().findById(id).patch({
            course_name: courseName,
            course_des: courseDes,
            course_fee: courseFee,
            course_startdate: courseStartDate,
            course_teacher: courseTeacher,
            teacher_id: teacherId
          }));

        case 2:
          return _context4.abrupt("return", {
            mess: "updated"
          });

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

module.exports = {
  getCourse: getCourse,
  addCourse: addCourse,
  deleteCourse: deleteCourse,
  updateCourse: updateCourse
};