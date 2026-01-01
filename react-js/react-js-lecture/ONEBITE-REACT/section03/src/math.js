// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// add, sub key value같으면 그냥 add, sub만 넣으면 된다. (exports여야함 export아님)
// 이 방법은 Common JS모듈을 이용하는거고
// module.exports = {
//   add: add,
//   sub: sub,
// };

// ES Module 방식 (Common JS와 함께 사용할수 없다)
export { add, sub };

// 또는 함수 앞에 export를 써도 그냥 자동으로 내보내진다.
export function addExp(a, b) {
  return a + b;
}

export function subExp(a, b) {
  return a - b;
}

// 아래와 같이 default로 export할수도 있다.
export default function multiply() {
  return a * b;
}
