/*

    [ 웹스토리지 ]
        - 웹브라우저(개발자도구) -> 애플리케이션탭 -> 왼쪽사이드메뉴( local/session ) -> 저장용량
        - 도메인(http://127.0.0.1:5501 , https://www.naver.com/) 마다 웹스토리지가 할당된다!

        1. 종류
            (1) sessionStorage  : 세션저장소. 브라우저가 실행되는 동안만 저장, 브라우저를 닫으면 데이터가 자동으로 사라진다.
                - 일회성 정보 저장 , 이전 페이지 기록 등
            (2) localStorage    : 로컬스토리지. 사용자가 직접 삭제하거나 브라우저(캐시) 청소하지 않는 한 데이터 영구 저장.
                - 사용자 설정 정보 , 팝업창(다시보지않기) , 테마 , 자동로그인 등
        2. 라이브러리 사용법
            sessionStorage 객체
            localStorage 객체
            (1) sessionStorage.setItem( '속성명/key' , 값/value );
                -> 속성명/key는 무조건 문자만 가능.
            (2) sessionStorage.getItem( '속성명/key' );
            (3) sessionStorage.removeItem( '속성명/key' );
            (4) sessionStorage.clear();
            * 속성명/key는 무조건 문자만 가능.
            * value는 객체와 배열 타입 저장 불가능. 리터럴(문자열, 숫자, 불리언) 자료만 가능


    [ JSON ] : 자바스크립트 객체 문법의 형식 , JavaScript Object Notation
        * 자바객체를 문자열타입이지만 객체형식/모양으로 표현한 것
        - 3 : 숫자타입 , 숫자모양               vs "3" : 문자열타입 , 숫자모양
        - { age : 40 } : 객체타입 , 객체모양    vs "{age : 40}" : 문자열타입 , 객체모양
        - 왜??? 인터넷상의 데이터통신하는 http는 객체지향이 아니다. 문자열과 바이트 전송 가능. 타입 변환이 필요하다.
        -> 한국( 객체 -> "객체" ) -----http-----> 일본 ( "객체" -> 객체 )
        -> 한국( 객체 -> "객체" ) -----웹스토리지-----> 일본 ( "객체" -> 객체 )
        1. 사용법
            (1) JSON.stringify( 자료 );     : 해당 자료를 문자열 타입으로 반환 자료 -> 문자
            (2) JSON.parse( 자료 );         : 해당 자료를 js타입으로 반환
*/

// [1] 웹스토리지를 제어하는 객체
console.log(sessionStorage);  // 현재 웹스토리지에 저장된 자료 갖는 객체 반환
console.log(localStorage);    // 현재 웹스토리지에 저장된 자료 갖는 객체 반환

// [2] 웹스토리지에 자료 대입
// sessionStorage.setItem( let 변수명 = 값 );
sessionStorage.setItem('name', '유재석');
localStorage.setItem('age', 40);

// [3] 웹스토리지에 자료 호출
console.log(sessionStorage.getItem('name'));    // 유재석
console.log(localStorage.getItem('age'));       // 40
console.log(localStorage.getItem('phone'));     // null , 존재하지 않는 속성명

// [4] 웹스토리지에 자료 삭제
sessionStorage.removeItem('name');              // name 속성 삭제
console.log( sessionStorage );                  // 유재석 따운
localStorage.clear();                           // 전체 삭제
console.log( localStorage );                    // 모든 속성 삭제

// [5] 웹스토리지에 JSON 객체 저장
// sessionStorage.setItem( 'm1' ['유재석' , 40] );  // [X] 대괄호 포함하지 않음
sessionStorage.setItem( 'm1' , JSON.stringify( ['유재석' , 40] ));  // [0] 대괄호 포함한 저장
localStorage.setItem( 'm2' , JSON.stringify( { name : '유재석' , age : 40 }));  // [0] , 중괄호 포함한 저장

// [6] 웹스토리지에 JSON 객체 호출
console.log( sessionStorage.getItem( 'm1') ); // [X] , ["유재석" , 40] , 문자타입
console.log( JSON.parse( sessionStorage.getItem( 'm1'))); // [O] , 배열타입

        // console.log( (3+2)*3 ) 
        // vs
        // let r = 3+2
        // let r2 = r * 3
        // console.log (r2)

let data = localStorage.getItem('m2'); // 객체타입. 로컬스토리지 자료를 꺼내서
let jsonData = JSON.parse( data );  // parse를 통해, JSON으로 파일 변환
console.log( jsonData);



