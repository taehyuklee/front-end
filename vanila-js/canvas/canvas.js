const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); //이건 뭘까 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


console.log(canvas);

// ctx.fillStyle = 'white';
// ctx.fillRect(10,20,150,50);

ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.lineWidth=5;
ctx.beginPath();
ctx.arc(100,100,50,0, Math.PI * 2);
ctx.stroke();
ctx.fill(); //fill하면 red로 채워진다


console.log(canvas);


//click한 좌표를 변수에 넣는 방법이네 
const mouse = {
    x: null,
    y: null
}

canvas.addEventListener('click', function(e){
    mouse.x = e.x; //이렇게 click된 x좌표를 위의 x에 넣어주고
    mouse.y = e.y; //click된 y좌표를 위의 y에 넣어준다.
    console.log(mouse);
    drawCircle(); //click할때마다 event가 발생하는데 그림그리는 event를 발생시킬거야 
})

//circle 그리는 function
function drawCircle(){
    ctx.fillStyle = 'blue';
    ctx.lineWidth=5;
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,50,0, Math.PI * 2);
    ctx.fill(); //fill하면 red로 채워진다
}

//mouse 움직임에 따라 그려지는 형태
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    drawCircle();
})

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //old paint를 지우게 해준다.
    drawCircle();
    requestAnimationFrame(animate); //old paint를 지우게 해준다.
}

animate();