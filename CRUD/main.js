var user_name = document.getElementById("user_name");
var user_id = document.getElementById("user_id");

var admin = document.getElementById("admin_value");

var i = 0;
var k = 0;

var arrarr = [];
arrarr = arrarr.concat(JSON.parse(localStorage.getItem('z')));


function bringvalue(){
    var user_name_value = user_name.value;
    //var user_id_value = user_id.value;
    console.log(user_name_value);
    //console.log(user_id_value);
    //location.href="admin.html?" + user_name_value + ":"+ user_id_value 이방식 안씀
    
    /* 오브젝터 형식으로 받아서 여러개 값을 받을 때 사용할거
    localStorage['keys'] = JSON.stringify({
        'name': '이름',
        'id': '아이디',
        'pw': '비밀번호'
    })

    localStorage['name']
    localStorage['id']
    localStorage['pw']
    */
    //console.log(arrarr.includes(user_name_value)); 이거 true값 반환
    if(arrarr.includes(user_name_value)){
        alert("값이 겹칩니다.");
    }else{
        arrarr.push(user_name_value);

        if(localStorage.getItem('k')!=0){
            i = localStorage.getItem('k');
            localStorage.setItem(i++, user_name_value);
            localStorage.setItem('k',i);
        }else{
            localStorage.setItem(i++, user_name_value);//i번째 이름값을 보내기
            localStorage.setItem('k',i);//k라는 이름의 i값을 보내기
        }
        localStorage.setItem('z', JSON.stringify(arrarr));
    }

    //로컬 스토리지 이용!!!
    //location.href='main.html';
    console.log(i);
}

function preventClick(e){
	e.preventDefault()
}