// [ 실습11 ]
/*
실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요. isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.
(1)매개변수         : age
(2)리턴값           : 20세 이상 true, 미만 false
(3)처리할 명령어    : isAdult 결과 콘솔 출력
*/

/*
function isAdult(age) { // 함수 정의/선언
    if (age >= 20) {
        return true;
    } else {
        return false;
    }
}

let result1 = isAdult(25);
console.log(result1);
let result2 = isAdult(17);
console.log(result2);
*/

/*
실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해 보세요.
const numbers = [10, 20, 30, 40, 50];
(1)매개변수     : [숫자]
(2)리턴값       : sum
(3)처리할명령어 : 
*/


/*
const numbers = [10, 20, 30, 40, 50];

function sumArray(numbers) {
    let sum = 0;
    for (i = 0; i <= numbers.length - 1; i++) {
        sum += numbers[i];
        //       return sum; 리턴값이 for문 안에서 반복이 멈추면 전역에 대응할 수 없다.
    }
    return sum;
}

// sumArray(numbers); // sum이 아닌 numbers를 세야한다.
// sumArray(numbers); 반환값 변수 저장 안 했으면 이렇게 호출
let sum = sumArray(numbers);    // 반환값 변수에 저장했으면 이렇게 호출
console.log(sum)
*/


/*
실습 3: 가장 긴 단어 찾기
문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
(1)매개변수     : 문자열 배열(words)
(2)리턴값       : for문으로 가장 긴 단어를 반환
(3)처리할명령어 : 딱히?
*/

/*
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
let longist = "";   // 긴 단어 넣을 변수 만들기

function findLongestWord(array) {
    for (i = 0; i <= array.length - 1; i++) {
        let word = array[i]
        if (word.length > longist.length) {   // 배열[인덱스]가 단어삽입[인덱스]보다 크면
            longist = words[i];                 // 배열[인덱스]에 있던 단어를 변수에 넣는다
        }
    }   // for end
    return longist;                             // 리턴값 longist
}   // function end

let result3 = findLongestWord(words)
console.log(result3);
*/

/*
실습 4: 게임 점수 관리하기
let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.
(1)매개변수     : X
(2)리턴값       : 해야함 (두 함수 값을 전역으로 빼내 최종 점수 입력해야하므로)
(3)처리할명령어 : gainScore 3번, loseScore 1번 호출 후 최종 점수 콘솔 출력
*/

/*

    - 함수 안에서 함수 호출이 가능하다.
    function 함수A( ){
        함수B( );
    }
    function 함수B( ){
    }

    - 재귀함수 : 함수 안에서 현재 함수를 재호출
    function 함수A( ){
        함수A( );
    }
        function a( num ){          // 3
            num--;                  // num = 3 -> num = 2
            if( num < 0 ) return;   
            a( num );               // a( 2 )
            return;
        };
        a( 3 );

*/

let userScore = 0; // 전역변수

function gainScore() {
    userScore += 10;
    return userScore;   // 지역변수에서 받은 전역변수를 리턴값으로 변경하여 다시 전역에 영향 주도록함
}

function loseScore() {
    userScore -= 5;
    return userScore;   // 지역변수에서 받은 전역변수를 리턴값으로 변경하여 다시 전역에 영향 주도록함
}

gainScore();
gainScore();
gainScore();
loseScore();
console.log(userScore);

/*
실습 5: 최고 점수 학생 찾기
전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];
(1)매개변수     : X
(2)리턴값       : score가 가장 높은 학생의 이름
(3)처리할명령어  : score가 가장 높은 학생의 이름 찾기

*/

const students = [
    { name: '김철수', score: 85 },
    { name: '이영희', score: 92 },
    { name: '박민준', score: 78 }
];

function findTopStudent() {
    let elite = '';
    let topScore = 0;
    for (let i = 0; i <= students.length - 1; i++) {
        let student = students[i]
        if (student.score > topScore) {
            topScore = student.score
            elite = student.name
        }
    } // for end
    return elite;
}   // func end

let elite = findTopStudent();
console.log(elite)


/*
실습 6: 상품 목록 페이지 만들기 (참고: 예제 6, 7, 8, 12)
전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시하는 renderProducts 함수를 만드세요.
각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];
(1)매개변수     : 
(2)리턴값       : html 지역변수
(3)처리할명령어 : 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시
*/



const products = [
    { name: '노트북', price: 1200000, stock: 5 },
    { name: '모니터', price: 350000, stock: 12 },
    { name: '키보드', price: 80000, stock: 25 }
];

function renderProducts() {
    let html = '';  // 함수 안에 html써줘야함. 밖에 쓰면(전역변수) 함수 내에 영향을 못 줌.

    for (i = 0; i <= products.length - 1; i++) {
        product = products[i]
        html += `<div> <h4> ${product.name} </h4> <p> ${Number(product.price)} </p> <p> ${Number(product.stock)} </p>`
    } 
    return html;
}

let html = renderProducts();
document.write(html);



/*
실습 7: 간단한 계산기
num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)
(1)매개변수     : num1, num2, operator
(2)리턴값       : 
(3)처리할명령어 : 
*/



/*
실습 8: HTML 리스트(ul, li) 동적 생성
todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
let todoList = ['장보기', '운동하기']
*/

/*
실습 9: 입장료 계산 함수
임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
8세 미만: "무료"
8세 이상 19세 이하: "5,000원"
20세 이상: "10,000원"
계산된 가격 문자열을 반환(return)하시오.
*/




