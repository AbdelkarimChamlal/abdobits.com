
class CurveShape{

    constructor(x, y, color, stroke, r, curveTightness){
        this.points = [];
        this.x = x;
        this.y = y;
        this.color = color;
        this.stroke = stroke;
        this.r = r;
        this.curveTightness = curveTightness;
        this.xoff = Math.random() * 78942379978;
        this.randomInc = -.01;
        this.setupPoints();
        this.angle = 0;
        this.delta = Math.random() * 213984329;
    }


    setupPoints(){
        this.points.push(
            {x: -this.r, y: -this.r, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: 0, y: -this.r, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: this.r, y: -this.r, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: this.r, y: 0, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: this.r, y: this.r, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: 0, y: this.r, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: -this.r, y: this.r, xoff: Math.random() * 10, yoff: Math.random() * 10},
            {x: -this.r, y: 0, xoff: Math.random() * 10, yoff: Math.random() * 10},
        );
    }

    draw(){
        push();
        translate(this.x, this.y);
        beginShape();
        rotate(this.angle);


        let squareColor = color(this.color);
        squareColor.setAlpha(100 + 80 * sin(millis() / 1000) + 80 * sin(noise(this.xoff)));
        fill(squareColor);

        // fill(this.color);
        stroke(this.stroke);

        curveTightness(this.curveTightness);
        for(let i = 0 ; i < 2 ; i++){
            let count = 0;
            this.points.forEach(point => {
                curveVertex(point.x + map(noise(this.xoff + this.delta * count), 0, 1, -this.r/2, this.r/2), point.y + map(noise(this.xoff + this.delta * count * 1.65), 0, 1, -this.r/2, this.r/2));
                count++;
            });
        }

        endShape();
        pop();

        // let eyeR = this.r / 6;


        // push();
        // translate(this.x, this.y + 2* eyeR);
        // beginShape();
        // // rotate(this.angle);

        // squareColor = color(255 - this.color);
        // squareColor.setAlpha(10 + 80 * sin(millis() / 1000) + 80 * sin(noise(this.xoff)));
        // fill(squareColor);

        // // fill(this.color);
        // stroke(this.stroke);


        // curveVertex(-eyeR , -eyeR);
        // curveVertex(eyeR , -eyeR);
        // curveVertex(eyeR * 2.8 , 0);
        // curveVertex(eyeR , eyeR);
        // curveVertex(-eyeR , eyeR);
        // curveVertex(-eyeR * 2.8 , 0);


        // curveVertex(-eyeR , -eyeR);
        // curveVertex(eyeR , -eyeR);
        // curveVertex(eyeR * 2.8 , 0);
        // curveVertex(eyeR , eyeR);
        // curveVertex(-eyeR , eyeR);
        // curveVertex(-eyeR * 2.8 , 0);

        // endShape();

        // fill(255);
        // noStroke();
        // let xV = map(mouseX - width, -width, width, -5, 5);
        // let yV = map(mouseY - height, -height, height, -5, 5);
        // circle(xV, yV, eyeR / 2);

        // pop();


        this.update();
    }

    update(){
        this.xoff += this.randomInc;

        let randomMove = Math.random() * 3;
        this.x += map(noise(this.xoff), 0, 1, -randomMove, randomMove);
        this.y += map(noise(this.xoff + 100), 0, 1, -randomMove, randomMove);


        if(this.x > width + this.r * 2){
            this.x = -this.r * 2;
        }
        if(this.x < -this.r * 2){
            this.x = width + this.r * 2;
        }

        if(this.y > height + this.r * 2){
            this.y = -this.r * 2;
        }

        if(this.y < -this.r * 2){
            this.y = height + this.r * 2;
        }


        this.points.forEach(point => {
            // point.x = point.x + map(noise(this.xoff), 0, 1, -5, 5);
            // point.y = point.y + map(noise(this.xoff + this.delta), 0, 1, -5, 5);

            // if(point.x > width ){
            //     point.x = width;
            // }
            // if(point.x < 0){
            //     point.x = 0;
            // }
            // if(point.y > height){
            //     point.y = height;
            // }
            // if(point.y < 0){
            //     point.y = 0;
            // }
            // console.log(point.x);

        });

        this.angle += map(noise(this.xoff), 0, 1, -0.1, 0.1);

    }

}