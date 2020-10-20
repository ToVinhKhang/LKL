function updateStudentInfor(
  id,
  name,
  birth,
  phone,
  CMND,
  address,
  username,
  password
) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id,
    name: name,
    birth: parseInt(birth),
    phone: phone,
    CMND: CMND,
    address: address,
    username: username,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/student/update", requestOptions)
    .then((response) => response.text())
    .then((result) => window.location.reload())
    .catch((error) => console.log("error", error));
}
