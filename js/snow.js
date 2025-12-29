const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
const flakes = [];
const count = 120;

for(let i=0;i<count;i++) {
    flakes.push({
        x: Math.random()*w,
        y: Math.random()*h,
        r: Math.random()*4+1,
        d: Math.random()*count
    });
}

function draw() {
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.beginPath();
    flakes.forEach(f => {
        ctx.moveTo(f.x,f.y);
        ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    });
    ctx.fill();
    move();
}

function move() {
    flakes.forEach(f => {
        f.y += Math.cos(0.01 + f.d) + 1 + f.r/2;
        f.x += Math.sin(0.01)*2;
        if(f.y>h) {
            f.y= -10;
            f.x=Math.random()*w;
        }
    });
}

function loop() {
    draw();
    requestAnimationFrame(loop);
}

window.onresize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};

loop();
