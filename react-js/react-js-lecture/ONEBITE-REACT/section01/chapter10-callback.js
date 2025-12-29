// 1. 콜백함수
function main(value) {
    console.log(value);
    value();
}

function sub() {
    console.log("i am sub");
}


// 어떤 함수를 다른 함수 인자로 넣어 나중에 호출할 수 있도록 하는 걸 콜백함수라 한다. (이건 뭐.. 비동기 개념에서 나온 개념인데)
main(sub);

// 이렇게 써도 무방하다.
main( () => {
    console.log("i am sub2");
})