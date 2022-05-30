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
var i = 0, k = 0, g = 0, m;
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