class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density : 0.1
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.photo = loadImage("snow4.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x,pos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			ellipseMode(RADIUS);
			image(this.photo,100,10,50,50);
			pop();
	}
}