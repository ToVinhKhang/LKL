function CheckInputUser() {
  let usernameTemp = document.getElementById("username");
  let passwordTemp = document.getElementById("pwd");
  let errorTemp = document.getElementById("ErrorMess");

  let name = usernameTemp.value;
  let pwd = passwordTemp.value;

  if (name === "") {
    errorTemp.innerHTML = "Vui lòng nhập tên tài khoản";
    usernameTemp.focus();
    return false;
  } else if (pwd === "") {
    errorTemp.innerHTML = "Vui lòng nhập mật khẩu";
    passwordTemp.focus();
    return false;
  }
  errorTemp.innerHTML = "";
  return true;
}

function CheckInputSignUp() {
  let fullnameTemp = document.querySelector("#fullname");
  let phoneTemp = document.querySelector("#phone");
  let birthTemp = document.querySelector("#birth");
  let addressTemp = document.querySelector("#address");
  let idnumTemp = document.querySelector("#idnum");
  let usernameTemp = document.querySelector("#username");
  let passwordTemp = document.querySelector("#pwd");
  let cfpasswordTemp = document.querySelector("#cfpwd");
  let errorTemp = document.querySelector("#ErrorMess");

  let fullname = fullnameTemp.value;
  let phone = phoneTemp.value;
  let birth = birthTemp.value;
  let address = addressTemp.value;
  let idnum = idnumTemp.value;
  let name = usernameTemp.value;
  let pwd = passwordTemp.value;
  let cfpwd = cfpasswordTemp.value;

  if (fullname === "") {
    errorTemp.innerHTML = "Vui lòng nhập họ và tên";
    fullnameTemp.focus();
    return false;
  } else if (phone === "") {
    errorTemp.innerHTML = "Vui lòng số điện thoại";
    phoneTemp.focus();
    return false;
  } else if (birth === "") {
    errorTemp.innerHTML = "Vui lòng nhập năm sinh";
    birthTemp.focus();
  } else if (address === "") {
    errorTemp.innerHTML = "Vui lòng nhập địa chỉ";
    addressTemp.focus();
    return false;
  } else if (idnum === "") {
    errorTemp.innerHTML = "Vui lòng nhập số CMND";
    idnumTemp.focus();
    return false;
  } else if (name === "") {
    errorTemp.innerHTML = "Vui lòng nhập tên tài khoản";
    usernameTemp.focus();
    return false;
  } else if (pwd === "") {
    errorTemp.innerHTML = "Vui lòng nhập mật khẩu";
    passwordTemp.focus();
    return false;
  } else if (cfpwd === "") {
    errorTemp.innerHTML = "Vui lòng nhập xác nhận mật khẩu";
    cfpasswordTemp.focus();
    return false;
  } else if (cfpwd != pwd) {
    errorTemp.innerHTML = "Mật khẩu không khớp";
    cfpasswordTemp.focus();
    return false;
  }
  errorTemp.innerHTML = "";
  signIn(fullname, phone, birth, address, idnum, name, pwd, "./home.html");
  return true;
}

function ClearErrorMess() {
  let errorTemp = (document.getElementById("ErrorMess").innerHTML = "");
}


