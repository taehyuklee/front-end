const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d"); //이건 뭘까 
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
const particlesArray1 = [];


//class로 particle만들어서 사용
class Particle1{

    constructor(){
        // this.x = Math.random()* canvas3.width;
        // this.y = Math.random()* canvas3.height;
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random()*3 + 1.5;
        this.speedX = Math.random()*3 - 1.5;
        this.speedY = Math.random()*3 - 1.5;

    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        
        //줄어드는 방향으로 만들기 (일정 크기 이상인거 빠르게 줄어들게 하기)
        if(this.size>0.2){
            this.size -=0.1;
        }
    }

    draw(){
        ctx3.fillStyle = 'gray';
        ctx3.beginPath();
        ctx3.arc(this.x,this.y, this.size,0, Math.PI * 2);
        ctx3.fill(); //fill하면 red로 채워진다

        //radius를 고정하는 것 보다 더 random하게 하는 것.
    }

    
}

canvas3.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i=0; i<3; i++){
        particlesArray1.push(new Particle1());
    }
})

canvas3.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i=0; i<3; i++){
        particlesArray1.push(new Particle1());
    }
})


function handleParticles1(){
    for(let i=0; i<particlesArray1.length; i++){
        particlesArray1[i].update(); //속도를 랜덤하게 바꾼다.
        particlesArray1[i].draw(); //다시 그린다.

        if(particlesArray1[i].size<=0.3){
            //0.3미만인거 없애기
            particlesArray1.splice(i,1); //i번째 요소 1개 삭제
            i--;
        }
    }

}

function animate1(){
    // ctx3.clearRect(0, 0, canvas3.width, canvas3.height); //old paint를 지우게 해준다.
    
    ctx3.fillStyle= "white";
    ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
    
    
    handleParticles1();
    requestAnimationFrame(animate1); //old paint를 지우게 해준다.
}

animate1();

