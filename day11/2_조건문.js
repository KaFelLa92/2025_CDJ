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

/* 
시트리스트에서 O일 경우 예약 불가
X일 경우 예약 성공
인덱스 0~2 에서 문자열 O와 X를 선별할 수 있는 기능이 필요

시트리스트의 차이점 확인
좌석 번호를 받기
if문에서 seatList[indexNumber] 입력 후, 조건 만족하는지 확인하여 처리.
*/

/*
let seatList = ["O", "X", "O"]; // (1) 배열은 여러 자료를 하나의 자료로 묶는 것.
let reserveIndex = Number(prompt(" 예약할 좌석 번호를 입력하세요 "));
// reserveIndex를 index번호로 가정하는 것. 
if (seatList[reserveIndex] == "X") {
    console.log(`예약 성공`);
}
else if (seatList[reserveIndex] == "O") {
    console.log(`예약 불가`)
}
else {
    console.log(`없는 좌석입니다.`);
}
*/


/* 문제 6: 점수에 따른 상품 지급
게임 점수를 정수로 입력받아, 
아래 기준에 따라 지급될 상품을 출력하는 프로그램을 작성하시오.
900점 이상: 'A급 경품'
700점 이상 900점 미만: 'B급 경품'
500점 이상 700점 미만: 'C급 경품'
500점 미만: '참가상'
 */

/*
let score = parseInt(prompt(" 점수 입력하세요 "))
if (score >= 900) {
    console.log ("A급 경품")
}else if(score >= 700) {
    console.log ("B급 경품")    // if가 아닌 else if라서 && score < 900을 생략할 수 있다. 
}else if(score >= 500) {
    console.log ("C급 경품")
}else{
    console.log ("참가상")
}
*/

/*
문제 7: 사용자 역할에 따른 접근 권한 부여
사용자 역할(role)을 문자열로 입력받습니다. 
역할에 따라 다른 접근 권한 메시지를 출력하는 프로그램을 작성하시오.
admin: '모든 기능에 접근할 수 있습니다.'
editor: '콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.'
viewer: '콘텐츠 조회만 가능합니다.'
그 외 역할: '정의되지 않은 역할입니다.'
*/

/*
let role = prompt(" 당신의 역할을 입력하세요. ")
if (role == "admin" || role == "관리자") {
    console.log("모든 기능에 접근할 수 있습니다.");
} else if (role == "editor" || role == "편집자" || role == "매니저") {
    console.log("콘텐츠 수정 및 생성 기능에 접근할 수 있습니다. ");
} else if (role == "viewer" || role == "시청자" || role == "열람자") {
    console.log(`콘텐츠 조회만 가능합니다. `);
} else {
    console.log("정의되지 않은 역할입니다.");

}
*/


/* 문제 8: 나이에 따른 놀이공원 입장료 계산
사용자의 나이를 정수로 입력받아, 아래 기준에 따라 입장료를 출력하는 프로그램을 작성하시오.
8세 미만: '무료'
8세 이상 19세 이하: '5,000원'
20세 이상 65세 미만: '10,000원'
65세 이상: '3,000원'
*/

/*
let age = parseInt(prompt("당신의 나이를 입력하세요. "))
if (age < 8) {
    console.log(`무료`);
} else if (age <= 19) {
    console.log(`5,000원`);
} else if (age < 65) {
    console.log(`10,000원`);
} else { console.log(`3,000원`); }
*/

/*
문제 9: 성적 등급 계산
하나의 점수를 입력받아 다음 조건에 따라 등급을 출력하는 프로그램을 작성하시오.
90점 이상: 'A등급'
80점 이상 90점 미만: 'B등급'
70점 이상 80점 미만: 'C등급'
70점 미만: '재시험'
*/

/*
let score = parseInt(prompt( " 점수 : " ));

if (score >= 90) {
    console.log(`${score}점을 맞으셨군요! 축하드립니다! A등급입니다 :)`);
} else if (score >= 80) {
    console.log(`${score}점을 맞으셨군요! 축하드립니다! B등급입니다 :)`);
} else if (score >= 70) {
    console.log(`${score}점을 맞으셨군요! 축하드립니다! C등급입니다 :)`);
} else {
    console.log(`${score}점은 재시험입니다 :(`);
}
*/

/* 문제 10: 음료 자판기
다음 음료 목록 배열이 주어져 있습니다.
음료 이름 목록 : let drinkNames = ['콜라', '사이다', '커피'];
음료 가격 목록 : let drinkPrices = [1000, 1000, 1500];
사용자로부터 원하는 음료(0, 1, 2)의 번호를 입력받아, 
해당하는 음료 이름과 가격을 '선택하신 음료는 [음료이름]입니다. 가격은 [가격]원입니다.' 
형식으로 출력하세요. 만약 목록에 없는 번호를 입력하면 '없는 상품입니다.'라고 출력하는 프로그램을 작성하시오.
 */


let drinkNames = ['콜라', '사이다', '커피'];
let drinkPrices = [1000, 1000, 1500];
let drink = parseInt(prompt(` 콜라 0번 사이다 1번 커피는 2번입니다. 골라주세요. `));
if (drink >= 0 && drink < 3 ) { // 3대신 drinkNames.length 넣어도 됨
    console.log(`선택하신 음료는 ${drinkNames[drink]}입니다. 가격은 ${drinkPrices[drink]}입니다.`);
} else {
    console.log(`없는 상품입니다.`);
}







