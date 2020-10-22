function addSchedule(courseId, name, room, week_date, duration, week) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    courseId: courseId,
    name: name,
    room: room,
    week_date: week_date,
    duration: duration,
    week: week,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/schedule/add", requestOptions)
    .then((response) => response.text())
    .then((result) => getScheduleForModerator(week))
    .catch((error) => console.log("error", error));
}
