class Circle {
    constructor (x,y,radius, color){
        var options = {
            isStatic: false,
            resitution:0.1,
        }
    this.body = Bodies.circle (x,y,radius,options);
    this.radius = radius;
    this.color = color;
    World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color)
        ellipse(pos.x, pos.y, this.radius, this.radius);
       
        pop();
    }
}