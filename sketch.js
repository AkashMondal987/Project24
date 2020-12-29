const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper;
var rect1, rect2, rect3;

function setup() {
	var canvas = createCanvas(700,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,400);
	paper = new Paper(100,100);

	rect1 = createSprite(580, 270, 10, 70);
	rect1.shapeColor = ("white");

	rect2 = createSprite(520, 300 , 120, 10);
	rect2.shapeColor = ("white");

	rect3 = createSprite(460, 270 , 10, 70);
	rect3.shapeColor = ("white");

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}