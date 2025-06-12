/*
문제 1: 과일 목록 관리
다음 과일 목록 배열이 주어져 있습니다.
let fruitList = [ '사과', '바나나' ];
사용자로부터 새로운 과일 이름을 입력받아, 
fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 
존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.

// 배열찾기 함수 .indexOf() , fruitList.indexOf ( 새로운과일명 ) == -1(-1은 존재하지 않는 것)
*/

/*
let fruitList = ["사과", "바나나"];
let fruitName = prompt("과일 이름을 입력하세요.")
if ( fruitList.indexOf(fruitName) != -1 ) {   //.indexOf(문자열변수) != -1 대신 간편하게 .includes(문자열변수) 사용 가능
    console.log(`이미 존재하는 과일입니다.`);
} else {
    fruitList.push( fruitName );
    console.log( fruitList );
}
*/

// includes 함수를 사용하여 배열.includes(프롬프트)로 구문을 짜면, 프롬프트 내용이 배열에 포함되어 있는지 확인할 수 있다.

/* 
문제 2: 성별에 따른 색상 지정
주민등록번호 13자리를 문자열로 입력받습니다.
성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, 
'2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.
*/

// 인덱스 오브 6을 사용해 7번째 숫자를 지정하여, 1또는 3이면 블루를 출력. 2또는 4면 레드를 출력한다. 나머지는 오류로 판단하여 else 구문으로 넘김.

/*
let humanNum    = prompt( " 주민번호 13자리를 -없이 입력하세요. ")
let genderNum   = humanNum[6];  // 배열의 7번째 자리를 지정하는 변수(0부터 셉니다)
if(genderNum == 1 || genderNum == 3) {  // 젠더넘이 1, 3이면 if
    console.log(`blue`);    
} else if(genderNum == 2 || genderNum == 4) { // 젠더넘이 2, 4이면 else if
    console.log(`red`);
} else {
    console.log( `주민번호 13자리를 다시 확인해 입력하세요.` );
}
*/


/*
문제 3: 구매 금액에 따른 할인율 적용
사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
50,000원 이상: 10% 할인
30,000원 이상 50,000원 미만: 5% 할인
10,000원 이상 30,000원 미만: 1% 할인
10,000원 미만: 할인 없음
*/

/*
let money = parseInt(prompt( " 구매한 금액을 숫자로 입력하세요. "));
if(money >= 50000) {
    console.log(`10% 할인되어 ${money * 0.9}원 결제되었습니다.`);
} else if(money >= 30000){
    console.log(`5% 할인되어 ${money * 0.95}원 결제되었습니다.`);
} else if(money >= 10000){
    console.log(`1% 할인되어 ${money * 0.99}원 결제되었습니다.`);
} else{
    console.log(`${money}원 결제되었습니다. 감사합니다.`);
}
*/

/*
문제 4: 월(Month)에 따른 계절 판별
1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
봄: 3, 4, 5월
여름: 6, 7, 8월
가을: 9, 10, 11월
겨울: 12, 1, 2월
만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.
*/

/*
let month = parseInt(prompt(" 1월부터 12월 사이의 월을 숫자로 입력하세요."));

if (month >= 3 && month <= 5) {
    console.log(`봄`);
} else if (month >= 6 && month <= 8) {
    console.log(`여름`);
} else if (month >= 9 && month <= 11) {
    console.log(`가을`);
} else if (month == 12 || month == 1 || month == 2) {
    console.log(`겨울`);
} else {
    console.log(`잘못된 월입니다.`);
}
*/

/*
문제 5: 세 수 중 가장 큰 수 찾기
서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.
-------------------------------------------------------------------------------------------------
*/

/*
let int1 = parseInt(prompt("정수를 입력하세요. "))
let int2 = parseInt(prompt("정수를 입력하세요. "))
let int3 = parseInt(prompt("정수를 입력하세요. "))

if (int1 > int2 && int1 > int3) {
    console.log(`${int1}`)
}else if(int2 > int1 && int2 > int3){
    console.log(`${int2}`)
}else{
    console.log(`${int3}`)
}
*/

/*
문제 6: 윤년 판별기
사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
윤년 조건:
연도가 4의 배수이면서, 100의 배수는 아닐 때
또는 연도가 400의 배수일 때
출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'
*/

