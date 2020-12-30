
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1,b2,b3,b4,b5,b6,b7,b17,b9,b10,b11,b12,b13,b14,b15,b16;

var b17, b18, b19, b20, b21, b22, b23, b24, b25;

var ground;

var stand1, stand2;

var polygon;

var slingshot;




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;


  b1 = new Box(600, 255, 30, 40);
  b2 = new Box(570, 255, 30, 40);
  b3 = new Box(540, 255, 30, 40);
  b4 = new Box(510, 255, 30, 40);
  b5 = new Box(630, 255, 30, 40);
  b6 = new Box(660, 255, 30, 40);
  b7 = new Box(690, 255, 30, 40);
  b9 = new Box(600, 215, 30, 40);
  b10 = new Box(570, 215, 30, 40);
  b11 = new Box(540, 215, 30, 40);
  
  

  ground = new Ground(600, 380, 1200, 10);

  stand1 = new Ground(600, 280, 210, 10);
  

  polygon = new Polygon(200, 270, 23, 23);

  slingshot = new Polygon(polygon.body, {x:200, y:260});


  
  
}

function draw() {
  background(200);
  Engine.update(engine);  

  console.log(polygon.body.position);


  drawSprites();
  ground.display();
  polygon.display();
  slingshot.display();
  stand1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  
  b9.display();
  b10.display();
  b11.display();
  

  

}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
  
  
  }
  
  
  function mouseReleased(){
  slingshot.fly();
  
  }
