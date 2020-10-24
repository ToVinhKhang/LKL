function getScheduleByStudentId(week, id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ id: id, week: week });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/schedule/getbystudentid", requestOptions)
    .then((response) => response.text())
    .then((result) => buidSchedule(result))
    .catch((error) => console.log("error", error));
}

function buidSchedule(result) {
  var scheduleTable = document.querySelector("#schedule-table");
  scheduleTable.innerHTML = "";
  scheduleList = JSON.parse(result)["schedule"];

  for (var i = scheduleList.length - 1; i >= 0; i--) {
    var schedule = scheduleList[i];
    var scheduleHTML = `
                <td>${schedule.name}</td>
                <td>${schedule.week_date}</td>
                <td>${schedule.room}</td>
                <td>${schedule.duration}</td>
            `;
    var scheduleHTMLDIV = document.createElement("tr");
    scheduleHTMLDIV.innerHTML = scheduleHTML;
    scheduleTable.append(scheduleHTMLDIV);
  }
}
