var garden,gardenImg;
var cat, catImg1, catRunning, catImg2;
var mouse , mouseImg1,mouseWaving,mouseImg2;

function preload() {
    gardenImg = loadImage("garden.png");
    catImg1   = loadImage("cat1.png");
    catRunning = loadAnimation("cat2.png","cat3.png");
    catImg2 = loadImage("cat4.png");
    mouseImg1 =  loadImage("mouse1.png");
    mouseWaving = loadAnimation("mouse2.png","mouse3.png");
    mouseImg2 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(800,600);
    garden = createSprite(width/2   ,200);
    garden.addImage(gardenImg);    

   cat = createSprite(600,400);
   cat.addImage("catSitting",catImg1);
   cat.scale=0.1;

   mouse = createSprite(200,400);
   mouse.addImage("mouseStanding",mouseImg1);
   mouse.scale=0.1;

}

function draw() {

    background(255);
    
    if(cat.isTouching(mouse))
    {
        cat.velocityX = 0;
        cat.addAnimation("catStop",catImg2);
        cat.changeAnimation("catStop");
        
        mouse.addAnimation("mouseImg2",mouseImg2);
        mouse.changeAnimation("mouseImg2");

    }

    drawSprites();
    mouse.debug=true;
  mouse.setCollider("rectangle",0,0,80,80);
}



function keyPressed(){

   if(keyCode === LEFT_ARROW ){
       cat.velocityX = -5;
       cat.addAnimation("catRunning",catRunning);
       cat.changeAnimation("catRunning");
   }


}
