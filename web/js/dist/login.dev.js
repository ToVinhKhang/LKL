"use strict";

function login(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    username: username,
    password: password
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("http://localhost:4000/user/login", requestOptions).then(function (response) {
    return response.text();
  }).then(function _callee(result) {
    var role;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            localStorage.setItem('userInfor', result);
            role = JSON.parse(result)["user"]["role"];
            _context.t0 = role;
            _context.next = _context.t0 === "admin" ? 6 : _context.t0 === "student" ? 8 : _context.t0 === "teacher" ? 10 : 12;
            break;

          case 6:
            window.location.href = "./staffNadminLayout/notificationListM.html";
            return _context.abrupt("break", 12);

          case 8:
            window.location.href = "./studentLayout/notificationList.html";
            return _context.abrupt("break", 12);

          case 10:
            window.location.href = "./teacherLayout/notificationListM.html";
            return _context.abrupt("break", 12);

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t1 = _context["catch"](0);
            alert('dang nhap khong thanh cong');
            inactiveElement("loading");

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 14]]);
  })["catch"](function (error) {
    return console.log("error", error);
  });
}