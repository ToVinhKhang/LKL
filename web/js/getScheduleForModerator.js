function getScheduleForModerator(week) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ week: week });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/schedule/get", requestOptions)
    .then((response) => response.text())
    .then((result) => buildSchedule(result))
    .catch((error) => console.log("error", error));
}

var scheduleList;

function buildSchedule(result) {
  inactiveElement("loading")
  var scheduleTable = document.querySelector("#schedule-list");
  scheduleTable.innerHTML = ""
  scheduleList = JSON.parse(result)["schedule"];
  for (var i = scheduleList.length - 1; i >= 0; i--) {
    var schedule = scheduleList[i];
    var scheduleHTML = `
            <td>${schedule.name}</td>
            <td>${schedule.room}</td>
            <td>${schedule.week_date}</td>
            <td>${schedule.duration}</td>
            <td>
            <div class="d-flex">
                <div>
                <i
                    onclick="handleOpenFormEditScheduleById('${i}')"
                    class="mdi mdi-pen l-icon l-icon-md"
                ></i>
                </div>
                <div class="l-spacer"></div>
                <div>
                <i
                    onclick="handleDeleteScheduleById('${schedule.id}')"
                    class="mdi mdi-delete l-icon l-icon-md l-fill-red"
                ></i>
                </div>
            </div>
            </td>
        `;
    var scheduleHTMLDIV = document.createElement("tr");
    scheduleHTMLDIV.innerHTML = scheduleHTML;
    scheduleTable.append(scheduleHTMLDIV);
  }
}
