"use strict";

function CheckInput() {
  var phoneTemp = document.getElementById("phone");
  var nameTemp = document.getElementById("name");
  var literacyTemp = document.getElementById("literacy");
  var errorTemp = document.getElementById("ErrorMess");
  var phone = phoneTemp.value;
  var name = nameTemp.value;
  var literacy = literacyTemp.value;

  if (phone === "") {
    errorTemp.innerHTML = "Vui lòng điền số điện thoại";
    phoneTemp.focus();
    return false;
  } else if (isNaN(phone)) {
    errorTemp.innerHTML = "Số điện thoại không hợp lệ";
    phoneTemp.focus();
    return false;
  } else if (name === "") {
    errorTemp.innerHTML = "Vui lòng điền tên đầy đủ";
    nameTemp.focus();
    return false;
  } else if (literacy === "") {
    errorTemp.innerHTML = "Vui lòng chọn trình độ học vấn";
    literacyTemp.focus();
    return false;
  }

  errorTemp.innerHTML = "";
  return true;
}

function ClearErrorMess() {
  var errorTemp = document.getElementById("ErrorMess").innerHTML = "";
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}