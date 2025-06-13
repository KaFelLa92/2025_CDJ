/*
문제 1: 배열에서 최댓값 찾기
주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)
let numbers = [23, 5, 67, 12, 88, 34];
*/


//  내 논리 방식 : 인덱스 값을 서로 비교해서, 작은 수를 스플라이스 하고 큰 수만 남긴 후 출력한다.

/*
let numbers = [23, 5, 67, 12, 88, 34];

for (index = 0; index <= numbers.length - 1; index++) {
    if (numbers[0] > numbers[1]) {
        numbers.splice[1]
    } else if (numbers[1] > numbers[0]) {
        numbers.splice[0]
    } else {
        console.log(numbers);
    }
}

*/

// GPT 추천 : 숫자 배열 속에서 찾기
/*
let numbers = [23, 5, 67, 12, 88, 34];
let max = numbers[0];   // 첫 점수를 가장 큰 수로 기억 / 저장
또는 let max = 0;

if (max < numbers[1]) { max = numbers[1] } 5회 반복하면 나옴
반복문으로 쓰자

for (index = 0; index <= numbers.length - 1; index++) {
    if (numbers[index] > max) {
        max = numbers[index];
    }
}
console.log(`제일 큰 수는 ${max}입니다.`)
*/


/*
문제 2: 별 찍기 (기본 역삼각형)
for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
            라인    별          별 숫자
*****       1       5           6 - line
****        2       4
***         3       3
**          4       2
*           5       1
*/

/*  (1) 단*마다 곱*을 출력하는가? 곱마다 단을 출력하는가.
    (2) 행 마다 별 출력 또는 별 마다 행 출력.
    ---> 표 ( 좌표[행/열] ) :



*/

/*
let output = "";
for (let line = 1; line <= 5; line++) {

    for (let star = 1; star <= 6 - line; star++) {
        output += "*";
    }
    output += "\n";
    // \n은 이스케이프 문자 ( 줄바꿈 처리)
}
console.log(output);
*/


/*
문제 3: 배열에서 특정 문자 찾기 (break 활용)
다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 
해당 사용자의 이름을 출력하고 반복문을 종료하시오.
let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
힌트: 문자열의 .indexOf() 메소드를 사용하세요.
*/

/*
let userNames = ["김하준", "이서아", "박솔민", "최도윤"];
for (let index = 0; index <= userNames.length - 1; index++) {
    let name = userNames[index]; // index 번째 이름 꺼낸다
    // 이름에 솔 포함된 console.log( name );
    if (name.indexOf("솔") != -1) {
        console.log(`${name}`)
    } // for end
}
*/


/*
문제 4: 2차원 배열의 모든 요소 출력하기
다음과 같은 2차원 배열(좌석표)이 있습니다. 
중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
*/

/* 
        배열
        컨테이너        요소
        0               A1
        0               A2
        0               A3
        1               B1
        1
        1

        출력 순서 행부터 열로
        A1      A2      A3      B1      B2      B3      C1      C2      C3

*/

/*
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
let seat1 = seatLayout[0] // ['A1', 'A2', 'A3']
let seat2 = seatLayout[1] // ['B1', 'B2', 'B3']
let seat3 = seatLayout[2] // ['C1', 'C2', 'C3']

for (let index = 0; index <= seatLayout.length - 1; index++) {
    // 행 출력
    let row = seatLayout[index];
    // console.log(row)
    // 열 출력
    for (let j = 0; j <= row.length - 1; j++) {
        let column = row[j];
        console.log ( column );
    }
}
    */



/*
문제 5: 배열의 중복 요소 제거하기
주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
힌트: 새로운 배열을 만들고, for 반복문으로 기존 배열을 순회하며 새로운 배열에 해당 요소가 없을( .indexOf() == -1 ) 때만 추가(push())합니다.
*/

/*      행   1 5 2 3 5 1 4 2        numbers
            5 2  
            2 3
            3
            5
            1
            4
            2
*/


/* 스플라이스를 이용한 실패 풀이
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];


for (let index = 0; index <= numbers.length - 1; index++) {
    // new와 numbers[index] 값이 똑같을 때, 하나 썰어야함
    for (let numbers2 = 0; numbers2 <= numbers.length - 1; numbers2++) {
        if (numbers2 == numbers[index]) {
            numbers.splice(index , 1);
        }
    }console.log(numbers)
}
*/

