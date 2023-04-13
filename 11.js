var redColor = 123;

var greenColor = 39;

var blueColor = 21;

var size = 15;

var count = 0;

var sizeDirection = 2;

var leftpupilX= 270

var leftpupilY= 250

var leftpupilDirection= 1; 

var rightpupilX=476

var rightpupilY=250

var rightpupilDirection= 5;

var leftearY=300

var leftearDirection = 1

var rightearY =300

var rightearDirection=4

var mouthX = 300

var mouthX2= 450

var mouthDirection= 3

var mouthY =450

var mouthY2 =450

// this function is called only once


function setup() {
  createCanvas(800, 600);

}
/*this function keeps going while the sketch is open in browser
*/

function draw() {

  background(redColor, blueColor, greenColor);


 //Head//

  fill(redColor, greenColor, 500);
  circle(376, 300, 550);

  //left eye//

  ellipse(270, 250, 130, 80);

  //right eye//

  ellipse(475, 250, 130, 80);

  //left cornea//

  fill(75, 50, 0);
  circle(270, 250, 75);

  //left pupil//

  fill(10);
  circle(leftpupilX, leftpupilY, 40);
  leftpupilX+=leftpupilDirection;

  if (leftpupilX >=280 || leftpupilX<= 250 ) 

  {
    leftpupilDirection*= -1;
  }

  //right cornea//

  fill(75, 50, 0);
  circle(476, 250, 75);

  //right pupil//
  fill(10);
  circle(rightpupilX, rightpupilY, 40);

  rightpupilX+=rightpupilDirection;

  if (rightpupilX>=486 || rightpupilX<=466)
  {
    rightpupilDirection *=-1;
  }

  //nose//

  fill(blueColor);
  triangle(375, 300, 320, 375, 410, 375);

  //left eyebrow//

  fill(0)
  rect(210, 200, 120, 5);

  //right eyebrow//

  fill(0)
  rect(420, 200, 120, 5);

 

  //title//
  textSize(25);
  text('"The Notorious R.O.E"', 250, 600);

  //name//

textSize(size);

size+= sizeDirection;

count++;
if(count> 5)

{
  sizeDirection *=-1;

count= 0;
}

text("Shawn Roe", 20, 50);


  //mouth//

  line(mouthX,mouthX2, mouthY, mouthY2);

  mouthX+=mouthDirection;
  mouthX2+=mouthDirection;
  mouthY+=mouthDirection;
  mouthY2+=mouthDirection; 

  if(mouthX <=300 || mouthX>=350)
  {
    mouthDirection *=-1;
  }

  

  //left ear//

  fill(500);
  ellipse(77,leftearY, 50, 170);
 
  leftearY+=leftearDirection;

if(leftearY >= 400 || leftearY <= 300)
{
  leftearDirection *=-1;
}

  

  

  //right ear//

  fill(500);
  ellipse(675, rightearY, 50, 170)
  rightearY += rightearDirection;
  

  if( rightearY <=300 || rightearY>= 400)

  {
    rightearDirection *= -1;
  }




}



