function CheckInputUser(){
	let usernameTemp = document.getElementById('username');
	let passwordTemp  = document.getElementById('pwd');
	let errorTemp = document.getElementById('ErrorMess');

	let name = usernameTemp.value;
	let pwd = passwordTemp.value;


	if(name === ""){
		errorTemp.innerHTML='Vui lòng nhập tên tài khoản';
		usernameTemp.focus();
		return false;
	}
	else if(pwd === ""){
		errorTemp.innerHTML='Vui lòng nhập mật khẩu';
		passwordTemp.focus();
		return false;
	}
	errorTemp.innerHTML="";
	return true;
}
function CheckInputSignUp(){
	let usernameTemp = document.getElementById('username');
	let passwordTemp  = document.getElementById('pwd');
	let cfpasswordTemp  = document.getElementById('cfpwd');
	let errorTemp = document.getElementById('ErrorMess');

	let name = usernameTemp.value;
	let pwd = passwordTemp.value;
	let cfpwd = cfpasswordTemp.value;


	if(name === ""){
		errorTemp.innerHTML='Vui lòng nhập tên tài khoản';
		usernameTemp.focus();
		return false;
	}
	else if(pwd === ""){
		errorTemp.innerHTML='Vui lòng nhập mật khẩu';
		passwordTemp.focus();
		return false;
	}
	else if(cfpwd === ""){
		errorTemp.innerHTML='Vui lòng nhập xác nhận mật khẩu';
		cfpasswordTemp.focus();
		return false;
	}
	else if(cfpwd != pwd){
		errorTemp.innerHTML='Mật khẩu không khớp';
		cfpasswordTemp.focus();
		return false;
	}
	errorTemp.innerHTML="";
	return true;
}
function ClearErrorMess(){
	let errorTemp = document.getElementById('ErrorMess').innerHTML="";
}
