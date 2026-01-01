/* Common JS사용 방법

const moduleData = require("./math");
console.log(moduleData);
// result { add: [Function: add], sub: [Function: sub] }

// 불러온 module을 사용해보자
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

// 객체의 구조분해 할당으로 받아오면
const { add, sub } = require("./math");
console.log(add(1, 2));
console.log(sub(1, 2));

*/

/**
 * ES Modlue 사용 방법
 */
import { add, sub, addExp, subExp } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(addExp(1, 2));
console.log(subExp(1, 2));

// default export는 중괄호가 없다. (이름은 내 맘대로)
import mul from "./math.js";
console.log(mul(2, 3));

//합쳐서 import도 가능
// import mul, { add, sub, addExp, subExp } from "./math.js";

// nodemodules의 Library에서 가져오는건 아래와 가이 경로를 따로 쓸 필요가 없다.
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
