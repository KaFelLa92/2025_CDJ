/*
let sideDishes = ["김치", "멸치볶음", "계란말이", "불고기", "시금치"];

for (let i = 0; i <= sideDishes.length - 1; i++) {
    console.log(sideDishes[i] + "먹었다!");
}

for (let int = 1; int <= 10; int++) {
    console.log(int)
}

let even = [];

for (let num = 1; num <= 100; num++) {
    if (num % 2 == 0) {
        even.push(num)
    }
}
console.log(even)

let fruits = ["바나나", "사과", "수박"];

for (let index = 0; index <= fruits.length - 1; index++) {
    console.log(`${index}번 과일은 ${fruits[index]}`); 
} 

*/

/*
let fruits = ["banana", "apple", "watermelon"]
for (let i = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i]);
}
*/
/*
//  1 2 3 4 5 

// Hello 5번 반복
for (let i = 1; i <= 5; i++) {
    console.log("Hello" + i);
}

// 짝수 출력
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// if문으로 짝수 출력
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) { // 숫자를 2를 나눠 나머지가 0이면 짝수.
        console.log(i)
    }
}

// if문으로 홀수 출력
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) { // 숫자를 2를 나눠 나머지가 0이면 짝수.
        console.log(i)
    }
}

// 10부터 1까지 거꾸로 출력
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

for (let i = 5; i <= 25; i += 5) {
    console.log(i);
}

// 배열 for문

let fruits = ["사과", "바나나", "딸기", "포도"];

for (let i = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i]);
}

// 모든 숫자 10점 더해서 출력해보기

let scores = [90, 85, 70, 100, 95];

for (let i = 0; i <= scores.length - 1; i++) {
    console.log(`${scores[i] + 10}`);
}

// 구구단 만들기
// 단 = 2 ~ 9 곱 1 ~ 9
for (let dan = 2; dan <= 9; dan++) {
    for (let i = 1; i <= 9; i++)
        console.log(`${dan} X ${i} = ${dan * i}`)
}
*/
// 1부터 100까지 합 구하기
// (0 + 1) + (0 + 2) + (0 + 3) (0 + 4) + ... (0 + 100) 
// 0 변수와 인덱스를 만들고, 변수와 인덱스의 합을 인덱스번만큼 반복

/*
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(`총합: ${sum}`);

// 1~10 짝수 구하기
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i + "는 짝수입니다.")
    }
}

// 1부터 20까지 중 3의 배수만 lucky! 출력
//
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i + "Lucky!")
    } else {
        console.log(i)
    }
}

// 1~15 홀수는 Odd 짝수는 Even 출력

for (let i = 1; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log(i + "는 Odd")
    } else {
        console.log(i + "는 Even")
    }
}

// 점수 배열 합격 불합격 판별

let scores = [95, 60, 45, 80, 30];

for (let i = 0; i <= scores.length - 1; i++) {
    if (scores[i] > 60) {
        console.log(scores[i] + "점은 합격입니다!")
    } else {
        console.log(scores[i] + "점은 과락입니다.")
    }
}

// 1~100 중 3 배수는 Fizz 5 배수는 Buzz 3, 5 공배수는 FizzBuzz 출력

for( let i = 1; i <= 100 ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log (i + "는 FizzBuzz")
    } else if (i % 5 == 0){
        console.log (i + "는 Buzz")
    } else if (i % 3 == 0 ){
        console.log (i + "는 Fizz")
    } else {
        console.log (i + "는 왱알앵알")
    }
}
*/

// 1부터 10까지 더한 총합을 sum에 저장하고 출력하기
// (0 + 1) + (0 + 2) + (0 + 3) + ...

sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i
}
console.log("총합: " + sum);