"use strict";

function CheckInputUser() {
  var usernameTemp = document.getElementById('username');
  var passwordTemp = document.getElementById('pwd');
  var errorTemp = document.getElementById('ErrorMess');
  var name = usernameTemp.value;
  var pwd = passwordTemp.value;

  if (name === "") {
    errorTemp.innerHTML = 'Vui lòng nhập tên tài khoản';
    usernameTemp.focus();
    return false;
  } else if (pwd === "") {
    errorTemp.innerHTML = 'Vui lòng nhập mật khẩu';
    passwordTemp.focus();
    return false;
  }

  errorTemp.innerHTML = "";
  return true;
}

function CheckInputSignUp() {
  var fullnameTemp = document.querySelector("#fullname");
  var phoneTemp = document.querySelector("#phone");
  var birthTemp = document.querySelector("#birth");
  var addressTemp = document.querySelector("#address");
  var idnumTemp = document.querySelector("#idnum");
  var usernameTemp = document.querySelector("#username");
  var passwordTemp = document.querySelector("#pwd");
  var cfpasswordTemp = document.querySelector("#cfpwd");
  var errorTemp = document.querySelector("#ErrorMess");
  var fullname = fullnameTemp.value;
  var phone = phoneTemp.value;
  var birth = birthTemp.value;
  var address = addressTemp.value;
  var idnum = idnumTemp.value;
  var name = usernameTemp.value;
  var pwd = passwordTemp.value;
  var cfpwd = cfpasswordTemp.value;

  if (fullname === "") {
    errorTemp.innerHTML = 'Vui lòng nhập họ và tên';
    fullnameTemp.focus();
    return false;
  } else if (phone === "") {
    errorTemp.innerHTML = 'Vui lòng số điện thoại';
    phoneTemp.focus();
    return false;
  } else if (birth === "") {
    errorTemp.innerHTML = 'Vui lòng nhập năm sinh';
    birthTemp.focus();
  } else if (address === "") {
    errorTemp.innerHTML = 'Vui lòng nhập địa chỉ';
    addressTemp.focus();
    return false;
  } else if (idnum === "") {
    errorTemp.innerHTML = 'Vui lòng nhập số CMND';
    idnumTemp.focus();
    return false;
  } else if (name === "") {
    errorTemp.innerHTML = 'Vui lòng nhập tên tài khoản';
    usernameTemp.focus();
    return false;
  } else if (pwd === "") {
    errorTemp.innerHTML = 'Vui lòng nhập mật khẩu';
    passwordTemp.focus();
    return false;
  } else if (cfpwd === "") {
    errorTemp.innerHTML = 'Vui lòng nhập xác nhận mật khẩu';
    cfpasswordTemp.focus();
    return false;
  } else if (cfpwd != pwd) {
    errorTemp.innerHTML = 'Mật khẩu không khớp';
    cfpasswordTemp.focus();
    return false;
  }

  errorTemp.innerHTML = "";
  signIn(fullname, phone, birth, address, idnum, name, pwd, "./home.html");
  return true;
}

function ClearErrorMess() {
  var errorTemp = document.getElementById('ErrorMess').innerHTML = "";
}