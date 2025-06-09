
// 2_출력함수.js
// - HTML과 CSS와는 달리 JS는 프로그래밍언어.
// - 명령이나 연산을 기계와 의사소통하는 언어.

10              // 10이라는 리터럴 값이면서 숫자 자료형이다.
3.14            // 3.14라는 리터럴 값이면서 숫자 자료형이다.
"안녕하세요"    // 안녕하세요라는 리터럴 값이면서 문자열 자료형이다.
true            // true라는 리터럴 값이면서 불리언 자료형이다.
[ 10 , 3.14 , "안녕하세요" , true ] // [] 안에 여러개의 리터럴 값을 포함한 배열 자료형이다.

// --- 출력해!!! 명령어 , 함수( 미리 만들어진 코드 ) ---
// [출력함수] : 
// 1. console.log( 출력할 자료 )        : 개발자도구 console 탭에 출력
console.log( 10 )
console.log( "안녕하세요 ")

// 2. alert( 출력할 자료 )              : 브라우저(크롬) 알림 창으로 출력
alert( 3.14 )
alert( true )

// 3. document.write ( HTML문법 )       : document(HTML파일).write(쓰다) : html 문서에 출력
document.write( "<h3> JS에서 작성한 HTML입니다. bless you </h3>" )

// 4. document.querySelector(선택자).innerHTML = HTML : 특정한 선택자 (마크업, CLASS, ID) 를 출력한다.
    // -> innerHTML : <마크업> (여기가 inner) </마크업> : 마크업 사이
document.querySelector( "h3" ).innerHTML = "<h3> 특정한 선택자의 HTML을 작성합니다. "

