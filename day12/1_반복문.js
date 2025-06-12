
/* 

    조건문 : 특정한 조건의 논리 (true/false) 결과에 따라서 명령어들을 처리한다.
    반복문 : 특정한 조건의 논리 결과가 true일 때 특정한 명령어들을 반복 처리한다.

*/

// [1] '안녕하세요' 문자열 5번 출력하시오.
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요."); // 반복되는 코드를 복사/붙여넣기를 하면 된다.
// 문제점 : 100000000번 넘어가면 복붙할 수 있겠니? 관리도 힘듬.

// [2] 1부터 5까지 출력하시오.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);   // 반복되는 코드를 복사/붙여넣기하고 일부 수정하면 됨.
// 문제점 : 100000000번 넘어가면 복붙할 수 있겠니? 관리도 힘듬.

// [3] 반복(중복)되는 코드와 반복되지 않는 코드
// 반복되는 코드 : console.log();
// 반복되지 않는 코드 : 1 2 3 4 5 , 패턴을 찾아보자. 1부터 5까지 1씩 증가.
// 1. 초기(처음) 값         : 1
// 2. 조건(반복문)끝        : <=5
// 3. 증감(증가/감소)식     : +1 또는 ++
// 예] for( 반복변수의초기값 ; 조건문 ; 증감식 ){ 반복되는코드; }

for (let i = 1; i <= 100; i++) { // i가 반복변수
    console.log(`${i}`);
}

// [4] 1부터 10까지 누적합계를 계산하세요.
// (반복문없이)
/*
let 총합계 = 0;
총합계 = 총합계 + 1;
총합계 = 총합계 + 2;
총합계 = 총합계 + 3;
총합계 = 총합계 + 4;
총합계 = 총합계 + 5;
*/
// 반복되는 코드        : 총합계 = 총합계 + <?>
// 반복되지 않은 코드   : let 총합계 = 0; : 패턴없음    , 1 2 3 4 5 : 패턴존재(1부터 5까지 1씩 증가)
// (반복문으로)
let sum = 0;
for (let 더할값 = 1; 더할값 <= 5; 더할값++) {
    // 더할값을 1부터 5이하까지 더할값 1씩 증가하면서 {}를 반복함.
    sum = sum + 더할값;
    console.log(sum);
}

// [5] 구구단의 2단을 출력하시오.
// 반복문없이
/*
console.log( `2 X 1 = ${ 2 * 1}` )
console.log( `2 X 2 = ${ 2 * 2}` )
console.log( `2 X 3 = ${ 2 * 3}` )
console.log( `2 X 4 = ${ 2 * 4}` )
console.log( `2 X 5 = ${ 2 * 5}` )
console.log( `2 X 6 = ${ 2 * 6}` )
console.log( `2 X 7 = ${ 2 * 7}` )
console.log( `2 X 8 = ${ 2 * 8}` )
console.log( `2 X 9 = ${ 2 * 9}` )
*/
// 반복되는 코드 : console.log ( `2 X <?> = ${ 2 * <?> }` )
// 반복되지 않은 코드 : 1 2 3 4 5 6 7 8 9 패턴 : 1부터 9까지 1씩 증가.

for (let times = 1; times <= 9; times++) {
    console.log(`2 X ${times} = ${2 * times} `);
}

// [6] 3개의 정수를 각각 입력받아서 배열에 저장하시오.

let numList = [];
/*
let num1 = parseInt(prompt("정수1 : "));
numList.push(num1);

let num2 = parseInt(prompt("정수2 : "));
numList.push(num2);

let num3 = parseInt(prompt("정수3 : "));
numList.push(num3);
console.log(numList);
*/
// 주의할 점 : 배열에 입력받은 값을 push했기 때문에 num1, num2, num3 변수가 필요한가?

for (let 정수 = 1; 정수 <= 3; 정수++) {
    let num = prompt(`정수${정수}:`)
    numList.push(num);
    console.log(numList);
}
















