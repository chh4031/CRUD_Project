/*
temp = location.href.split("?");
data = temp[1].split(":");
a1 = data[0];
a2 = data[1];

console.log(a1, a2);
이 방법은 너무 href가 링크 이동이라 관리자 페이지로 바로 이동되는 심각한 문제가 발생함...
*/

//로컬 스토리지를 이용해 키값으로 값을 받으면 된다!!!
/*var pt = 1;

var admin_value = document.getElementById('admin_value');
var a1 = localStorage.getItem('ky1');
var new_div = document.createElement('div');

new_div.innerHTML = pt+'<div>' + a1 + '</div>';
admin_value.appendChild(new_div);

pt++;
*/
/*
let a1 = localStorage['keys'];

let data = JSON.parse(a1);

data['name']
data['id']
data['pw']
*/
var admin_value = document.getElementById('admin_value');
var search_value = document.getElementById("search_value");
var admin_search = document.getElementById("admin_search");
var update_id = document.getElementById("update_id");
var real_submit = document.getElementById("real_submit");
 
var keynum = 0;
var control = 0;
var arrarr_sub = [];

var i = 0, k = 0, g = 0, m = 0, n = 0;
let savearr = [];
k = localStorage.getItem('k');//k값 즉 i의 값 받기

for(g = 0;g < k;g++){
    var a1 = [];
    a1[i] = localStorage.getItem(i);
    //console.log(a1[i]);

    //admin_value.innerHTML += '<div>' + a1[i] + '</div>';

    k = localStorage.getItem('k');
    savearr[i] = a1[i];

    i++;

    console.log('k값'+k);
    console.log('i값'+i);
    console.log('데이터가 들어간 배열값'+a1);
}
console.log(savearr);

function Storageclear(){
    localStorage.clear();
}

function Storagecomfirm(){
    console.log(localStorage);
}

function Storagelist(){
    var locallist = localStorage.length;
    admin_value.innerHTML = "";

    for(m = 0; m < locallist-2; m++){
        admin_value.innerHTML += '<div>' + localStorage.getItem(m) + '</div>';
    }
}

function admin_search1(){
    var locallist = localStorage.length;
    for(n = 0;n < locallist-2; n++){
        var keyvalue1 = localStorage.getItem(n);
        if(admin_search.value == keyvalue1){
            console.log('true');
            keynum = n;
            search_value.innerHTML=keyvalue1;
            break;
        }else{
            search_value.innerHTML="일치하는 값 없음.";
        }
    }
}

function ok(){
    control = 0;
    if(search_value.innerText == "일치하는 값 없음."){
        alert('잘못된 수정 입니다.');
    }else{
        console.log('key : ' + n);
        update_id.value = search_value.innerText;
        control = 1;
    }
}

function realok(){
    console.log(update_id.value);
    if(control == 1){
        localStorage.setItem(n, update_id.value);
        control = 0;
    }else{
        alert("잘못된 제출입니다.");
    }
}

function removeok(){
    if(control == 1){
        localStorage.removeItem(n);
        localStorage.setItem(n, "null"+n);
        control = 0;
    }else{
        alert("잘못된 삭제 입니다.")
    }
}


/*
function keyvalue(){
    for(n = 0;n < locallist-1; n++){
        var keyvalue1 = localStorage.getItem(n);
        return keyvalue1;
    }
}
*/