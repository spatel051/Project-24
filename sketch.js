
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, plane, stone, sand2, sand3, sand4;
var rubber, iron, sand1, sand5, sand6, sand7, sand8;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400, 350);
	plane = new Plane(400, 690, 800, 15);
	stone = new Stone(300, 400, 75, 75);
	rubber = new Rubber(500, 400, 65, 65);
	iron = new Iron(150, 600, 75, 50);
	sand1 = new Sand(450, 600, 10, 10);
	sand2 = new Sand(430, 600, 10, 10);
	sand3 = new Sand(100, 600, 10, 10);
	sand4 = new Sand(280, 600, 10, 10);
	sand5 = new Sand(600, 600, 10, 10);
	sand6 = new Sand(580, 600, 10, 10);
	sand7 = new Sand(560, 600, 10, 10);
	sand8 = new Sand(540, 600, 10, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");


  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
}