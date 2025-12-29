function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체를 varA에 넣을 수 있다. Pointer개념이겠지 그냥 해당 함수가 저장된 Memory를 가리키고

//결구 varA가 funcA의 주소를 가지게 되고 우리는 varA()로 해당 함수를 호출할수 있게 된거임
varA();


/**
 * 아래와 같은 방식으로 함수를 그냥 해당 변수에 넣을수도 있다.
 * 아래의 경우 funcB()는 선언된게 아니라 값으로서 생성되어 바로 varB로 들어가게 된거임.
 */
let varB = function funcB() {
    console.log("funcB");
};

varB();
//funcB();는 ㄴㄴ

/**
 * 어차피 함수의 이름은 저기서 기억하지 못한다. 외부 SCOPE에서는 내부 scope에서는 사용 가능 예를 들어 
 * let C = function D(n) {
 *  if (n === 0) return;
 *  D(n - 1); //
 * };
 * 위의 함수처럼 재귀함수에서는 D를 사용가능하다. 하지만 일반적으로 varB에 그냥 함수를 저장할거면 위와같이 D라는 이름은 외부 Scope에서 사용할수가 없다.
 */

// 위처럼 재귀함수로 뭐 쓸거 아니면 이렇게 익명함수로 사용하는게 일반적이다. (이런 방식을 함수 표현식이라 한다. hoisting대상이 되지 않는다)
let varC = function() {
  console.log("ananymous function");
};


// 2. 화살표 함수 arrowFunction
let varD = () => {
    return 1;
};

let varE = (value) => value + 1;
