function CheckInput(){
	let phoneTemp = document.getElementById('phone');
	let nameTemp  = document.getElementById('name');
	let literacyTemp  = document.getElementById('literacy');
	let errorTemp = document.getElementById('ErrorMess');

	let phone = phoneTemp.value;
	let name = nameTemp.value;
	let literacy = literacyTemp.value;

	if(phone === ""){
		errorTemp.innerHTML='Vui lòng điền số điện thoại';
		phoneTemp.focus();
		return false;
	}
	else if(isNaN(phone)){
		errorTemp.innerHTML='Số điện thoại không hợp lệ';
		phoneTemp.focus();
		return false;
	}
	else if(name === ""){
		errorTemp.innerHTML='Vui lòng điền tên đầy đủ';
		nameTemp.focus();
		return false;
	}
	else if(literacy === ""){
		errorTemp.innerHTML='Vui lòng chọn trình độ học vấn';
		literacyTemp.focus();
		return false;
	}
	errorTemp.innerHTML="";
	return true;
}
function ClearErrorMess(){
	let errorTemp = document.getElementById('ErrorMess').innerHTML="";
}