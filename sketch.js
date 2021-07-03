var ball;
function setup() {
  createCanvas(600,600);
  ball = createSprite(300,300,30,30);
  ball.shapeColor="white";
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW))
{
ball.shapeColor="red";
}
if(keyIsDown(LEFT_ARROW))
{
ball.shapeColor="green";
}
if(keyIsDown(DOWN_ARROW))
{
ball.shapeColor="blue";
}
if(keyIsDown(UP_ARROW))
{
ball.shapeColor="yellow";
}
drawSprites();
}




