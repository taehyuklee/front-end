// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드 (WebAPIS로 보내게 되겠지?)
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {
          name: "이태혁",
          id: "taylee",
        },
        2000
      );
    });
  });
}

// Promise 객체를 반환하도록 한다.
console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  // getData().then((result) => {
  //   console.log(result);
  // })

  // Promise의 then then하는 chaining의 미동기 작업을 그냥 한 줄의 코드로 쓸수 있게 해준다.(scope 제한 개꿀임)
  const data = await getData();
  console.log(data);
}

printData();
