var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var background,backgroundImage;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage=loadImage("jungle.jpg");
}



function setup() {

  createCanvas(400, 400);
  monkey = createSprite(100, 300, 10, 50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.122;
  monkey.debug = false;
  ground = createSprite(400, 340, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible=false;
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  banana=createSprite(400,200,50,50);
  banana.addImage("banana",bananaImage);
  banana.velocityX=-4;
  obstacle=createSprite(400,310,50,50);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-6;
  var survivalTime=0;
  background=createSprite(0,0,600,600);
  background.addImage("background",backgroundImage);
  background.velocityX=-3;
  background.x=background.width/2;
}


function draw() {
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if(background.x<0)   {
    background.x=background.width/2;
  }
  if(keyDown("space")&& monkey.y>=290)  {
    monkey.velocityY=-17;
  }
  if(banana.isTouching(monkey))  {
    score=score+2;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnBananas();
  spawnObstacles();
  drawSprites();
  var survivalTime=0;
  var score=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,300,50);
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,20,50);
  monkey.depth=background.depth;
  monkey.depth=background.depth+1;
}
function spawnBananas()  {
 if(frameCount % 100===0) {
  banana=createSprite(400,200,50,50);
  banana.addImage("banana",bananaImage);
  banana.velocityX=-4;
   banana.y=Math.round(random(120,200));
   banana.lifetime=100;
 }
  FoodGroup.add(banana);
   banana.scale=0.1;
}
function spawnObstacles()   {
  if(frameCount %  300===0)   {
  obstacle=createSprite(400,310,50,50);
  obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-6;
    obstacle.lifetime=66.67;
  }
  obstacleGroup.add(obstacle);
  obstacle.scale=0.2;
}




