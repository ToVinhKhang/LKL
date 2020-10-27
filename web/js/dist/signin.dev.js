"use strict";

function signIn(name, phone, birth, address, idnum, username, password, next) {
  activeElement("loading");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    name: name,
    phone: phone,
    birth: parseInt(birth),
    address: address,
    idnum: idnum,
    username: username,
    password: password
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("http://localhost:4000/user/signin", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    localStorage.setItem("signinStatus", true);
    if (next === "#") window.location.reload();else window.location.href = next;
  })["catch"](function (error) {
    return localStorage.setItem("signinStatus", false);
  });
}