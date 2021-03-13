var car,wall
var speed,weight
function setup() {
 createCanvas(1600,400)
  speed=random(55,90)
  weight=random(55,60)
  car=createSprite(50,200,50,50);
  car.shapeColor="white";
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background("black");  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var  dev=0.5 * speed * weight*  speed/22500 ;
  
    if(dev>180)
   {
     car.shapeColor="black"

   }
if(dev<180 && dev>100)
{ car.shapeColor="red";
}
if(dev<100)
{
 
  car.shapeColor="yellow"
}
  


}
  drawSprites();

}