/*
let year = parseInt(prompt( "연도를 입력하세요." ));

if (year % 4 == 0 && year % 100 != 0){
    console.log(`${year}년은 윤년입니다.`);
} else if (year % 400 == 0){
    console.log(`${year}년은 윤년입니다.`);
} else {
    console.log(`${year}년은 평년입니다.`);
}
*/

/*
문제 7: 세 수 오름차순 정렬
서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
예시: 17, 4, 8 입력 시 4, 8, 17 출력
*/

/*
let num1 = parseInt(prompt("정수를 입력하세요."));
let num2 = parseInt(prompt("정수를 입력하세요."));
let num3 = parseInt(prompt("정수를 입력하세요."));
let numList = [num1, num2, num3]
let swap;   // 변수를 다시 선언하면서 값을 바꾸기 위해 사용
if (numList[0] > numList[1]) {
    swap = numList[0];  // 
    numList[0] = numList[1];
    numList[1] = swap;
}
if (numList[0] > numList[2]) {
    swap = numList[0];  // 
    numList[0] = numList[2];
    numList[2] = swap;
}
if (numList[1] > numList[2]) {
    swap = numList[1];  // 
    numList[1] = numList[2];
    numList[1] = swap;
}
console.log(`${numList}`);
*/


/*
// (1) 3개의 정수 프롬프트
let num1 = Number(prompt("정수1 : "))
let num2 = Number(prompt("정수2 : "))
let num3 = Number(prompt("정수3 : "))
// (2) 하나의 배열 자료로 표현하여 변수 저장
let numList = [num1, num2, num3]
let temp;       // 임시변수 선언
// (3) 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법 , 한 위치에 하나만 저장 가능.
/*
    A = 10; B = 20;         두 변수간의 자료를 교체하시오.
        A = B;              B의 자료를 A에 대입 * A의 기존 자료는 사라진다. (변수는 하나의 값만 저장 가능)
        A = 20; B = 20;
    해결방안 : 임시변수 만들어서 임시 보관
    A = 10; B =20; TEMP;
        TEMP = A;           TEMP = *10 , A = 10 , B = 20
        A = B;              TEMP = 10 , A = *20 , B = 20
        B = TEMP;           TEMP = 10 , A = 20 , B = *10
*/

// (4) 오름차순 : 두 수 간의 작은 값을 앞에 나열 , 두 수 비교하기.
// 부호 바꾸면 내림차순이 됨.
// A > B 비교하여 A가 더 크면 A와 B의 위치를 변경/스왑

// (5) 조건 : num1 > num2 , num1 > num3 , num2 > num3

/*
if (numList[0] > numList[1]) {  // 첫 번째 값이 두 번째 값보다 크면 스왑
    temp = numList[0];          // 임시변수에 첫 번째 값 넣기
    numList[0] = numList[1];    // 첫 번째 위치에 두 번째 값을 넣고
    numList[1] = temp;          // 두 번째 위치에 임시변수(첫 번째 값) 넣기
}
//else if [X] : 다수 조건에 따른 다수처리해야하므로, 계속 if문을 쓴다.
if (numList[0] > numList[2]) {     // 첫 번째 값이 세 번째 값보다 크면 스왑
    temp = numList[0];          // 임시변수에 첫 번째 값 넣기
    numList[0] = numList[2];    // 첫 번째 위치에 두 번째 값을 넣고
    numList[2] = temp;          // 두 번째 위치에 임시변수(첫 번째 값) 넣기
}
if (numList[1] > numList[2]) {     // 두 번째 값이 세 번째 값보다 크면 스왑
    temp = numList[1];          // 임시변수에 첫 번째 값 넣기
    numList[1] = numList[2];    // 첫 번째 위치에 두 번째 값을 넣고
    numList[2] = temp;          // 두 번째 위치에 임시변수(첫 번째 값) 넣고
} console.log( `${numList}` );
*/

/*
문제 8: 가위바위보 게임
두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
규칙:
가위(0)는 보(2)를 이깁니다.
바위(1)는 가위(0)를 이깁니다.
보(2)는 바위(1)를 이깁니다.
출력:
플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.
*/

