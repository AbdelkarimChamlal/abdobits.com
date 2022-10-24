class Shape{
    constructor(x, y, color, stroke, points, angle, r, inc, spacing, xoff, rLimit, curveTightness){
        this.x = x;
        this.y = y;
        this.color = color;
        this.stroke = stroke;
        this.points = points;
        this.angle = angle;
        this.r = r;
        this.inc = inc;
        this.spacing = spacing;
        this.xoff = xoff;
        this.rLimit = rLimit;
        this.curveTightness = curveTightness;
        this.c = null;
    }



    draw(){

        push();

        // translate(width / 2, height / 2);

        rotate(this.angle);
        if(this.c == null){
            this.c = color(Math.floor(Math.random() * 255));
        }
        fill(this.c);

        // stroke(this.stroke);
        noStroke();
        beginShape();
        // curveTightness(this.curveTightness);
        curveTightness(-.25);
        for(let j = 0; j < 2; j++){
            for(let i = 0; i < this.points.length; i++){
                let point = this.points[i];
                let x = point.x + map(this.xoff + this.spacing * (i + 1.5), 0, 1, -this.rLimit, this.rLimit);
                let y = point.y + map(this.xoff + this.spacing * (i - 1.5), 0, 1, -this.rLimit, this.rLimit);
                curveVertex(x, y);
            }
        }
        endShape();
        pop();
        this.move();
    }

    move(){
        this.xoff += 0.01;
        // this.angle = map(noise(this.xoff), 0, 1, -PI, PI);
    }
}