/*
temp = location.href.split("?");
data = temp[1].split(":");
a1 = data[0];
a2 = data[1];

console.log(a1, a2);
이 방법은 너무 href가 링크 이동이라 관리자 페이지로 바로 이동되는 심각한 문제가 발생함...
*/

//로컬 스토리지를 이용해 키값으로 값을 받으면 된다!!!
var a1 = localStorage.getItem('ky1');
console.log(a1);