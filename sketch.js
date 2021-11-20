var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage('apple.png');
  leafImg = loadImage("leaf.png","orangeLeaf.png","redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX

  if(frameCount%80 === 0){
    createApples()
  }

  if(frameCount%80 === 0){
    createLeaves()
  }

  drawSprites();
}

function createApples(){
  var apple = createSprite(100,100);
  apple.addImage("food",appleImg);
  apple.scale = 0.07
  apple.x = Math.round(random(20,380))
  apple.velocityY = 5
  apple.lifetime = 400/5
}

function createLeaves(){
  var leaves = createSprite(100,100);
  leaves.addImage("leaves",leafImg);
  leaves.scale = 0.07
  leaves.x = Math.round(random(20,380))
  leaves.velocityY = 5
  leaves.lifetime = 400/5
}