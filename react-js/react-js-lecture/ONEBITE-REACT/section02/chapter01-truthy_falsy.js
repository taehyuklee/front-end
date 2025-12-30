// 1. Falsy 값 (false값으로 간주됨)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truty한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값들에 대한 것
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person){
  // if (person === undefined || person ===null ){
  //   console.log("person의 값이 없음");
  //   return
  // } 
  if (!person){
    console.log("person의 값이 있음");
    return
  }
  console.log(person.name);
}

// 단란평가로 더 간단하게 코드를 단축시킬수도 있다.
function printNameShort() {
  // 만약 person이 undefined라면 그냥
  console.log(person && person.name);
}

let person = {
  name:"이태혁"
};