/* 

새로운 배열 자료에 대응하는 변수를 만든다.
기존 자료 * 새로운 배열 자료 대입하면서 인덱스에 포함되는 값 있는지 확인
확인된 수를 새로운 배열에 집어넣는다.
확인된 수가 없을 때까지 반복

*/

/*
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
let secNumbers = [];

for(let index = 0; index <= numbers.length - 1; index++ ){
    if(secNumbers.indexOf(numbers[index]) == -1) {
        secNumbers.push(numbers[index]);
    }
}
console.log(secNumbers);
*/



/*
문제 6: 버블 정렬 (Bubble Sort) 구현하기
주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
let numbers = [5, 3, 4, 1, 2];
힌트: 중첩 for 반복문을 사용하며, 이웃한 두 요소를 비교하 위치를 바꿉니다.
*/

/*

    인덱스의 숫자가 다음 인덱스 숫자보다 크면, 뒤로 보낸다
    인덱스 1은 0부터 시작하고, 인덱스 2는 1부터 시작한다. 
    임시 변수를 써서 자리를 스왑한다.

*/

/*
let numbers = [5, 3, 4, 1, 2];
temp = 0;
for (let index1 = 0; index1 <= numbers.length - 1; index1++) {
    for (let index2 = 0; index2 <= numbers.length - 1 - index1; index2++) {
        if (numbers[index2] > numbers[index2 + 1]) {
            let temp = numbers[index2];
            numbers[index2] = numbers[index2 + 1];
            numbers[index2 + 1] = temp;
        }
    }
}
console.log(numbers);
*/

/*
문제 7: 재고 관리 시스템
두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 
사용자로부터 구매할 상품명과 수량을 입력받아, 재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 
재고가 부족하면 "재고가 부족합니다."를 출력합니다.
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
*/


/*  
    products[index] == stock[index]
    프롬프트로 체크한 내용이 products[index1]와 stock[index2]에 대응하는지 확인
    상품 재고가 충분하면 구매완료! 출력
    재고 부족하면 재고 부족합니다 출력
    볼펜 볼펜 볼펜 볼펜 볼펜 볼펜 볼펜 볼펜 볼펜 볼펜 
    노트 노트 노트 노트 노트
    지우개 지우개 지우개 지우개 지우개 지우개 지우개 지우개 지우개 지우개 
    지우개 지우개 지우개 지우개 지우개 지우개 지우개 지우개 지우개 지우개 
    
    볼펜, 노트, 지우개

*/

let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];

let checkP = prompt("구매할 제품을 입력하세요.")
let checkS = parseInt(prompt("구매할 수량을 입력하세요."))

for (let index1 = 0; index1 <= products.length - 1; index1++) {
    products.indexOf(index1) == checkP  // 체크P가 프로덕트의 내용을 포함하는가?
} for (let index2 = 0; index2 <= stock.length - 1; index2++) {
    checkS < stock[index2] // 체크S가 스톡보다 적은가?
    if()
}



/*
문제 8: 영화 평점 시각화하기
주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
(2). 구현 조건
for 반복문을 사용하여 모든 영화를 순회합니다.
각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
(3). HTML 출력 예시
히든페이스      ★★★★★★★★☆☆
위키드          ★★★★☆☆☆☆☆☆
글래디에이터2   ★★★★★★★☆☆☆
청설            ★★★★★★☆☆☆☆
*/



/*
문제 9: 좌석 예약 상태 표시하기
총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
각 좌석은 하나의 <div> 태그로 표시합니다.
좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석   
예약석 빈좌석
예약석 빈좌석
*/


/*
문제 10: 주차 요금 정산하기
차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
(2). 요금 규정
기본 요금: 최초 30분까지 1,000원
추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
(3). 구현 조건
for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
(4). 출력 예시 (HTML)
250어7142: 65분 주차, 최종 요금: 3,000원
142가7415: 30분 주차, 최종 요금: 1,000원
888호8888: 140분 주차, 최종 요금: 6,500원
931나8234: 420분 주차, 최종 요금: 20,000원
(힌트)
기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다.
*/










