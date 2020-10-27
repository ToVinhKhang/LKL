"use strict";

var teacherList;

function buildTeacherSelection() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch("http://localhost:4000/teacher", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return buildTeacher(result);
  })["catch"](function (error) {
    return console.log("error", error);
  });
}

function buildTeacher(result) {
  teacherList = JSON.parse(result)["teacher"];
  var teacherSelect = document.querySelectorAll(".teacher-selection");
  var teacherselectDIV = document.createElement("div");

  for (var i = teacherList.length - 1; i >= 0; i--) {
    var teacher = teacherList[i];
    var teacherselectHTML = "\n            <option value=\"".concat(teacher.name, "\" data-teacher-id=\"").concat(teacher.id, "\">").concat(teacher.name, "</option>\n        ");
    var teacherHTMLDIV = document.createElement("div");
    teacherHTMLDIV.innerHTML = teacherselectHTML;
    teacherselectDIV.append(teacherHTMLDIV.firstElementChild);
  }

  for (var s = 0; s < teacherSelect.length; s++) {
    var teacherSelect_i = teacherSelect[s];
    teacherSelect_i.innerHTML = teacherselectDIV.innerHTML;
  }
}