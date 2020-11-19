class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1
        }
        this.object = Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height =height;
        World.add(world,this.object)
    }
    display(){
        var angle = this.object.angle;
        push()
        translate(this.object.position.x,this.object.position.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}