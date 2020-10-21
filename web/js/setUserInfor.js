function setUserInfor() {
    var name = JSON.parse(localStorage.getItem("userInfor")).name
    document.querySelector("#user-name").textContent = name
}