"use strict";

function deleteCourse(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id": id
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/course/delete", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return window.location.reload();
  })["catch"](function (error) {
    return console.log('error', error);
  });
}