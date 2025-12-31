function add10() {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    // 가정 Network I/O를 약 2초가 걸리는 요청을 보내 놓음
    setTimeout(() => {
      const num = 10; // 요청을 받아옴 (Callback으로)

      if (typeof num === "number") {
        resolve(num + 10); // Number받아오면 결과 내뱉고
      } else {
        reject("it is not num"); // Number가 아니면 reject한다.
      }
    }, 2000);
  });

  return promise;
}

// 위와 같이 Promise객체를 구성하고 이제 이걸 사용한다.
// resolve에 제공한 결과 num + 10을 result에 넣어준다.
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// add10을 비동기 함수라고 생각해보자.
const p = add10();

// 이렇게 써도 되는데 이러면 또 callback 지옥의 연속임. then.. 안에 then..
// 그래서 새로운 newPromise를 return하면 내부적으로 새로운 Promise를 다음 체이닝에 걸어주게 됨.
p.then((result) => {
  console.log(result);
  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
});

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then에서 뭔가 실패해서 resolve가 됨. 1번째에서 그렇게 됐다고 한다면
// 바로 어떻게 catch로 가는거지? 내부 구조가?
