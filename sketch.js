
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{         
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	roof = new 	Ground (350,120,900,15);
	
	circle1 = new Circle(200,200,70,"pink");
	circle2 = new Circle(300,200 ,70, "blue");
	circle3 = new Circle(400,200,70, "purple");
	circle4 = new Circle(500,200,70, "green");
	circle5 = new Circle(600,200,70, "red");
    
	rope1 = new Rope (circle1.body, {x:150 ,y:120});
	rope2 = new Rope (circle2.body,  {x:250 ,y:120});
	rope3 = new Rope (circle3.body,  {x:350 ,y:120});
	rope4 = new Rope (circle4.body,  {x:450 ,y:120});
	rope5 = new Rope (circle5.body,  {x:550 ,y:120});

	Engine.run(engine);
  
}

function draw() {
background(0);
 
fill("white");
textSize(25);
text("Newton's Craddle " ,500, 455);

roof.display();
circle1.display();
circle2.display();
circle3.display();
circle4.display();
circle5.display();
                                            
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
                                                                   
}

function mouseDragged(){
	Matter.Body.setPosition(circle1.body ,{x:mouseX ,y:mouseY})
}


