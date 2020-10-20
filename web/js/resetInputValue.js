function ResetInput(){
    let fullnameTemp = document.querySelector("#fullname");
    let phoneTemp = document.querySelector("#phone");
    let birthTemp = document.querySelector("#birth");
    let addressTemp = document.querySelector("#address");
    let idnumTemp = document.querySelector("#idnum");
    let usernameTemp = document.querySelector("#username");
    let passwordTemp = document.querySelector("#pwd");
    let cfpasswordTemp = document.querySelector("#cfpwd");
    let errorTemp = document.querySelector("#ErrorMess");

    fullnameTemp.value="";
    phoneTemp.value="";
    birthTemp.value="";
    addressTemp.value="";
    idnumTemp.value="";
    usernameTemp.value="";
    passwordTemp.value="";
    cfpasswordTemp.value="";
    errorTemp.innerHTML="";
}