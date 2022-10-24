class Eye{

    constructor(x,y, sR, bR){
        this.x = x;
        this.y = y;
        this.sR = sR;
        this.bR = bR;
        this.angle = Math.random() * 214329;
        this.delta = Math.random() * 213984329;

        this.xoff = 0;
        this.randomInc = Math.random() * 0.1;
        this.color = Math.floor(Math.random() * 255);
    }

    draw(){

        push();

        translate(this.x, this.y);
        rotate(this.angle);
        fill(255);
        stroke(0);
        ellipse(0,0, this.sR, this.bR);

        let eyeR = this.bR / 2;
        fill(this.color);
        ellipse(map(mouseX, 0,width, -this.sR / 2, this.sR / 2), map(mouseY, 0,height, - this.bR / 2, this.bR / 2), eyeR, eyeR);


        pop();

        this.xoff += this.randomInc;
        this.angle += 0.01;

    }
    
}