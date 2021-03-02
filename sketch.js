var garden, gardenImage

var cat, catImage, catMoveImages, catMove, catEnd, catEndImage

var mouse, mouseImage, mouseMoveImages, mouseMove, mouseEnd, mouseEndImage



function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");

    catImage=loadImage("cat1.png");
    catMoveImages=loadAnimation("cat2.png","cat3.png")
    catEndImage=loadImage("cat4.png")

    mouseImage=loadImage("mouse1.png");
    mouseMoveImages=loadAnimation("mouse2.png","mouse3.png")
    mouseEndImage=loadImage("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    

    //create cat and mouse sprites here
    cat=createSprite(850, 600);
     cat.addImage(catImage);
   
   cat.scale = 0.15;
   

   console.log(cat.x, cat.y)

    mouse=createSprite(100, 650, 20, 20);
    mouse.addImage(mouseImage)
    
    mouse.scale = 0.15;


   

}

function draw() {

    background(gardenImage);

    //Write condition here to evaluate if cat and mouse collide
 if(cat.x-mouse.x < (cat.width-mouse.width)/2)
  {
   
   cat.velocityX=0;
   cat.addImage("catLastImage", catEndImage);
    cat.x =300;
    cat.scale=0.2;
    
    mouse.addImage("mouseLastImage",mouseEndImage);
    mouse.scale=0.15;
  }
  
   
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("space")) {
      
        //catMove=createSprite(850, 700, 20, 20);
        cat.velocityX = -4;
        cat.addAnimation("moving cat", catMoveImages);
        
       
        

       // mouseMove=createSprite(850, 100, 20, 20);
       mouse.addAnimation("mouseTeasing", mouseMoveImages)
       
    }
  }
