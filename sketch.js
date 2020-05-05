var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(30,52);
weight=random(223,321);
  bullet = createSprite(50,200,50,50);
  /*bullet.shapeColor="white"*/
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2);

}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10)
    {
      
      wall.shapeColor=color(255,0,0);

    }
    
    if (damage<10)
    {
      wall.shapeColor=color(2,255,0);
    }
  
  
  }


  drawSprites();
}

function hascollided(bullet,wall){
  var bulletrightedge,wallleftedge;
  bulletrightedge=bullet.x+bullet.width;
  wallleftedge=wall.x;

  if (bulletrightedge>=wallleftedge)
  {
    return true
  }
  return false;

}



