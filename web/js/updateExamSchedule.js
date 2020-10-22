function updateExamSchedule(id, course_id, name, room, exam_date, exam_duration) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id,
    course_id: course_id,
    name: name,
    room: room,
    exam_date: exam_date,
    exam_duration: exam_duration,
  });

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/exam_schedule/update", requestOptions)
    .then((response) => response.text())
    .then((result) => getExamScheduleForModerator())
    .catch((error) => console.log("error", error));
}
