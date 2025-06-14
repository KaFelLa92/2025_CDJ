
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
 