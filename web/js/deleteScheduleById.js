function deleteScheduleById(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ id: id });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/schedule/delete", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        getScheduleForModeratoer(week);
    })
    .catch((error) => console.log("error", error));
}
