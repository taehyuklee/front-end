//1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN

//2. String Type
let name_job="해";
let loc = "도";


// Template Literal 문법
let text = `${name_job} & ${loc} 동적으로 이렇게 넣는다`;


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type (아무것도 선언하지 않은 경우, 초기화하지 못했을때)
let none;


/** 
 * 형 변환 관련해서도 여기서 다루도록 한다.
 */
// 1. 묵시적 형 변환 (JS엔진이 알아서 형 변환 하는 것)
let num = 10;
let str = "20";

const result = num + str; // result 1020


// 2. 명시적 형 변환
let str1 = "10";
let strToNum1 = Number(str1); // 10

let str2 = "10개";
let strToNum2 = parseInt(str2); // 10


// 숫자 -> 문자열
let num_20 = 20;
let numToStr1 = String(num_20);