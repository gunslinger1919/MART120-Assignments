class myCircle{

    //constructor
    constructor(x, y, diameter, r, g, b,)
{
    this.x = x;
    this.y = y; 
    this.diameter = diameter;
    this.r = r;
    this.g = g;
    this.b = b;
}
display()
{
    fill(this.r, this.g, this.b);
    circle( this.x, this.y, this.diameter);
}

}