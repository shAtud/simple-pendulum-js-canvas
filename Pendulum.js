class Pendulumn {
    constructor(x,y,l){
        this.x = x;
        this.y = y;
        this.g = 5;
        this.l = l;
        this.theta = 0;
        this.omega = 0;
        this.d_omega = (this.g/this.l)*Math.sin(Math.PI/2-this.theta);
        this.r = 25;
        //
       


    }
   
   

    draw(ctx){
        const {x,y,l,theta,r} = this;
        const {cos,sin,PI,floor} = Math;
        const cx = x +l*cos(theta);
        const cy = y +l*sin(theta);
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'white';
        ctx.moveTo(x,y);
        ctx.lineTo(cx,cy);
        ctx.stroke();
       
        //
      
        ctx.beginPath();
        ctx.arc(cx,cy,r,2*PI,false)
        ctx.fill();
        //
        ctx.font = "15px Arial";
        ctx.fillText(`theta: ${ floor(theta*180/PI)} deg`, 10, 20);
        ctx.fillText(`omega: ${this.omega} rad/s`, 10, 40);
        ctx.fillText(`d_omega: ${this.d_omega*1000} rad*1000/s^2`, 10, 60);

    }
    update(){
        this.d_omega = (this.g/this.l)*Math.sin(Math.PI/2-this.theta);
        this.omega += this.d_omega;
        this.theta += this.omega;

    }
}