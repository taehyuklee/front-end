const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //이건 뭘까 
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