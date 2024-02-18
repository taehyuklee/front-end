const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d"); //이건 뭘까 
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
const particlesArray = [];

//literal object만드는 방법 - 인스턴스
//click한 좌표를 변수에 넣는 방법이네 
// const mouse2 = {
//     x: null,
//     y: null
// }

//class로 particle만들어서 사용
class Particle{

    constructor(){
        // this.x = mouse2.x;
        // this.y = mouse2.y;
        this.x = Math.random()* canvas2.width;
        this.y = Math.random()* canvas2.height;
        this.size = Math.random()*15 + 1.5;
        this.speedX = Math.random()*3 - 1.5;
        this.speedY = Math.random()*3 - 1.5;

    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        
        //줄어드는 방향으로 만들기 
    }

    draw(){
        ctx2.fillStyle = 'blue';
        ctx2.beginPath();
        ctx2.arc(this.x,this.y, this.size,0, Math.PI * 2);
        ctx2.fill(); //fill하면 red로 채워진다

        //radius를 고정하는 것 보다 더 random하게 하는 것.
    }

    
}

function init(){
    for(let i=0; i<100; i++){
        particlesArray.push(new Particle());
    }
}

init();

console.log(particlesArray);

function handleParticles(){
    for(let i=0; i<particlesArray.length; i++){
        particlesArray[i].update(); //속도를 랜덤하게 바꾼다.
        particlesArray[i].draw(); //다시 그린다.
    }
}

function animate(){
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height); //old paint를 지우게 해준다.
    handleParticles();
    requestAnimationFrame(animate); //old paint를 지우게 해준다.
}

animate();