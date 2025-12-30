// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열이 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // arr1을 풀어 헤쳐라.
console.log(arr2);

// 배열뿐만 아니라 객체도 사용 가능.

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// 위와 같이 ...으로 풀수 있다.
// 함수의 인자도 마찬가지임.

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(...rest) {
  // ...rest는 가변인자와 같아 그래서 그냥 배열로 넘어오게 됨.
  console.log(rest);
}

funcB(...arr1); // ...arr1 => 여러 인자들이 들어가게 되는거임.
