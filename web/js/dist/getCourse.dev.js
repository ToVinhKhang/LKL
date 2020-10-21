"use strict";

var courseList;

<<<<<<< HEAD
function getCourse() {
  var requestOptions = {
    method: "GET",
=======
function getCourse(student_id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    student_id: student_id
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
>>>>>>> 89f7815... course sign
    redirect: "follow"
  };
  fetch("http://localhost:4000/course", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return buildCourse(result);
  })["catch"](function (error) {
    return console.log("error", error);
  });
}

function buildCourse(result) {
  var courseTable = document.querySelector("#course-list");
  courseList = JSON.parse(result)["course"];

  for (var i = courseList.length - 1; i >= 0; i--) {
    var course = courseList[i];
<<<<<<< HEAD
    var courseHTML = "\n            <td style=\"min-width:200px; max-width: 250px;\">\n                ".concat(course.course_name, "\n            </td>\n            <td style=\"min-width:350px; max-width: 400px;\">\n                ").concat(course.course_des, "    \n            </td>\n            <td>\n                ").concat(course.course_fee, "\n            </td>\n            <td>\n                ").concat(course.course_startdate, "\n            </td>\n            <td>\n                ").concat(course.course_teacher, "\n            </td>\n            <td>\n                <span class=\"btn-x\" style=\"color: rgb(245, 108, 45);\" onclick=\"courseSignIn(").concat(i, ")\">\n                    <i class=\"mdi mdi-clipboard-edit-outline\"></i>\n                    \u0110\u0103ng k\xFD\n                </span>\n            </td>\n        ");
=======
    var courseHTML = "\n            <td style=\"min-width:200px; max-width: 250px;\">\n                ".concat(course.course_name, "\n            </td>\n            <td style=\"min-width:350px; max-width: 400px;\">\n                ").concat(course.course_des, "    \n            </td>\n            <td>\n                ").concat(course.course_fee, "\n            </td>\n            <td>\n                ").concat(course.course_startdate, "\n            </td>\n            <td>\n                ").concat(course.course_teacher, "\n            </td>\n            <td>\n                ").concat(course.isSigned ? "<span class=\"btn-x noselect\" style=\"color: rgb(255 0 0);\">\n                    <i class=\"mdi mdi-delete\"></i>\n                    H\u1EE7y\n                </span>" : "<span class=\"btn-x noselect\" style=\"color: rgb(21 160 47);\" onclick=\"handleCourseSignIn(".concat(i, ")\">\n                    <i class=\"mdi mdi-clipboard-edit-outline\"></i>\n                    \u0110\u0103ng k\xFD\n                </span>"), "\n            </td>\n        ");
>>>>>>> 89f7815... course sign
    var courseHTMLDIV = document.createElement("tr");
    courseHTMLDIV.innerHTML = courseHTML;
    courseTable.append(courseHTMLDIV);
  }
}