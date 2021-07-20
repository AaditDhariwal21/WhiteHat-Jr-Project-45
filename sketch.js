const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState=0;
var menu;
var bg;


function preload()
{
	bg=loadImage("bg.jpg")
}

function setup() {
	createCanvas(1024,556);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    menu=new MENU();
	menu.display();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  


  drawSprites();
 
}



