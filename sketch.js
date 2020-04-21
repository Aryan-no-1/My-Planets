var  sun,mercury,venus,mars,jupiter,wall1,wall2,wall3,wall4
    
function setup() {
  createCanvas(1400,800);
  sun=createSprite(650,350,95,95);
  sun.shapeColor="orange"
  mercury=createSprite(750,350,20,20);
  mercury.shapeColor="yellow"
  mercury.velocityX=-3;
  mercury.velocityY=-6;
  venus=createSprite(800,300,30,30);
  venus.shapeColor="maroon"
  venus.velocityX=-5;
  venus.velocityY=6.5;
  earth=createSprite(870,400,35,35);
  earth.shapeColor="blue"
  earth.velocityX=-6;
  earth.velocityY=-10;
  mars=createSprite(945,350,25,25);
  mars.shapeColor="red"
  mars.velocityX=-4;
  mars.velocityY=4;
  jupiter=createSprite(1015,300,70,70);
  jupiter.shapeColor="orange"
  jupiter.velocityX=-7;
  jupiter.velocityY=-7;
  wall1=createSprite(0,2,2800,2);
  wall1.shapeColor="black"
  wall2=createSprite(2,0,2,1600);
  wall2.shapeColor="black"
  wall3=createSprite(0,798,2800,2);
  wall3.shapeColor="black"
  wall4=createSprite(1398,2,2,1600);
  wall4.shapeColor="black"
}

function draw() {
  background(0,0,0); 
  mercury.bounceOff(wall1)
  mercury.bounceOff(wall2)
  mercury.bounceOff(wall3)
  mercury.bounceOff(wall4)

  venus.bounceOff(wall1)
  venus.bounceOff(wall2)
  venus.bounceOff(wall3)
  venus.bounceOff(wall4)

  earth.bounceOff(wall1)
  earth.bounceOff(wall2)
  earth.bounceOff(wall3)
  earth.bounceOff(wall4)

  mars.bounceOff(wall1)
  mars.bounceOff(wall2)
  mars.bounceOff(wall3)
  mars.bounceOff(wall4)

  jupiter.bounceOff(wall1)
  jupiter.bounceOff(wall2)
  jupiter.bounceOff(wall3)
  jupiter.bounceOff(wall4)

   if (mercury.isTouching(sun)){
       mercury.destroy();
   }
   if (venus.isTouching(sun)){
       venus.destroy();
   }
   if (earth.isTouching(sun)){
       earth.destroy();
   }
   if (mars.isTouching(sun)){
       mars.destroy();
   }
   if (jupiter.isTouching(sun)){
       jupiter.destroy();
   }
    
   if (mercury.isTouching(venus)){
       mercury.destroy();
       venus.destroy();
   }
   if (mercury.isTouching(earth)){
    mercury.destroy();
    earth.destroy();
   }
  if (mercury.isTouching(mars)){
    mercury.destroy();
    mars.destroy();
   }
  if (mercury.isTouching(jupiter)){
    mercury.destroy();
    jupiter.destroy();
   }

   if (venus.isTouching(earth)){
    venus.destroy();
    earth.destroy();
   }

   if (venus.isTouching(mars)){
    venus.destroy();
    mars.destroy();
   }

   if (venus.isTouching(jupiter)){
    venus.destroy();
    jupiter.destroy();
   }

   if (earth.isTouching(mars)){
    earth.destroy();
    mars.destroy();
   }

   if (earth.isTouching(jupiter)){
    earth.destroy();
    jupiter.destroy();
   }

   if (mars.isTouching(jupiter)){
    mars.destroy();
    jupiter.destroy();
   }


    
   drawSprites();
}