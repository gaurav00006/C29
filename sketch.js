
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon=new Polygon(355,200,30);
	
	ground=new Ground(500,580,1200,20);

	platform=new Platform(500,500,250,20);
	
	launcherObject=new launcher(polygon.body,{x:205,y:200});


   //bottom layer
    block1=new Box(400,400,30,30);
    block2=new Box(430,400,30,30);
  block3=new Box(460,400,30,30);
   block4=new Box(490,400,30,30);
    block5=new Box(520,400,30,30);
    block6=new Box(550,400,30,30);



    //2nd layer
   block7=new Box(420,370,30,30);
   block8=new Box(450,370,30,30);
    block9=new Box(480,370,30,30);
   block10=new Box(510,370,30,30);
    block11=new Box(540,370,30,30);




    //3rd layer
   block12=new Box(436,340,30,30);
    block13=new Box(466,340,30,30);
   block14=new Box(496,340,30,30);
    block15=new Box(526,340,30,30);

    //4th layer
   block16=new Box(455,300,30,30);
   block17=new Box(485,300,30,30);
   block18=new Box(515,300,30,30);

   //5th layer
   block19=new Box(475,260,30,30);
   block20=new Box(505,260,30,30);
   
   //top layer 
   block21=new Box(495,220,30,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  polygon.display();
  
   ground.display();
   platform.display();
   launcherObject.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
  block19.display();
  block20.display();
   block21.display();

   


 
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
	  launcherObject.attach(polygon.body);
	}
  }
