var PLAY=0;
var END=1;
var WORK=2;
var gameState = PLAY;
var life=3;
var planets=0;
function preload() 
{
  bg = loadImage("imagess/bgspace.jpg")
  SA = loadAnimation("imagess/s1R.png","imagess/s2R.png","imagess/s1R.png","imagess/s2R.png")
  planetE = loadImage("imagess/earthFr.png")
  planetM = loadImage("imagess/marsR.png")
  planetS = loadImage("imagess/saturnR.png")
  planetJ = loadImage("imagess/jupiterR.png")
  planetU = loadImage("imagess/uranusR.png")
  ending = loadImage("imagess/endingg.PNG")

  //obstacles
  m1=loadAnimation("imagess/M1.png","imagess/M2.png","imagess/M3.png");

  m2=loadAnimation("imagess/M11.png","imagess/M22.png","imagess/M33.png");



}

function setup() {
  createCanvas(2040,950);

  mgroup = new Group();

  spaceship = createSprite(940, 770);
  spaceship.addAnimation("ss",SA)
  spaceship.scale = 0.8

  earth = createSprite(259,250)
  earth.addImage(planetE)
  earth.scale = 0.5
  earth.rotationSpeed = 3;

  mars = createSprite(645,180)
  mars.addImage(planetM)
  mars.scale = 0.6
  mars.rotationSpeed = 3;

  saturn = createSprite(1050,245)
  saturn.addImage(planetS)
  saturn.scale = 0.7
  saturn.rotationSpeed = 1;

  jupiter = createSprite(1400,225)
  jupiter.addImage(planetJ)
  jupiter.scale = 0.6
  jupiter.rotationSpeed = 3;

  uranus = createSprite(1795,256)
  uranus.addImage(planetU)
  uranus.scale = 0.6
  uranus.rotationSpeed = 1;


}

function draw()
 {
  background(bg); 
  
  textSize(30)
  fill("yellow")
  textSize(30)
  text(" LIFE : "+life,20,50)
  text(" PLANETS CONQUERED : "+planets,20,90)
  text("x :"+mouseX+"y : "+mouseY,mouseX,mouseY) 

  if(gameState === PLAY)
  {

    if(spaceship.isTouching(earth))
    {
      earth.destroy();
      planets = planets + 1;

    }
    if(spaceship.isTouching(mars))
    {
      mars.destroy();
      planets = planets + 1;
    }
    if(spaceship.isTouching(saturn))
    {
      saturn.destroy();
      planets = planets + 1;
    }
    if(spaceship.isTouching(jupiter))
    {
      jupiter.destroy();
      planets = planets + 1;
    }
    if(spaceship.isTouching(uranus))
    {
      uranus.destroy();
      planets = planets + 1;
    }


    if(planets == 5)
    {
      background(ending)
      
      text("YOU'VE SUCCESSFULLY ",1200,550)
      text("CONQUERED ALL THE PLANETS",1200,590)
      
      spaceship.destroy();
      mgroup.destroyEach();
    }

    if(keyDown("RIGHT_ARROW"))
    {
      spaceship.x = spaceship.x + 10;
      //spaceship.rotation = spaceship.rotation + 10
    }
    if(keyDown("LEFT_ARROW"))
    {
      spaceship.x = spaceship.x - 10;
    }
    if(keyDown("UP_ARROW"))
    {
      spaceship.y = spaceship.y - 10
    }
    if(keyDown("DOWN_ARROW"))
    {
      spaceship.y = spaceship.y +10
    }
    if(keyDown("r"))
    {
      spaceship.rotation = spaceship.rotation + 10
    }
  
    if(planets!==5)
    {
        spawnMeteros();
    }

    if(spaceship.isTouching(mgroup))
    {
      life = life -1;

      gameState = END;
    
          
    }
    

  }
  else if(gameState === END)
  {
   
    //background("black");
    spaceship.visible = false;
    fill("red")
    stroke("yellow");
    strokeWeight(5);
    textSize(90)
    text("Press R to Restart ",700,500);
  }

  if(keyDown("R") && life > 0)
  {
    spaceship.visible = true;
    gameState = PLAY;
    spaceship.x = 940;
    spaceship.y=770;
  }
  
  
  
 
  drawSprites();

}

function spawnMeteros()
{
  if(frameCount % 50 === 0)
  {
    randomNum2 = round(random(1,2))

    if(randomNum2===1)
    {
      randomNum = random(350,600)
      m=createSprite(0,randomNum);
      m.addAnimation("m2",m1);
      m.velocityX = 6;
      m.scale = 0.8;
    }
    else
    {
      randomNum = random(350,600)
      m=createSprite(2040,randomNum);
      m.addAnimation("m1",m2);
      m.velocityX = -6;
      m.scale = 0.8;
    }

    mgroup.add(m);
   
    


  }

}


