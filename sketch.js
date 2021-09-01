const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var ground;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

 function setup() {
  createCanvas(800, 600);
	rectMode(CENTER);
  engine = Engine.create();
  
  world = engine.world;

  var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

  var ball_options = {
    isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
  }
  
  
  ball = Bodies.circle(320,380,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(360,380,20,ball_options);
  World.add(world,ball);
  
  ball3 = Bodies.circle(400,380,20,ball_options);
  World.add(world,ball);

  ball4 = Bodies.circle(440,380,20,ball_options);
  World.add(world,ball);

  ball5 = Bodies.circle(480,380,20,ball_options);
  World.add(world,ball);

  
  rope1= new rope(ball, roof,-80,0);
  rope2= new rope(ball2, roof,-40,0);
  rope3= new rope(ball3, roof,0,0);
  rope4= new rope(ball4,roof,40,0);
  rope5= new rope(ball5, roof,80,0);

  
  Engine.run(engine);
  
}

function draw() 
{
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ellipse(ball.position.x,ball.position.y,40,40);
  ellipse(ball2.position.x,ball2.position.y,40,40);
  ellipse(ball3.position.x,ball3.position.y,40,40);
  ellipse(ball4.position.x,ball4.position.y,40,40);
  ellipse(ball5.position.x,ball5.position.y,40,40);
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}