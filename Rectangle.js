class Platform{

    constructor(x, y, width, height){
   
       var options= {
         isStatic: true,
         'restitution':0.0,
          'friction':3.3,
          'density':1.0
       }
   
       this.body=Bodies.rectangle(x, y, width, height, options);
       this.width=width;
       this.height=height;
      //  this.image= loadImage("Images/dustbingreen.png")
      this.image= loadImage("dustbingreen.png")
       World.add(world,this.body);
   
    }
   
    display(){
       
       var pos= this.body.position;
       var angle= this.body.angle;
       translate(pos.x,pos.y)
      rotate(angle)
       //rectMode(CENTER);
       //rect(pos.x, pos.y, this.width, this.height);
       image(this.image, 0, 0, this.width, this.height);
      }

   
    }