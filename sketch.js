var path, pathImage;
var boy, boyImg;

function preload() {
  //pre-load images
  pathImage = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 600);
  //create sprites here

  path = createSprite(200, 200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200, 500);
  boy.addAnimation("b1",boyImg);
  boy.scale=0.1;
}

function draw() {
  background(0);
 edges = createEdgeSprites();
  if (path.y>500) {
    path.y=height/2;
  }

  boy.x= mouseX;
  boy.collide(edges[0])
  boy.collide(edges[1])
  drawSprites();
}
