class Rope{
    constructor(bodyA , pointB){
         var options ={
            bodyA : bodyA,
            pointB : pointB,
           length: 200,
           stiffness:0.5
         }
    this.chain = Matter.Constraint.create(options);
    World.add(world, this.chain);
    this.bodyA = bodyA
    this.pointB = pointB
        }
    display(){
      var pointA = this.chain.bodyA.position
      var pointB = this.pointB
      stroke("white");
      strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}