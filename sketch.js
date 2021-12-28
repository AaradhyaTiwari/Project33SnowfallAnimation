const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg;
var snow = [];

function preload(){
  bgImg = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;


}

function draw() {
  background(bgImg);

  Engine.update(engine);

  if(frameCount%1===0){
    snow.push(new Snow(random(0,windowWidth), 0));
  }

  for(var i = 0; i<snow.length; i++){
    snow[i].display();
  }
}