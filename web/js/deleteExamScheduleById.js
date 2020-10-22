function deleteExamScheduleById(examScheduleId) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ id: examScheduleId });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/exam_schedule/delete", requestOptions)
    .then((response) => response.text())
    .then((result) => getExamScheduleForModerator())
    .catch((error) => console.log("error", error));
}
