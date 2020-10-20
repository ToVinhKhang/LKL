"use strict";

function getStudent() {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:4000/student", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return buildStudent(result);
  })["catch"](function (error) {
    return console.log("error", error);
  });
}

var studentList;

function buildStudent(result) {
  var studentTable = document.querySelector("#student-list");
  studentList = JSON.parse(result)["student"];

  for (var i = studentList.length - 1; i >= 0; i--) {
    var student = studentList[i];
    var studentHTML = "\n            <td>".concat(student.name, "</td>\n            <td>").concat(student.CMND, "</td>   \n            <td>").concat(student.birth, "</td>                     \n            <td>").concat(student.phone, "</td>\n            <td>").concat(student.address, "</td>    \n            <td>\n                <div class=\"d-flex\">\n                    <div>\n                        <i onclick=\"openFormEdit()\" class=\"mdi mdi-pen l-icon l-icon-md\"></i>\n                    </div>\n                    <div class=\"l-spacer\"></div>\n                    <div>\n                        <i onclick=\"handleConfirmDelete(").concat(i, ")\" class=\"mdi mdi-delete l-icon l-icon-md l-fill-red\"></i>\n                    </div>\n                </div>\n            </td>\n        ");
    var studentHTMLDIV = document.createElement("tr");
    studentHTMLDIV.innerHTML = studentHTML;
    studentTable.append(studentHTMLDIV);
  }
}