var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,oLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  oLeafImg = loadImage("orangeLeaf.png");
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
  rabbit.x = mouseX;
  var spawn_select = Math.round(random(1,2));
  if(frameCount%80==0){
    if(spawn_select == 1){
      createApples();
    }
    else {
      createLeaves();
    }
  }
  drawSprites();
}

function createApples(){
  var apple = createSprite(0,0);
  apple.x = Math.round(random(0,400));
  apple.addImage(appleImg);
  apple.scale =0.1;
  apple.velocityY = 4;
  apple.lifetime=110;
}

function createLeaves(){
  var oLeaf = createSprite(0,0);
  oLeaf.x = Math.round(random(0,400));
  oLeaf.addImage(oLeafImg);
  oLeaf.scale =0.1;
  oLeaf.velocityY = 4;
  oLeaf.lifetime=110;
}