class Box
{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
            
            
        }
        this.boxObject = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.boxObject);
        this.width = width;
        this.height = height;
      
     
      }
      display(){
        //var angle = this.boxObject.angle;
        //push();
        //translate(this.boxObject.position.x, this.boxObject.position.y);
        //rotate(angle);
        var pos =this.boxObject.position;
        push();
    
        fill("blue")
        rectMode(CENTER);
        rect(pos.x,pos.y, this.width, this.height);
        pop();
      }
}