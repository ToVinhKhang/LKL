function getExamScheduleForModerator() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:4000/exam_schedule/get", requestOptions)
        .then(response => response.text())
        .then(result => buildExamSchedule(result))
        .catch(error => console.log('error', error));
}

var examScheduleList;

function buildExamSchedule(result) {
  inactiveElement("loading")
  var examScheduleTable = document.querySelector("#examSchedule-list");
  examScheduleTable.innerHTML = ""
  examScheduleList = JSON.parse(result)["examSchedule"];
  for (var i = examScheduleList.length - 1; i >= 0; i--) {
    var examSchedule = examScheduleList[i];
    var examScheduleHTML = `
            <td>${examSchedule.name}</td>
            <td>${examSchedule.room}</td>
            <td>${examSchedule.exam_date}</td>
            <td>${examSchedule.exam_duration}</td>
            <td>
                <div class="d-flex">
                <div>
                    <i
                      onclick="handleOpenFormEditExamScheduleById(${i})"
                      class="mdi mdi-pen l-icon l-icon-md"
                    ></i>
                </div>
                <div class="l-spacer"></div>
                <div>
                    <i
                      onclick="openPopupConfirmDeleteExamSchedule('${examSchedule.id}')"
                      class="mdi mdi-delete l-icon l-icon-md l-fill-red"
                    ></i>
                </div>
                </div>
            </td>
        `;
    var examScheduleHTMLDIV = document.createElement("tr");
    examScheduleHTMLDIV.innerHTML = examScheduleHTML;
    examScheduleTable.append(examScheduleHTMLDIV);
  }
}
