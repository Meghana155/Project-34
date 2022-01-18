//Create variables here
var dog, happyDog, database, foodS, foodStock;
var happyDogImage;

function preload(){
  happyDogImage=loadImage("dogImg1.png");
  dogImage=loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200, 450, 100, 100);
  dog.addImage(dogImage)
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  
  //add styles here

}

function readStock(data) {
  foodS=data.val();
}
function writeStock(x) {
  if(x<=0) {
  x=0;
  }
else {
  x=x-1;
}
database.ref("/").update({
  Food:x
})
}


