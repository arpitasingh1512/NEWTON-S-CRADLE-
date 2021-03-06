
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(500,50,500,30)
    
	bobObject1 = new Bob(500,300)
	bobObject2 = new Bob(420,300)
	bobObject3 = new Bob(580,300)
	bobObject4 = new Bob(340,300)
	bobObject5 = new Bob(660,300)
	
	rope1 = new Rope(bobObject1.body, roof.body,0) 
	rope2 = new Rope(bobObject2.body, roof.body,-50) 
	rope3 = new Rope(bobObject3.body, roof.body,50) 
	rope4 = new Rope(bobObject4.body, roof.body,-100) 
	rope5 = new Rope(bobObject5.body, roof.body,100) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


  drawSprites();
 
}



