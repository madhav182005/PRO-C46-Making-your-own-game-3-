var PLAY = 1; 
var END = 0; 
var gameState = PLAY; 

var bg, bgImg;
var bull, bullImg;
var obstacle1, obstacle2, obstacleImg;
var man, manImg;
var ground, groundImage;
var gameEnded, gameEndedImage, startGame, startGameImage; 

var score; 


function preload() { 
  bgImg = loadImage ("images/background.png"); 
  bullImg = loadAnimation ("images/bull1.png", "images/bull2.png", "images/bull3.png"); 
  obstacle1 = loadImage ("images/obstacle1.png"); 
  obstacle2 = loadImage ("images/obstacle2.png"); 
  manImg = loadAnimation ("images/man1.png", "images/man2.png", "images/man3.png", "images/man4.png"); 

  groundImage = loadImage("images/ground1.jpg");

  gameEndedImage = loadImage("images/gameended.jpg"); 
  startGameImage = loadImage("images/gamestart.jpg"); 
  }

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  bg = createSprite(displayWidth/2, displayHeight/2); 
  bg.addImage(bgImg);
  bg.scale = 2; 

  ground = createSprite(displayWidth/2, displayHeight, displayWidth,2); 
  ground.addImage(groundImage); 
  ground.scale = 2.5; 
  ground.x = ground.width/2;
  ground.velocityX = -8;

  ground1 = createSprite(displayWidth/2, displayHeight-20, displayWidth,2); 

  man = createSprite(400,displayHeight-50);
  man.addAnimation("man", manImg); 
  man.scale = 0.8; 

  bull = createSprite(150, displayHeight-90); 
  bull.addAnimation("bull", bullImg); 
  bull.scale = 0.8; 

  gameEnded = createSprite(800,400,50,50); 
  gameEnded.addImage("gameEnded",gameEndedImage); 
  gameEnded.scale = 0.5; 

  startGame = createSprite(800, 400, 50, 50); 
  startGame.addImage("startGame", startGameImage); 
  startGame.scale = 0.5; 

  gameEnded.visible = true; //make false later once code done 
  startGame.visible = true; //make false later once code done 

  score = 0; 
}

function draw() {
  background(255,255,255);

  man.y = man.y + 0.8; 
  man.collide (ground1);

  man.velocityY = man.velocityY + 0.8
    if (ground.x < 0){
    ground.x = ground.width/2;
  }

  drawSprites();
}