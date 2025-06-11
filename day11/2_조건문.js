/*
문제 1: 합격/불합격 판정
두 개의 점수를 입력받아 총점을 계산하세요. 총점이 90점 이상이면 '성공'을, 
그렇지 않으면 '실패'를 출력하는 프로그램을 작성하시오.
 */
// (1) 두 수를 입력 받아 각 변수에 저장
// (2) 각 변수의 값을 더해 총점 구한다.
// (3) 만약 총점이 90점 이상이면 
// (4) 참 : '성공' 출력한다.
// (5) 거짓 : '실패' 출력한다.

/* 조건문으로 풀기
let score1 = parseInt(prompt("첫 번째 점수를 입력하세요."));
let score2 = parseInt(prompt("두 번째 점수를 입력하세요."));
if (score1 + score2 >= 90) {
    console.log("성공"); }
else { console.log("실패"); }
*/

/* 삼항연산자로 풀기
let score1 = Number(prompt ( "점수 1 : "));
let score2 = Number(prompt ( "점수 2 : "));
let sum = score1 + score2;
let result = sum >= 90 ? "성공" : "실패";
console.log( `${result}` );
*/

/* 
문제 2: 두 수 중 더 큰 수 찾기
서로 다른 두 개의 정수를 입력받아, 더 큰 수를 출력하는 프로그램을 작성하시오.
*/

// 조건문으로 풀기
/*
let int1 = parseInt(prompt(" 숫자를 입력하세요 "));
let int2 = parseInt(prompt(" 숫자를 입력하세요 "));
if(int1 > int2){ console.log( `"더 큰 수 : " ${int1}` ); }
else if(int1 < int2){ console.log( `"더 큰 수 :" ${int2}` ); }
else{ console.log( "비겼다!" ); }
*/

/* 삼항연산자로 풀기
let int1 = Number(prompt( " 숫자 1 : " ));
let int2 = Number(prompt( " 숫자 2 : " ));
let result = int1 > int2 ?  `${ int1 }` : `${ int2 }`;
console.log(`${result}`)
*/

/* 
문제 3: 로그인 시스템
사용자로부터 아이디와 비밀번호를 입력받습니다. 
아이디가 'admin'이고 비밀번호가 '1234'와 모두 일치하면 '로그인 성공'을, 
하나라도 다르다면 '로그인 실패'를 출력하는 프로그램을 작성하시오.
*/

/* 조건식으로 풀기
let id = prompt( " 아이디 : ");
let pw = prompt( " 비밀번호 : ");
if(id == "admin" && pw == 1234 ) { console.log( "로그인 성공 "); } // 문자열 큰따옴표 넣어라
else{ console.log( "로그인 실패" )};
*/

/* 삼항연산자로 풀기 
let id = prompt( " 아이디 : ");
let pw = prompt( " 비밀번호 : ");
let result = id == "admin" && pw == "1234" ? "로그인 성공" : "로그인 실패";
console.log(`${ result }`);
*/

/* 문제 4: 비밀번호 보안 등급 확인
사용자로부터 비밀번호를 문자열로 입력받아, 길이에 따라 보안 등급을 출력하는 
프로그램을 작성하시오.
힌트 : 해당 변수 뒤에 .length를 붙여 비밀번호의 길이를 숫자로 구합니다.
8자 미만: '보안 등급: 약함 (8자 이상으로 설정해주세요.)'
8자 이상 12자 미만: '보안 등급: 보통'
12자 이상: '보안 등급: 강함' 
*/

/* 풀이
let pw = prompt( " 비밀번호를 입력하세요. " )
let length = pw.length;
if(length >= 12) { console.log( "보안 등급 : 강함"); }
else if(length >= 8) { console.log( "보안 등급 : 보통"); }
else{ console.log( "보안 등급 : 약함(8자 이상으로 설정해주세요.)" )}
console.log( "텍스트 길이는 " + `${length}` + " 자 입니다." );
*/

/* 문제 5: 좌석 예약 시스템
3개 좌석의 예약 상태를 나타내는 배열이 있습니다. ('O': 예약 완료, 'X': 예약 가능)
let seatList = [ 'O', 'X', 'O' ];
사용자로부터 예약할 좌석의 인덱스 번호(0, 1, 2)를 입력받아, 
해당 좌석이 예약 가능('X')하면 '예약 성공'을, 이미 예약된 좌석('O')이면 
'예약 불가'를 출력하는 프로그램을 작성하시오.
 */




