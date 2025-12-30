// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr = [
    {name: "이태혁", hobby:"컴퓨터"},
    {name: "고라니", hobby:"풀뜯기"},
    {name: "감팡이", hobby:"고기뜯기"},
    {name: "곰팡이", hobby:"컴퓨터"},
];

const computerPeople = arr.filter((item) => {
    if(item.hobby === "컴퓨터") return true;
})

console.log(computerPeople); 
// result [ { name: '이태혁', hobby: '컴퓨터' }, { name: '곰팡이', hobby: '컴퓨터' } ]


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환 (값들을 Processing할때)
let arr2 = [1 ,2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    return item*2;
})

console.log(mapResult); // [ 2, 4, 6 ]

let names = arr.map((item) => {
    return item.name
})

console.log(names); // [ '이태혁', '고라니', '감팡이', '곰팡이' ]


// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

let arr4 = [10, 3, 5];
// 사전순으로 정렬하는것이기에 10, 3, 5는 그냥 정렬되지 않는다. 이럴때는 콜백함수 안에 Java Comparator처럼 기준을 넣어줘야 한다.
arr4.sort((a,b) => {
    if( a > b ){
        return 1; // a, b가 인자로 들어왔을때 b를 a 앞으로 오게 함.
    } else if ( a < b ) {
        return -1; // 음수일때는 a가 b앞에 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    };
})

//내림 차순
arr4.sort((a,b) => {
    if( a > b ){
        return -1; // a가 큰 값이니까 a가 b앞으로 와라 (음수)
    } else if ( a < b ) {
        return 1; // b가 큰 값이므로 b가 a앞으로 와라 (양수)
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    };
})

// 4. toSorted (복사해서 새로운 배열을 반환해준다)
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 변환하는 메서드
let arr6 = ["hi", "im", "winterload"];
const joined = arr6.join("-"); // 중간에 넣을 수 있는 것들