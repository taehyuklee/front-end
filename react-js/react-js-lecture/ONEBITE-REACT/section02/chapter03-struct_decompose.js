// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = [1, 2, 3];
// result : one:1, two:2, three:3

// let one, two, three = arr;
// console.log(one, two, three);
// result: one: undeifned, two: undefined, three =[1,2,3]

// 2. 객체의 구조분해 할당
let person = {
  name: "이태혁",
  age: 34,
  hobby: "computer",
};

let { name, age, hobby, extra = "etc" } = person;
console.log(name, age, hobby);

// 만약 다른 person객체의 age를 다른 변수에 할당하고싶다.
let { name1, age: myAge, hobby2, extra2 = "etc" } = person;
// 위와 같이 하면 myAage에 person의 age값이 할당되게 됨.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = (person) => {
  person.name;
  person.age;
};

// 객체를 넘겼을때만 구조분해 할당이 가능하다.
const decomposeFunc = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby);
};

func(person);
