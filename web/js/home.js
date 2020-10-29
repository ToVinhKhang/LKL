if (localStorage.getItem("signinStatus") === "true") {
document.getElementById("signinMessage").innerHTML = `
    <div onclick="closeMessage()" id="messageFromSignup" class="alert alert-success" style="width: 600px; text-align: center; margin: auto; position: fixed;right:0; bottom: 0; display: block; cursor: pointer; z-index: 100;">
        <a class="close" data-dismiss="alert" aria-label="close" >&times;</a>
        <span>Đăng ký tài khoản thành công</span>
    </div>
`;
localStorage.setItem("signinStatus", false);
}