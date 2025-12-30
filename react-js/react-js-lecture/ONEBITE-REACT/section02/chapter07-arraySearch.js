// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// forEach에 배열을 넣을 경우 (해당 배열안에 있는 모든 요소들을 for loop처럼 돌린다)
arr1.forEach((item, idx, arr) => {
    console.log(item, idx, arr);
});


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 method
let arr2 = [1,2,3];
let isInculde = arr2.includes(3); // 3이 존재하는지 확인하는 true, false 반환


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);

// 4. findIndex (객체를 찾을때 callback함수에서 attribute를 비교할 수 있으니까)
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드 (첫 번째만)
let arr4 = [1,2,3]
arr4.findIndex((itme) => {
    if( item===2) return true;
})


// 5. find
// 모든 요소를 순회하면서 콜백함수를 반환하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    { name: "하이" },
    { name: "호이" }
]

const finded = arr5.find(
    (item) => item.name === "하이"
)

console.log(finded); // 객체 value자체를 찾아서 보여준다.
