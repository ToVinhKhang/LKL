function getExamExamScheduleByStudentId(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ id: id });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/exam_schedule/get", requestOptions)
    .then((response) => response.text())
    .then((result) => buidExamSchedule(result))
    .catch((error) => console.log("error", error));
}

function buidExamSchedule(result) {
  var examScheduleTable = document.querySelector("#exam-schedule-table");
  examScheduleTable.innerHTML = "";
  examScheduleList = JSON.parse(result)["examSchedule"];

  for (var i = examScheduleList.length - 1; i >= 0; i--) {
    var examSchedule = examScheduleList[i];
    var examScheduleHTML = `
                <td>${examSchedule.name}</td>
                <td>${examSchedule.name}</td>
                <td>${examSchedule.exam_date}</td>
                <td>${examSchedule.exam_duration}</td>
            `;
    var examScheduleHTMLDIV = document.createElement("tr");
    examScheduleHTMLDIV.innerHTML = examScheduleHTML;
    examScheduleTable.append(examScheduleHTMLDIV);
  }
}
