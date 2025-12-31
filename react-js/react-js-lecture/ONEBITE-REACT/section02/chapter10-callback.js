function orderFood(callback) {
  setTimeout(() => {
    const food = "치킨";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

// 콜백 함수의 인자들은 다 Callback함수를 인자로 사용하는 함수에서 넣어준다.
// 함수나 메서드를 사용하는 입장에서 어떤 Callback함수를 넣을지 그리고 그 Callback함수에 어떤 인자를 넣어줄지를 잘 알아야겠네.
// 막상 Callback함수를 인자로 넘겨줬는데 Callback함수의 인자를 해당 함수에서 안넣어주면 아무것도 못한다.
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 콜백 지옥
