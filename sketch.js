var fixedRect, movingRect,object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX=-3;
  movingRect.velocityY=-3;
  //movingRect.debug = true;

  object1 = createSprite(100,100,50,50);
  object1.shapeColor="green";
  object1.velocityX=2;
  object1.velocityY=2;
  object2 = createSprite(200,100,50,50);
  object2.shapeColor="green";
  object2.velocityX=2;
  object2.velocityY=2;
  object3 = createSprite(300,100,50,50);
  object3.shapeColor="green";
  object3.velocityX=2;
  object3.velocityY=2;
  object4 = createSprite(400,100,50,50);
  object4.shapeColor="green";
  object4.velocityX=2;
  object4.velocityY=2;  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //if(isTouching(movingRect,object1))
  //{
  //  movingRect.shapeColor = "blue";
  //  object1.shapeColor = "blue";
  //}
  //else
  //{
  //  movingRect.shapeColor = "green";
  //  object1.shapeColor = "green";
  //}

  bounceOff(object1,movingRect);
  drawSprites();
}

function isTouching(obj1,obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      return true;
}
else {
      return false;
}
}

function bounceOff(obj1,obj2){
 if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2
  && obj2.x - obj1.x < obj2.width/2 + obj1.width/2){
    obj1.velocityX=obj1.velocityX * (-1);
    obj2.velocityX=obj2.velocityX * (-1);
  }
  if(obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
      obj1.velocityY=obj1.velocityY * (-1);
      obj2.velocityY=obj2.velocityY * (-1);
    }
}