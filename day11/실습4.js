/* 문제 1: 삼각형 넓이 계산
밑변과 높이를 각각 prompt 함수로 입력받아, 삼각형의 넓이를 계산하여 콘솔에 출력하는 프로그램을 작성하시오.
삼각형 넓이 공식: 밑변 * 높이 / 2 */

/* let width = Number(prompt( " 밑변의 길이를 쓰시오. "))
let height = Number(prompt( " 높이의 길이를 쓰시오. "))
let triangleArea = ( width * height ) / 2
console.log( `${ triangleArea }`) */

// 격파 완료!!!

/* 문제 2: 섭씨를 화씨로 변환
섭씨 온도를 prompt 함수로 입력받아, 화씨 온도로 변환하여 콘솔에 출력하는 프로그램을 작성하시오.
화씨 변환 공식: ( 섭씨 온도 * 9 / 5 ) + 32 */

/* let C = Number(prompt( " 섭씨 온도를 입력하세요. "));
let F = (C * 9 / 5) + 32;
console.log( `${ F }`)

격파완료! */

/* 문제 9: 할 일 목록에 항목 추가하기
다음과 같이 할 일 목록이 담긴 todoList 배열이 있습니다. prompt를 사용하여 새로운 할 일을 입력받아 배열의 마지막에 추가한 후, 변경된 배열 전체를 콘솔에 출력하는 프로그램을 작성하시오.
초기 배열: let todoList = ['장보기', '과제하기'];
힌트: 배열에 요소를 추가할 때는 .push() 메소드를 사용합니다. */

let todoList = [ "장보기" , "과제하기" ]; // 배열 : [] ,
let todo = prompt( "새로운 할 일을 입력하세요" );
todoList.push( todo );
console.log( todoList );

// todoList = todo;    변수가 하나의 값밖에 저장 못해서 안 됨.