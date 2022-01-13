const canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 500;
const FPS = 20;
const {width,height} = canvas;
ctx = canvas.getContext('2d');

//pendulumn intance
 const pd  = new Pendulumn(250,200,200);
const animate = ()=>{
        ctx.clearRect(0,0,width,height);
        pd.draw(ctx);
        pd.update()
        setTimeout(()=>{
            requestAnimationFrame(animate)
        },1000/FPS)
}

animate();