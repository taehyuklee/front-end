// js에서는 function안에 function을 넣을수 있다.

let area1 = getArea(10, 20);

function getArea(width, height) {
    function another() { // 중첩 함수
        console.log("another");
    }

    another();
    let area =width*height;

    return area;
}

//JS에서는 호이스팅때문에 모든 Function들을 최상단에 끌어올려서 선언 미리 해준다. 그래서 위와같은 구조가 됨.