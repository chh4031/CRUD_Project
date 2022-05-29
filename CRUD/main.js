var user_name = document.getElementById("user_name");
var user_id = document.getElementById("user_id");

var submit = document.getElementById("submit");
var admin = document.getElementById("admin_value");

submit.onclick = bringvalue;

function bringvalue(){
    var user_name_value = user_name.value;
    var user_id_value = user_id.value;
    console.log(user_name_value);
    console.log(user_id_value);
    //location.href="admin.html?" + user_name_value + ":"+ user_id_value 이방식 안씀
    localStorage.setItem('ky1', user_name_value);//로컬 스토리지 이용!!!
}

function preventClick(e){
	e.preventDefault()
}