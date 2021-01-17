var Play = 1;
var End = 0;
var gameState = Play;

var boy, boy_running;
var ground, backImg, invisibleGround;
var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var coinGroup, coin1, coin2;

var score = 0;
var gameOver, restart;
localStorage["HighestScore"] = 0;

function preload(){

  boy_running = loadAnimation("assests/runningphoto/boy1.png", "assests/runningphoto/boy2.png",
   "assests/runningphoto/boy3.png","assests/runningphoto/boy4.png", "assests/runningphoto/boy5.png",
   "assests/runningphoto/boy6.png");
  
   backImg1 = loadImage("assests/backimages/back6.jpg");

   obstacleImg1 = loadImage("assests/obs/box1.png");
   obstacleImg2 = loadImage("assests/obs/box2.png");
   obstacleImg3 = loadImage("assests/obs/box3.png");
   obstacleImg4 = loadImage("assests/obs/box4.png");
   obstacleImg5 = loadImage("assests/obs/box5.png");

   coinImg1 = loadImage("assests/coin/coin.png");
   coinImg2 = loadImage("assests/coin/coinsPocket.png");

}

function setup(){

 createCanvas(1200, 700);

 ground = createSprite(600, 350, 1200, 20);
 ground.addImage(backImg1);
 ground.scale = 3.5;
 ground.velocityX = -6;

 invisibleGround = createSprite(600, height - 10, 1200, 10);
 invisibleGround.visible = false;

 boy = createSprite(80, height - 30, 20, 80);
 boy.addAnimation("running", boy_running);
 boy.scale = 0.6;



}

function draw(){

  background(0);

  //console.log(boy.y);

  if(keyDown("space") ){

    boy.velocityY = -15;

  }

  if (ground.x < 100){

    ground.x = ground.width/2;

  }


  boy.velocityY = boy.velocityY+0.8;

  boy.collide(invisibleGround);

  spawnObstacle();

  drawSprites();

}
 
function spawnObstacle(){

  if(frameCount%100 === 0){

    obstacle = createSprite(1200, height - 60, 30, 10);
    obstacle.addImage("obstacle", obstacleImg1);
    obstacle.scale = 0.4;
    obstacle.velocityX = -3;

    obstacle.depth = boy.depth;
    boy.depth = boy.depth + 1;

   

  }

  

}