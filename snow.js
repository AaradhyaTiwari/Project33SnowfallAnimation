class Snow {
    constructor(x,y){
        var options ={
            restitution: 0.5
        }
        this.snow1 = loadImage("snow4.png");
        this.snow2 = loadImage("snow5.png");
        this.r = 50;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;
        var snowflake = Math.round(random(0,2));
        imageMode(CENTER);
        if(snowflake===0){
            image(this.snow1, pos.x, pos.y, 50, 50);
        }
        else {
            image(this.snow2, pos.x, pos.y, 50, 50);
        }
    }
}