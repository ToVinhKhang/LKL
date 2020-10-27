"use strict";

function getScheduleByTeacherId(week, id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: id,
    week: week
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("http://localhost:4000/schedule/getbyteacherid", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return buidSchedule(result);
  })["catch"](function (error) {
    return console.log("error", error);
  });
}

function buidSchedule(result) {
  var scheduleTable = document.querySelector("#schedule-table");
  scheduleTable.innerHTML = "";
  scheduleList = JSON.parse(result)["schedule"];

  for (var i = scheduleList.length - 1; i >= 0; i--) {
    var schedule = scheduleList[i];
    var scheduleHTML = "\n                  <td>".concat(schedule.name, "</td>\n                  <td>").concat(schedule.week_date, "</td>\n                  <td>").concat(schedule.room, "</td>\n                  <td>").concat(schedule.duration, "</td>\n              ");
    var scheduleHTMLDIV = document.createElement("tr");
    scheduleHTMLDIV.innerHTML = scheduleHTML;
    scheduleTable.append(scheduleHTMLDIV);
  }
}