
// p. 519
// 1. 자동형변환
    // (1) 문자열 숫자에 곱하기 1을 하면, 문자열 숫자가 숫자형 숫자로 변환.
let input = prompt("숫자를 입력하세요.")    // 5 , prompt함수는 문자열 반환함
console.log( typeof input )                 // string
let result = input * 10                     // "5" * 10 , *(곱하기 연산자)
console.log ( typeof result )               // number 

    // (2) 문자열 + 숫자형일 경우 문자열로 변환 +(연결 연산자)
let one = "20"  // string
let two = "10"  // number
console.log ( one + two )   // "20" + "10" 30[X] 아니고 "2010" 된다.
    // --
    let time = prompt('사용(분) 입력하세요');   // 8을 입력했을 경우
    console.log( time * 1000 )                  // 8000
    console.log( time + 1000 )                  // 81000

// 2. 자료형 변환 함수
    // (1) Number("문자열")     : 숫자형 타입 변환 함수
console.log( Number("10") ) ;   // "10" -> 10 변환
console.log( Number("10ABC"))   // "10ABC" -> 변환불가능 , NaN (Not a Number)
    // (2) *parseInt( )         : 정수 숫자 변환 함수
console.log( parseInt("123"))   // 123
console.log( parseInt("123.45"))// 123 , 소수점 잘림
console.log( parseInt("123ABC"))// 123 , 문자열 잘림
    // (3) parseFloat( )        : 실수 숫자 변환 함수
console.log( parseFloat('123.45')) // 123.45 소수점까지 나옴
    // (4) String               : 문자열 변환 함수
console.log( String(123))       // 숫자형을 문자열로 출력
console.log( Number )

// 생각해보기1 : 국어 점수와 수학 점수를 prompt로 입력받아 더한 결과를 console.log에 출력하시오.

let koreanScore = Number(prompt( "국어 점수를 입력하세요." ));
let mathScore = Number(prompt( "수학 점수를 입력하세요." ));
let totalScore = koreanScore + mathScore;

console.log(`총합계 : ${totalScore}`);

/*
console.log("국어 점수 : " + (Number (koreanScore)) + "점")
console.log("수학 점수 : " + (Number (mathScore)) + "점")
console.log(`총합계 : ${totalScore} + "점" `) 
*/

// 생각해보기2 : 이름과 나이(숫자)를 prompt로 입력받아 document.write 이용하여 <h3> 마크업으로 출력하시오.
// 출력예] <h3> 강호동(45) </h3>

let named = prompt(" 성함 입력해주세요. ");
let age = Number( prompt(" 나이를 입력해주세요. ") );
document.write(`<h3> ${ named } ( ${ age } ) </h3>`);