/*
let play1 = prompt("가위는 0, 바위는 1, 보는 2입니다. ㄱㄱ")
let play2 = prompt("가위는 0, 바위는 1, 보는 2입니다. ㄱㄱ")

if (play1 == play2) {
    console.log("무승부")
} else if (play1 == (play2 + 1) % 3){
    console.log("플레이어1 승리")
} else {
    console.log("플레이어2 승리")
}
*/

// 서로 같으면 비김
// 이기는 수 0 = 2 1 = 0 2 = 1


// 조건 : 플레이어1이 이기는 경우의 수 3개, 지는 수 3개, 비기는 수 3개 = 총 9개
/* 

    (방법1 : 모든 경우의 수 판단)
    이기는 수   : 가위 = 보 , 바위 = 가위 , 보 = 바위 / 0 = 2 , 1 = 0 , 2 = 1
    비기는 수   : 가위 = 가위 , 바위 = 바위 , 보 = 보 / 0 = 0 , 1 = 1 , 2 = 2
    지는 수     : 가위 = 바위 , 바위 = 보 , 보 = 가위 / 0 = 1 , 1 = 2 , 2 = 0
    (방법2 : 모든 경우의 수 패턴 찾기)
        1. 두 수가 같으면 무승부이다.
        0 == (2+1)%3
        1 == (0+1)%3
        2 == (1+1)%3
        1을 더하고 3으로 나머지 계산을 하니까 이기는 수가 나옴.


*/

/*
let play1 = parseInt(prompt("가위바위보 시작! 0(가위), 1(바위), 2(보)"));
let play2 = parseInt(prompt("가위바위보 시작! 0(가위), 1(바위), 2(보)"));
// 방법1
if (play1 == play2) {
    console.log(`무승부`);
} else if ((play1 == 0 && play2 == 2) || (play1 == 1 && play2 == 0) || play1 == 2 && play2 == 1) {    // 플레이어1 이기는 수
    console.log(`플레이어1 승리`)
} else {
    console.log(`플레이어2 승리`)
}

// 방법2
if (play1 == play2) {
    console.log(`무승부`);
} else if ((play1 == (play2 + 1) % 3)) {    // 플레이어1 이기는 수
    console.log(`플레이어1 승리`)
} else {
    console.log(`플레이어2 승리`)
}
*/

/*
문제 9: 주차 차량 위치 검색
주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 
두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 
locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 
만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.
*/

/* 내가 푼 방식
let carArray = ['250어7142', '142가7415', '888호8888'];
let locationArray = ['A1', 'B3', 'C2'];
let index = prompt("당신의 차량번호를 입력하세요.");

if (index == carArray[0]) {
    console.log(`주차 위치는 ${locationArray[0]}입니다.`)
} else if (index == carArray[1]) {
    console.log(`주차 위치는 ${locationArray[1]}입니다.`)
} else if (index == carArray[2]) {
    console.log(`주차 위치는 ${locationArray[2]}입니다.`)
} else {
    console.log(`차량이 존재하지 않습니다.`)
}
*/

// GPT의 건드림
/*
let carArray = ['250어7142', '142가7415', '888호8888'];
let locationArray = ['A1', 'B3', 'C2'];
let carNum = prompt("당신의 차량번호를 입력하세요.");
let idx = carArray.indexOf(carNum);  // carArray에서 carNum의 인덱스를 찾음

if (idx !== -1) {
    console.log(`주차 위치는 ${locationArray[idx]}입니다.`);
} else {
    console.log("차량이 존재하지 않습니다.");
}
*/

/*
문제 10: 수강 신청 목록에서 과목 제외하기
현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
let courseList = ['수학', '영어', '과학', '국어'];
사용자로부터 제외하고 싶은 과목명을 입력받아, 
courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 
만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오. 
*/

//    2. 변수명.splice( 인덱스 , 개수 )       : 배열내 지정한 인덱스부터 개수 요소 삭제 

let courseList = ['수학', '영어', '과학', '국어'];
let banPick = prompt("제외하고 싶은 과목을 선택하세요.")

//수학 0 영어 1 과학 2 국어 3

let index = courseList.indexOf(banPick); // 인덱스 변수 지정해서 인덱스오브로 밴픽 값 받기

if (index != -1) {
    courseList.splice(index, 1);
    console.log(`변경된 수강 목록 : ${courseList}`);
} else {
    console.log("해당 과목은 신청 목록에 없습니다.")
}