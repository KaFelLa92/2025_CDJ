// 문제 1 시작

let result1 = prompt( " 성함을 작성해주세요. " );
let result2 = prompt( " 원하는 음료를 작성해주세요. " );
let result3 = prompt( " 음료 수량을 작성해주세요. " );

console.log( "주문접수")
console.log( "이름")
console.log( result1 );
console.log( "메뉴")
console.log( result2 );
console.log( "수량")
console.log( result3 );

// 문제 1 종료

// 문제 2 시작

let userName = prompt( "성함을 작성해주세요. ")
let exociseType = prompt( "오늘 하신 운동을 알려주세요. ")
let exociseTime;

while (true) {
  let input = prompt("운동 시간을 '분' 단위로 숫자만 작성해주세요. 예: 40");

  // 입력이 null이거나 숫자가 아니면 다시 입력 요청
  if (input === null) {
    alert("입력을 취소하셨습니다.");
    exociseTime = null;
    break;
  }

  // 숫자 변환 시도
  exociseTime = Number(input);

  if (!isNaN(exociseTime) && input.trim() !== "") {
    break; // 숫자가 맞으면 탈출
  } else {
    alert("숫자만 입력해주세요!");
  }
}

if (exociseTime !== null) {
let burncalorie = exociseTime * 7 // 칼로리 계산 exociseTime * 7

console.log( "[운동 기록]");
console.log( "이름");
console.log( userName );
console.log( "운동종류" );
console.log( exociseType );
console.log( "운동시간" );
console.log( exociseTime + "분" );
console.log( "칼로리" );
} else {
console.log( burncalorie + "kcal" );
}
