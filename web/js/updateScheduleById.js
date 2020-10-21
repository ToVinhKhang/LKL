function updateScheduleById(id, courseId, name, room, week_date, duration) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id,
    courseId: courseId,
    name: name,
    room: room,
    week_date: week_date,
    duration: duration,
  });

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/schedule/update", requestOptions)
    .then((response) => response.text())
    .then((result) =>  getScheduleForModeratoer(week))
    .catch((error) => console.log("error", error));
}
