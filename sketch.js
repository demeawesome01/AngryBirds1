const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var pig1,pig2
var bird
var log1,log2,log3,log4 

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
  bird = new Bird(100,100)
    box1 = new Box(400,300,60,60);
    box2 = new Box(600,300,60,60); 
    box3 = new Box(400,200,60,60); 
    box4 = new Box(600,200,60,60); 
    box5 = new Box(500,150,60,60);
    ground = new Ground(400,height,800,20) 
    pig1 = new Pig(500,300);  
    pig2 = new Pig(500,200);
    log1 = new Log(500,250,300,PI/2) 
    log2 = new Log(500,170,350,PI/2) 
    log3 = new Log(470,160,100,PI/7) 
    log4 = new Log(530,160,100,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display(); 

    box2.display(); 
    box3.display(); 
    box4.display(); 
    box5.display();
    ground.display(); 
    pig1.display();   
    pig2.display();
    log1.display(); 
    log2.display(); 
    log3.display(); 
    log4.display(); 
    bird.display();
}