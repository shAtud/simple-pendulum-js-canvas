const canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 500;
const {width,height} = canvas;
ctx = canvas.getContext('2d');


const FPS = 10;
const pendu = new Pendulumn(250,200,200);
const animate = ()=>{
    ctx.clearRect(0,0,width,height)
    pendu.draw(ctx);
    pendu.update()
    setTimeout(()=>{
        requestAnimationFrame(animate);
    },1000/FPS)
}


animate();

