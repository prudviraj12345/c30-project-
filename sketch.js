
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var ground;
 var division1,division2,division3,division4;
  var plinko = [];
  var particles = [];

function preload()
{
	
}

function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(600,height,1200,20);
	
	division1 = new Division(80,600,15,500);

	division2 = new Division(230,600,15,500);

	division3 = new Division(390,600,15,500);

	division4 = new Division(530,600,15,500);

 
	for (var i = 40;i <=width; i=i+50)
	{
       plinko.push(new Plinko(i,75))
	    
	}
 
  
   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();


}