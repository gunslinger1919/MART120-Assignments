
var x = 100;

var y = 100;
var diameter = 25;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shape1x = 10;

var shape1y = 10;

var shape1diameter = 70;

var shape1XSpeed;
var shape2YSpeed;

var mousex = 10;
var mousey = 10;

function setup() {
  createCanvas(800, 600);

  shape1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shape1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


}
function draw() {
  background(0);
  fill(12, 30, 115);

  //top boreder
  rect(0, 0, width, 10);

  //left border
  rect(0, 10, 10, height);

  //bottom border
  rect(0, height - 10, width, 10);

  // right upper border

  rect(width - 10, 0, 10, height - 50);

  // exit message
  textSize(20);
  text("exit", width - 50, height - 50);

  circle(x, y, diameter)

  if (keyIsDown(s)) {

    y += 10;
  }
  else if (keyIsDown(w)) {
    y -= 10;

  }

  if (keyIsDown(d)) {
    x += 10;

  }

  else if (keyIsDown(a)) {

    x -= 10;
  }

  if (x > width)
  {
    x = 0;
  }

  if (x< 0)
  {
    x = width;
  }

  if (y > height)
  {
    y = 0;
  }
  if ( y < 0)
{
  y =  height;
}

// check to see if you won

if ( x > width && x > width-50 )

{

  fill(10);
  stroke(10);
  textSize(50);
  text("Winner!" ,width/2-50, height/2-50);
}
  // enemy

  fill(10,100,20);
  //make shape
  circle(shape1x,shape1y,shape1diameter);

  shape1x += shape1xSpeed;
  shape1y += shape1ySpeed;

  if (shape1y >= 600)
  {
    shape1y = 10;
  }
  else if (shape1x >= 800)

{
  shape1x = 10;
}


circle(mousex,mousey, 10, 10,);



}
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}















