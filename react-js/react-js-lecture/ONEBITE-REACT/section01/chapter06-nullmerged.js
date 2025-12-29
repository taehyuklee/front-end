// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// ??연산자는 undifined나 null이 아닌 값을 넣게 됨.
let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 10 (앞에 있는 값)

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // var7의 자료형을 알려준다. string, number, boolean 등 


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// -------- 조건식 ------ ? true : false

