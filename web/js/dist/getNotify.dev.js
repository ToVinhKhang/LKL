"use strict";

function getNofity() {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:4000/notify", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return buildNotify(result);
  })["catch"](function (error) {
    return console.log("error", error);
  });
}

var notifList;

function buildNotify(result) {
  var notifTable = document.querySelector("#notify-list");
  notifList = JSON.parse(result)["notify"];

  for (var i = 0; i < notifList.length; i++) {
    var notif = notifList[i];
    var notifyHTML = "\n            <td>\n                <div onclick=\"setNotifyToLocalStorage('".concat(i, "')\" style=\"cursor: pointer\">\n                    ").concat(notif.title, "\n                </div>\n            </td>\n            <td>\n                ").concat(notif.post_date, "\n            </td>\n        ");
    var notifyHTMLDIV = document.createElement('tr');
    notifyHTMLDIV.innerHTML = notifyHTML;
    notifTable.append(notifyHTMLDIV);
  }
}

function setNotifyToLocalStorage(notification_idx) {
  localStorage.setItem('title', notifList[notification_idx].title);
  localStorage.setItem('content', notifList[notification_idx].notification_content);
  localStorage.setItem('post_date', notifList[notification_idx].post_date);
  window.location.href = "./notifDetail/index.html";
}