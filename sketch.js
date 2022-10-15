var ship
var ship1,ship2,ship3,ship4
var sea
var sea1
function preload(){
  sea = loadAnimation("sea.png");
  ship = loadAnimation("ship2.png,ship1.png,ship4.png,ship3.png");
}

function setup(){
  createCanvas(400,400);

  ship = createSprite (200,200,10,10)

  ship.scale = 0.5;
}

function draw() {
  background("blue");
    drawSprites();

 
}

