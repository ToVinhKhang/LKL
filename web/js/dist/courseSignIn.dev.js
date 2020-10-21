"use strict";

function courseSignIn(student_id, course_id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    student_id: student_id,
    course_id: course_id
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("http://localhost:4000/student_course/sign", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return window.location.reload();
  })["catch"](function (error) {
    return console.log("error", error);
  });
}