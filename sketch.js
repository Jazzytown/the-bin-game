const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 200, 10);
  paper = new Paper(100, 300, 15);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}
function draw() {
  if (gameState === "start") {
    background("green ");
    textSize(60);
    fill("cyan");
    text("so yeah just play the game", 50, 200)
    if (keyCode === RIGHT_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();

  }
}


function keyPressed(){
  if (keyCode === RIGHT_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -10
    });
  }
}
