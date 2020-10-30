
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground=new Ground(700,370,1400,10)

	wall1=new Wall(1090,360,200,10)
	wall2=new Wall(990,315,10,100)
	wall3=new Wall(1190,315,10,100)
	ball1=new Ball(300,360,10)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  ground.display()
  wall1.display()
  wall2.display()
  wall3.display()
  ball1.display()
 
 
}


function keyPressed() {

	if (keyCode === UP_ARROW) {

       Matter.Body.applyForce(ball1.body,ball1.body.position,{x:9,y:-9})

	}
}







