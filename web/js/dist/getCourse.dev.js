"use strict";

var courseList;

function getCourse() {
  var requestOptions = {
    method: "GET",
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
    var courseHTML = "\n            <td style=\"min-width:200px; max-width: 250px;\">\n                ".concat(course.course_name, "\n            </td>\n            <td style=\"min-width:350px; max-width: 400px;\">\n                ").concat(course.course_des, "    \n            </td>\n            <td>\n                ").concat(course.course_fee, "\n            </td>\n            <td>\n                ").concat(course.course_startdate, "\n            </td>\n            <td>\n                ").concat(course.course_teacher, "\n            </td>\n            <td>\n                <span class=\"btn-x\" style=\"color: rgb(245, 108, 45);\" onclick=\"courseSignIn(").concat(i, ")\">\n                    <i class=\"mdi mdi-clipboard-edit-outline\"></i>\n                    \u0110\u0103ng k\xFD\n                </span>\n            </td>\n        ");
    var courseHTMLDIV = document.createElement("tr");
    courseHTMLDIV.innerHTML = courseHTML;
    courseTable.append(courseHTMLDIV);
  }
}