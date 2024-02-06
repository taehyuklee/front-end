function a() {
    // 제목 가져오기
    var titleValue = document.getElementById("title").value;

    // 내용 가져오기
    var contentValue = document.getElementById("content").value;

    // 가져온 값 콘솔에 출력 (테스트용)
    console.log("제목: " + titleValue);
    console.log("내용: " + contentValue);

    // 여기서 가져온 값으로 필요한 로직 수행
}

function c() {
    // You can reset the form or redirect the user to another page.
    // Example: Resetting the form
    document.getElementById("f").reset();
}