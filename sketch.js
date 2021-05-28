const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var body;
var pic;
var snow;

function preload(){
  pic = loadImage("Snow Man.png");
  bg = loadImage("snow1.jpg");
  music = loadSound("JoyMusic.mp3");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  music.loop();
  snow = new Snow(100,10,10);
}

function draw() {
  background(bg);
  drawSprites();
  image(pic,500,100,200,300);
  Engine.update(engine);
  snow.display();
}