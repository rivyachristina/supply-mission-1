const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(400, 200 , 50 ,50, {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  imageMode(CENTER)
  image(packageIMG,packageBody.position.x,packageBody.position.y,50,50)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
   }
}



