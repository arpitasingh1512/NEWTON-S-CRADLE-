class Rope {
    constructor(bodyA,bodyB,offsetX){
        var options={
            'bodyA': bodyA,
            'bodyB': bodyB,
            'stiffness': 0.04,
            'length': 10
        }
       this.offsetX = offsetX
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }
 display (){
     var pointA = this.rope.bodyA.position;
     var pointB = this.rope.bodyB.position;
    push();
    strokeWeight(5)
    stroke('green')
  line (pointA.x,pointA.y,pointB.x+offsetX,pointB.y);

    pop();

 }
}
