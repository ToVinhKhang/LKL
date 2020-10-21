function login(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ username: username, password: password });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/user/login", requestOptions)
    .then((response) => response.text())
    .then(async (result) => {
      try {
        localStorage.setItem('userInfor', result);
        const role = JSON.parse(result)["user"]["role"];
        switch (role) {
          case "admin":
            window.location.href = "./staffNadminLayout/notificationListM.html"
            break;
  
          case "student":
            window.location.href = "./studentLayout/notificationList.html"
            break;
  
          case "teacher":
            window.location.href = "./teacherLayout/notificationListM.html"
            break;
        }
      } catch (e) {
        alert('dang nhap khong thanh cong')
        inactiveElement("loading")
      }
    })
    .catch((error) => console.log("error", error));
}
