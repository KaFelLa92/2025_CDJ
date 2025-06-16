// [실습8]
/*  

    문제 1 : prompt로 제품 정보 객체 만들기
    prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'를 순서대로 입력받습니다.
    입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오. 

*/

// 1. 프롬프트
let pname = prompt("제품명 : ")
let pprice = prompt("가격 : ")
let pcompany = prompt("제조사 : ")
// (방법1) : 배열일 때
const array = [pname , pprice , pcompany]
// (방법2) : 객체일 때
const obj1 = { 'pname' : pname , 'pprice' : pprice , 'pcompany' : pcompany };
const obj2 = { pname , pprice , pcompany };

console.log(array)
console.log(obj1)
console.log(obj2)