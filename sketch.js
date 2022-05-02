const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
//create a player object from the Player class.
player = new Player(300,playerBase.body.position.y - 153 ,50,180);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  
}

function draw() {
  background("skyblue");

  Engine.update(engine);

  // Title
  fill("red");
  textAlign("center");
  stroke("black");
  textSize(40);
  textFont("Cooper Black");
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
//call the display() function for the player object.
  player.display();

  computerBase.display();
  computer.display();
  

}