var ship,shipImg;
var sea,seaImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  //create a sea sprite
  sea = createSprite(70,70);
  sea.addImage("sea",seaImg);
  sea.velocityX = 0.3;
}
//code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2;
}
//create a ship sprite
ship = createSprite(180,340,30,30);
ship.addImage("ship",shipImg);


function draw() {
  //background("blue");
 drawSprites();
}
