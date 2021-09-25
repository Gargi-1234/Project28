
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var orchard, tree2, mango2Img
var apple1, apple2, apple3, apple4, apple5, apple6, apple7, apple8, apple8, apple9, apple10, apple11, apple12;
var fallenApple, greenApple1, greenApple2, ground
var launcher, squirrl,squirrlImg, squirrl2Img, groundSprite;

function preload(){
	boy=loadImage("images/boy.png");
  orchard = loadImage("images/b.jpeg")
  mango2Img = loadImage("images/mango copy.png")
  squirrlImg = loadImage("images/squirrle/flyingDown.png")
  greenApple1Img = loadImage("images/greenApple/green.png")
  squirrl2Img = loadImage("images/squirrle/flyingUp.png")
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  greenApple1 = createSprite(200,350)
  greenApple1.addImage(greenApple1Img)
  greenApple1.scale = 0.5
  

  groundSprite = createSprite(width/2,600,width,20)
  groundSprite.shapeColor = "green"

  squirrl = createSprite(900,10)
  squirrl.addImage(squirrlImg)
  squirrl.scale = 0.5
  squirrl.setVelocity(-4,3)
  
	stone = new Stone(450,420,30); 

	mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1120,50,40);
	mango12 = new Mango(900,160,40);

	tree = new Tree(1050,580);
  tree2 = new Tree(200,580)
	ground = new Ground(width/2,600,width,20);

  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:450,y:420});

  apple1 = new Apple(100,100,30);
  apple2 = new Apple(270,130,30);
	apple3 = new Apple(200,150,30);
	apple4 = new Apple(150,70,30);
	apple5 = new Apple(110,270,30);
	apple6 = new Apple(100,200,30);
	apple7 = new Apple(300,230,35);
	apple8 = new Apple(240,300,25);
  apple9 = new Apple(100,230,25);
	apple10 = new Apple(200,200,35);
	apple11 = new Apple(250,50,35);
	apple12 = new Apple(100,350,35);

  fallenApple = new FallenApple(200,350,20)
  
	Engine.run(engine);

}

function draw() {

  background(orchard);
  Engine.update(engine);
  textSize(25);
  fill("white")
  text("Hit the mangoes & apples with the stone!!",300 ,50);
  image(boy ,400,340,200,300);

  greenApple1.y = greenApple1.y + 5

 if(greenApple1.isTouching(groundSprite)){
   greenApple1.y = greenApple1.y - 5
 }

  if(squirrl.isTouching(greenApple1)){
   
  squirrl.addImage(squirrl2Img)
  squirrl.changeImage(squirrl2Img)
   
    squirrl.setVelocity(-3,-4)
    greenApple1.velocityX = -6
    greenApple1.velocityY = -8
  }

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stone.display();
  ground.display();
  launcher.display();
  tree2.display();

  apple1.display()
  apple2.display()
  apple3.display()
  apple4.display()
  apple5.display()
  apple6.display()
  apple7.display()
  apple8.display()
  apple10.display()
  apple11.display()
  apple12.display()

  detectollision(stone,apple1)
  detectollision(stone,apple2)
  detectollision(stone,apple3)
  detectollision(stone,apple4)
  detectollision(stone,apple5)
  detectollision(stone,apple6)
  detectollision(stone,apple7)
  detectollision(stone,apple8)
  detectollision(stone,apple9)
  detectollision(stone,apple10)
  detectollision(stone,apple11)
  detectollision(stone,apple12)

  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)
  detectollision(stone,mango7)
  detectollision(stone,mango8)
  detectollision(stone,mango9)
  detectollision(stone,mango10)
  detectollision(stone,mango11)
  detectollision(stone,mango12)

  stone.display();

  drawSprites()

}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcher.fly();
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

function detectollision2(object1,object2){

  object1pos=object1.body.position
  object2pos=object2.body.position
  
  var distance=dist(object2pos.x, object2pos.y, object1pos.x, object1pos.y)
  	if(distance<=object1.r+object2.r){
      return true;
    }
  else {return false;}
  }


  function isTouching1(object1,object2){
  
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        return true; 
  } 
  if (object1.y - object2.y > object2.height/2 + object1.height/2
    && object2.y - object1.y > object2.height/2 + object1.height/2){
      return true; 
  } 
  }