"use strict";

function updateCourse(id, courseName, courseDes, courseFee, courseStartDate, courseTeacher, teacherId) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: id,
    course_name: courseName,
    course_des: courseDes,
    course_fee: courseFee,
    course_startdate: courseStartDate,
    course_teacher: courseTeacher,
    teacher_id: teacherId
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("http://localhost:4000/course/update", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return window.location.reload();
  })["catch"](function (error) {
    return console.log("error", error);
  });
}