const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(200,370,50,50)
    box2 = new Box(250,30,50,100)
 
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY)
    box1.display()
    box2.display()
}