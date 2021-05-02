const Engine =Matter.Engine;
const World  = Matter.World;
const Bodies =Matter.Bodies;

var engine,world;
var ground,ball
function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;
 var factors={
   restitution:0.4
 }
ball=Bodies.circle(200,200,20,factors);
World.add(world,ball);

var options=
{
  isStatic:true
}
ground=Bodies.rectangle(400,390,800,10,options);
World.add(world,ground);
console.log(ground)
}
function draw() {
  background(0);  
Engine.update(engine)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)
}
