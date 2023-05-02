var x = 100;
var y = 100;
var diameter = 25;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shape1x = [];

var shape1y = [];

var shape1diameter = [];

var shape1XSpeed = [];
var shape2YSpeed = [];

var mousex = 10;
var mousey = 10;
var circleObject; 
function setup() {
  createCanvas(800, 600);
  circleObject = new myCircle(100, 100, 100, 220, 120, 75);
circleObject2 = new myCircle(300, 200, 200, 225, 33, 71);
  circleObject3 = new myCircle(400,500,50,100,222,200);
  //random speeds
  for (var i = 0; i < 5; i++) {
    shape1XSpeed[i] = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
    shape2YSpeed[i] = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
    shape1x[i] = getRandomNumber(200);
    shape1y[i] = getRandomNumber(600);
    shape1diameter[i] = getRandomNumber(75);
  }
}


function draw() {
  background(0);
  
  circleObject.display();
circleObject2.display();
circleObject3.display();
  //call create borders function
  createBorders(10);

  //call moving character function
  
  fill(12, 30, 115);
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














}

function createBorders(thickness) {
  fill (15, 75, 100);
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
  for (var i = 0; i < shape1x.length; i++) {
    circle(shape1x[i], shape1y[i], shape1diameter[i]);

    shape1XSpeed[i] = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
    shape2YSpeed[i] = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);

    shape1x[i] += shape1XSpeed[i];
    shape1y[i] += shape2YSpeed[i];

    if (shape1y[i] >= 600) {
      shape1y[i] = 10;
    } else if (shape1x >= 800) {
      shape1x = 10;
    }

  }


 
}
function getRandomNumber(number){

  return random(number);
}
function youWin(){
  if (x > width && y > height - 50) {
    fill(255);
    stroke(10);
    textSize(50);
    text("Winner", width / 2 - 50, height / 2 - 50);
  }
}