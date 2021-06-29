var garden,rabbit;
var gardenImg,rabbitImg;
var apple; appleImage;
var leaves; leavesImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  leavesImage = loadImage("leaves.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating rabbit 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.position.x=mouseX
  rabbit.position.y=mouseY

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1, 2))

  if (frameCount % 80 === 0){
    if (select_sprites == 1){
      createApples()
    }
    else{
      createLeaves()
    }
  }
  



  drawSprites();
}

function createApples()
{
  apple = createSprite(Math.round(random(50, 350)), 40, 10, 10)
  apple.addImage(appleImage)
  apple.scale=0.02
  apple.velocityY=2
  apple.lifetime=175
  
}
function createLeaves()
{
  leaves = createSprite(Math.round(random(50, 350)), 40, 10, 10)
  leaves.addImage(leavesImage)
  leaves.scale=0.02
  leaves.velocityY=2
  leaves.lifetime=175
  
}