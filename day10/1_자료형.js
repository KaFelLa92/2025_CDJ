// p. 513 자료형



// [숫자형] : 정수와 실수로 나누어 구분합니다.
// 1. 정수 : 소수점 없는 숫자
console.log(100)
console.log(typeof 100) // typeof 자료 : 자료의 자료형(종류) 반환 , number

// 2. 실수 : 소수점 있는 숫자 , (부동소수점) 실수는 정밀하게 계산이 불가능함 -> 별도의 정밀한 함수가 필요
console.log(0.1 + 0.2) // 0.30000000000000004 나옴



// [문자열] : '' 또는 "" 묶은 자료
console.log(typeof "100") // string 자료형으로 분류
console.log(typeof "안녕하세요")

// 1. 이스케이프문자 : 기능이 포함된 특수문자
// \ 백슬래시 : 엔터 위에 원화 기호 \
console.log("\\안녕1")    // \\ : 백슬래시 출력
console.log("\'안녕2")    // \' : '작은따옴표 출력
console.log("\"안녕3")     // \" : "큰따옴표 출력
console.log("\n안녕4")     // \n : 줄바꿈 처리
console.log("\t안녕5")     // \t : 탭(들여쓰기) 기능

// 2. 템플릿 리터럴 : `(백틱) 키보드 tab키 위에 , 변수나 식을 넣을 때는 ` ${} `
// 1 + 3 = 4, 연산 결과는 항상 하나.
"안녕" + "자바" // "안녕자바" , 문자열이 포함된  +더하기는 연결연산자로 사용됨.
console.log("안녕" + "자바")      // 연결연산자 이용한 자료 합치기
console.log(`${"안녕"}${"자바"}`)  // ``묶음으로 자료 합치기
// * 변수와 활용
let studentName = 'Kim'
let classRoom = 204
console.log(studentName + "님, " + classRoom + "호 강의실로 입장하세요.")
// 방법1
// 변수명 + "문자열" + 변수명 + "문자열"

console.log(`${studentName}님, ${classRoom}호 강의실로 입장하세요.`) // 방법2 , (1) 백틱으로 전체를 묶는다. (2) ${} 안에 
// 방법2
// `${변수명} 문자열 ${변수명} 문자열`
// 리액트에서도 쓰니까 백틱 사용합니다.



// [논리형] : true(참)이나 false(거짓)의 값을 표현
console.log(true)
console.log(false)



// [undefined와 null]
// 1. undefined : 자료형이 정의되지 않았을 때 데이터 상태
let 과일상자;               // 변수를 선언하고 자료를 대입하지 않았다.
console.log(과일상자);    // 자료 없는 변수 호출하면 undefined
// 2. null : 데이터의 값이 유효하지 않은 상태, 값이 유효하지 않을 때.
let 채소상자 = null;        // 변수에 null이 대입/저장된 상태, 라이브러리 함수들이 null 반환하는 경우 많음
console.log(채소상자);    // 변수가 null일 경우에는 null



// [배열] : 하나의 변수에 값을 여러 개 저장 , ,(쉼표)구분해서 대괄호[] 묶는다.
let season = [ "봄", "여름", "가을", "겨울" ]
    // 인덱스 = 0   ,   1  ,    2   ,   3       , 길이/총개수 = 4  
// -나열 : 열거 하기 위해 하나씩 줄로 쓰는 것 -열거 : 여러가지를 낱낱이 늘어놓은 것

// 1. 인덱스 : 순서대로 배정된 번호 , 번호는 0번 시작

// 2. 배열 호출하는 법
    // (1) 배열 내 모든 요소(값/자료)들이 반환된다.
console.log( season )
    // (2) 배열 내 특정한 인덱스의 요소 반환
console.log( season[0] ) // 봄
console.log( season[1] ) // 여름
console.log( season[2] ) // 가을
console.log( season[3] ) // 겨울
console.log( season[4] ) // undefined, 존재하지 않는 인덱스
    // * [생각해보기1] 
    // 변수개수 : 1개(season) , 리터럴 : 4개(봄여름가을겨울) , 타입개수 : 2개(배열,문자) 변수가 갖는 자료의 수 : 1개([])
    // *** 변수 -> 배열 -> 문자열4개        ** 변수명 [인덱스]
    // *** 사람 -> 가방 -> 핸드폰, 지갑, 책 ** 사람이 가방 열고 핸드폰 꺼냄
    // 배열 안에 배열 들어갈 수 있음.

// 3. 배열 수정
    // (1) 배열 전체 수정 , 변수명 = [새로운배열]
season = [ "유재석" , "강호동" ]
console.log( season )   // ['유재석', '강호동']
    // (2) 배열 내 특정한 요소 수정 , 변수명[인덱스] = 새로운값
season[1] = "신동엽"
console.log( season )   // ['유재석', '신동엽']

// 4. 배열내 요소 추가 , 변수명.push( 새로운값 ) , 뒤에서부터 추가됨.
season.push( "서장훈" )
console.log( season )   // ['유재석', '신동엽', '서장훈']

// 5. 배열내 요소 삭제 , 변수명.splice
season.splice( 0 , 1 )  // 0번 인덱스부터 1개 삭제
console.log( season )

// 6. 배열내 특정 요소 찾기, 변수명.indexOf( 찾을값 ) , 찾을값이 배열내 존재하면 인덱스번호. 없으면 -1 반환
console.log( season.indexOf( "유재석" ))    // -1 없음
console.log( season.indexOf( "신동엽" ))    // 0 , 값이 0번 인덱스에 있음.
let result = season.indexOf( "서장훈" )     
console.log( result )                       // 1










