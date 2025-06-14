const animals = [   // 배열 선언은 가급적 복수 형태로 하세요
    { name: "monkey", size: "medium", isAggressive: false, weight: 20 },
    { name: "lion", size: "big", isAggressive: true, weight: 20 },
    { name: "tiger", size: "big", isAggressive: true, weight: 20 },
    { name: "hippo", size: "big", isAggressive: true, weight: 20 },
    { name: "cat", size: "small", isAggressive: true, weight: 20 },
]

console.log(animals)

/*
// old, animals[n] 이런 식으로 작성해왔었음
for (let i = 0; i <= animals.length -1 ; i++) {
    console.log(animals[i])
}
*/

/*
for(let animal of animals){
    console.log(animal.size)
}
*/

let i=0;
while(i< 10){

    i++;
}



// forEach, map, reduce, filter
