// 1. Date  객체를 생성하는 방법
let date1 = new Date(); // 생성자

let date2 = new Date("1997/01/07/10:10:10");
let date3 = new Date(1997, 1, 7, 23, 59, 59);

// 2. 타임 스탬프
// 특정 시각이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 위의 1970.. 이게 utc임
let ts1 = date1.getTime(); 
console.log(ts1);

let date4 = new Date(ts1); // 해당 timestamp값을 Date로 환산해서 알려준다.

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // Month가 0부터 시작하게 됨.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
)

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //2로 하면 실제로 Month는 March(3) 이 된다. 숫자는 -1이 되니까
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());

