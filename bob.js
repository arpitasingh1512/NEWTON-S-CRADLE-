class Bob{
    constructor(x,y){
  
    
    var options = {
       isStatic: true
    }
this.body = Bodies.circle(x,y,20,options)
 this.radius = 40;
    World.add(world,this.body)
}
display(){
    var pos = this.body.position
    ellipseMode(RADIUS)
    fill("blue")
    ellipse(pos.x , pos.y,this.radius,this.radius)
    

    
}
}
   

