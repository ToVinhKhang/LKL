let isUserNameExist = true;

function checkExistUserName(fieldId) {
  var username = document.getElementById(fieldId).value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({ username: username });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/user/check", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        result = JSON.parse(result);
        if (result.isExist) {
            // alert error
            console.log("username is exist")
        } else {
            isUserNameExist = false
        }
    })
    .catch((error) => console.log("error", error));
  console.log("checked!");
}
