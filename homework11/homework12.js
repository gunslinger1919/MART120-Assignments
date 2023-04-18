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

  shape1xSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
  shape1ySpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
}
function draw() {
  background(0);
  fill(12, 30, 115);

  //call create borders function
  createBorders(10);

  //call moving character function
  createCharacter(x, y, diameter);

  // call character movement
  characterMovement();

  //mouseClick

  mouseClicked();

// You win

 youWin();


  //character limits

  createCharacterLimits();

  // create enemy
  createEnemy();



  

  
  




 

  circle(mousex, mousey, 10);
}

function createBorders(thickness) {
  //top boreder
  rect(0, 0, width, thickness);

  //left border
  rect(0, 0, thickness, height);
  //bottom border
  rect(0, height - thickness, width, thickness);

  // right upper border

  rect(width - thickness, 0, thickness, height - 50);
}

function createCharacter(x, y, diameter) {
  circle(x, y, diameter);
}
function characterMovement() {
  if (keyIsDown(s)) {
    y += 10;
  } else if (keyIsDown(w)) {
    y -= 10;
  }

  if (keyIsDown(d)) {
    x += 10;
  } else if (keyIsDown(a)) {
    x -= 10;
  }
}

function mouseClicked() {
  circle(mousex, mousey, 10);
  mousex = mouseX;
  mousey = mouseY;
}
function createCharacterLimits() {
  if (x > width) {
    x = 0;
  }

  if (x < 0) {
    x = width;
  }

  if (y > height) {
    y = 0;
  }
  if (y < 0) {
    y = height;
  }

  


}
function createEnemy() {
  fill(30, 100, 20);
  //make shape
  circle(shape1x, shape1y, shape1diameter);

  shape1x += shape1xSpeed;
  shape1y += shape1ySpeed;

  if (shape1y >= 600) {
    shape1y = 10;
  } else if (shape1x >= 800) {
    shape1x = 10;
  }

}

function youWin()
{console.log(x); 
  if (x > width && y > height - 50) {
    fill(255);
    stroke(10);
    textSize(50);
    text("Winner!", width / 2 - 50, height / 2 - 50);
  }

}