
// [1] 매개변수 x , 반환값 x
function func1() {
    console.log('fun1 exe');    //정의한 거지 아직 실행 안했어요
}

// [2] 매개변수 o , 반환값 x    , 대표 함수 : console.log( )
function func2(x, y) {
    console.log(`fun2 exe ${x + y} `);
}

// [3] 매개변수 o , 반환값 o    , 대표 함수 : prompt( )
function func3(x, y) {
    console.log(`func3 exe`);
    let result = x + y;
    return result;
}

// [4] 매개변수 x , 반환값 o
function func4() {
    console.log(`func4 exe`);
    return "대한민국";
}

// [5] 호출
func1();                // 매개변수X , 반환값X
func2(2, 3);            // 매개변수O , 반환값X
func3(1, 5);            // 매개변수O , 반환값O(변수에 저장X)
let a = func3(1, 5);   // 매개변수O , 반환값O(변수에 저장O)
func4();                // 매개변수X , 반환값O(변수에 저장O/X 선택)

// [6] 지역변수 : 특정한 { } 안에서 선언된 변수는, 선언된 { } 밖에서 호출/사용 불가능
// -> { } 종료되면 종료되는 { } 내 선언된 모든 메모리는 자동으로 사라짐. <자동> like 가비지 컬렉터
// -> if(){} , for(){} , func1(){}
// ================== 대한민국 ================== //

let 전역변수 = '대한민국'
if (true) {
    // ================== 인천광역시 ================== //
    let 지역변수1 = '인천광역시';
    console.log(전역변수)   // 대한민국 맞음
    console.log(지역변수1)  // 인천광역시 맞음
    for (let i = 0; i < 1; i++) {
        // ================== 부평구 ================== //
        let 지역변수2 = '부평구';
        console.log(전역변수)   // 대한민국 맞음
        console.log(지역변수1)  // 인천광역시 맞음
        console.log(지역변수2)  // 부평구 맞음
    }
    // console.log(지역변수2)  // 부평구 안 됨. 현 위치 인천광역시
}
// console.log(지역변수1)  // 인천광역시 안 됨. 현 위치 대한민국
// console.log(지역변수2)  // 부평구 안 됨. 현 위치 대한민국

// [7] 생각해보기 : 다수의 이름을 입력받아 배열 저장.
// 입력받은 이름 변수 : 지역변수O/전역변수 , 
// 배열 : 지역변수/O전역변수

/*
let nameList = [];
function nameAdd() {
    let name = prompt('이름 : ');
    nameList.push(name);
}

nameAdd();
nameAdd();
console.log(nameList); // [ 입력된값1 , 입력된값2 ]
// 현재 코드흐름이 68번째일 때 변수는 총 몇 개일까요? nameList 1개
// vs 

let name1 = prompt('이름 : ');
nameList.push(name1);
let name2 = prompt('이름 : ');
nameList.push(name2);
*/

// 현재 코드흐름이 75번째일 때 변수는 총 몇 개일까요? nameList, name1, nam2
// 함수로 코드 과다(데이터과다)를 줄일 수 있다.

// [8] HTMl 마크업의 이벤트 속성
function 이벤트함수(){
    console.log('[[ 클릭 ]]')
}
// 1. JS에서 함수 실행하는 방법
이벤트함수();
// 2. HTML에서 JS함수 실행하는 방법
    // <마크업 이벤트 속성명="함수명()"> 



/*
const 대한민국 = [ {서울특별시} , {인천광역시} , {부산광역시} , {경기도} ];
const 서울특별시 = [ {종로구} , {은평구} , {중구} , {마포구} ];
*/







