function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
// 단락 평가에 의해 먼저 False가 나오면 해당 값을 반환하고 끝낸다.
// 쉽게 생각해서 단락 평가에서 먼저 끊긴 값을 반환하게 된다. 아니면 최종 값이 반환 된다고 생각하면 됨.
// undefined && "good" -> undefined 반환
// "shot" && "good" -> "good" 반환

// 그래서 아래와 같이 undefined이면 -> name = undefined가 되는거고
// 만약 실제 값이 있으면 뒤에 있는게 반환이 된다.
function printNm(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
