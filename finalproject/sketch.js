var x = 75
var y = 75
var diameter = 100
var recx = 0
var recy = 350
var cir2x = 0
var cir2y = 800
var cir2diameter = 100
function setup()
{
    createCanvas(800,800);



}
    
function draw(){
background(0);
fill(225);
rect(recx, recy, 800, 10);
fill(230, 108, 44);
circle(x, y, diameter );


//circle one parameters
if (x <= 800)
{
    x += 1;
}
else{
    x=1;
}

if (y <= 300)
{
    y +=1;
}
else y = 1;





if (x <=400)
{
    diameter = 100;
}
else if(x> 400 && x < 600)
{
    diameter = 50 
}
else if(x > 600 || x < 700)
{
    diameter = 30
}


// circle two
fill(225);
circle(cir2x, cir2y ,cir2diameter);

if (cir2x <= 800)
{
    cir2x+=1;
}
else {
    cir2x=0;
}
if (cir2y >=400)
{
    cir2y -= 1;

}
else cir2y = 800;










}
