class Pendulumn{
    constructor(x,y,l){
        this.x = x;
        this.y = y;
        this.l = l; // the length of the penduumn
        this.g = 5; //gravity (in some pixel planet)
        this.r = 25; //the radius of the ball
        this.theta = 0; // the angle between the pendulumn and the  horizantal axis
        this.omega = 0; //the derivitive of the angle theta with respect to time (the angular velocity)
        this.d_omega = (this.g/this.l)*Math.sin(Math.PI/2 - this.theta);//the derivitive of the angular velocity with respect to time which is the angular acceleration 





    }
    draw(ctx){
        const {x,y,l,theta,r} = this;
        const {cos,sin,PI,floor} = Math;
        const cx = x + l*cos(theta);
        const cy = y + l*sin(theta);
        //drawing the line
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'white';
        ctx.moveTo(x,y); 
        ctx.lineTo(cx,cy);
        ctx.stroke();
        //drawing the ball
        ctx.beginPath();
        ctx.arc(cx,cy,r,2*PI,false)
        ctx.fill();


         //let display our  important variables 
        // theta , omega , d_omega
        //keep your eye on them and try to understand the relation between them (leave a comment)
        ctx.font = '15px Arial';
        ctx.fillText(`theta: ${floor(theta*180/PI)} deg`,10,20)
        ctx.fillText(`omega: ${this.omega} rad/s`,10,40)
        ctx.fillText(`d_omega: ${this.d_omega*1000} rad*1000/s^2`,10,60)

        //thanks for watching

    }
    update(){
      
       
        //let move the pendulumn 
        this.d_omega = (this.g/this.l)*Math.sin(Math.PI/2 - this.theta);
        //the above equation is the equation of the acceleration we will be doing another video about the math and the theoritical part of this video (with a voice cover )
        this.omega += this.d_omega;
        this.theta += this.omega;
    }
}