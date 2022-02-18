var path,boy,cash,diamonds,carKeys,sword;
var pathImg,boyImg,cashImg,diamondsImg,carKeysImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,carKeysG,swordGroup;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("watch.png");//delete
  carKeysImg = loadImage("car_keys.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
 createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 7


boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
carKeysG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);

   if(path.y > height ){
     path.y = height/2;
   }
  
    createCash();
    createDiamonds();
    createCarKeys();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(carKeysG.isTouching(boy)) {
      carKeysG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        carKeysG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        carKeysG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.2;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createCarKeys() {
  if (World.frameCount % 410 == 0) {
  var carKeys = createSprite(Math.round(random(50, width-50),40, 10, 10));
  carKeys.addImage(carKeysImg);
  carKeys.scale=0.13;
  carKeys.velocityY = 5;
  carKeys.lifetime = 200;
  carKeysG.add(carKeys);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}